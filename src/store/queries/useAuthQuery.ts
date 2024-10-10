import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import _ from 'lodash';

import {
  postSignIn,
  postSignUp,
  validateInviteCode,
  validateNickName,
} from '@/api/auth';
import { getMy } from '@/api/my';
import queryClient from '@/api/queryClient';
import { authRouteNames } from '@/constants';
import { useAuthStore } from '@/store/stores';
import type { AuthToken } from '@/types';
import { navigate } from '@/utils/navigation';

export const authQueryKeys = {
  keychainToken: () => ['token-from-keychain'],
  my: () => ['my-information'],
  validateInviteCode: (inviteCode: string | null) => [
    'validateInviteCode',
    inviteCode,
  ],
  validateNickName: (nickName: string) => ['validateNickName', nickName],
};

const ASYNC_STORAGE_KEY = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
};

export function useGetAuthTokens(): UseQueryResult<Partial<AuthToken>> {
  return useQuery({
    queryKey: authQueryKeys.keychainToken(),
    queryFn: async () => {
      const accessToken =
        (await AsyncStorage.getItem(ASYNC_STORAGE_KEY.accessToken)) ??
        undefined;
      const refreshToken =
        (await AsyncStorage.getItem(ASYNC_STORAGE_KEY.refreshToken)) ??
        undefined;

      return { accessToken, refreshToken };
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}

export function useSigninWithAgent() {
  const { setIsLogin } = useAuthStore();

  return useMutation({
    mutationFn: postSignIn,
    onSuccess: ({ accessToken, refreshToken }) =>
      Promise.all([
        AsyncStorage.setItem(ASYNC_STORAGE_KEY.accessToken, accessToken),
        AsyncStorage.setItem(ASYNC_STORAGE_KEY.refreshToken, refreshToken),
      ]).then(() => {
        queryClient.invalidateQueries({
          queryKey: authQueryKeys.keychainToken(),
          refetchType: 'all',
        });
        setIsLogin(true);
      }),
    onError: () => {
      //FIXME: 로그인 실패를 제외한 에러에서는 다른 동작이 진행되어야 함
      try {
        navigate(authRouteNames.JOIN1);
      } catch (error) {
        //NOTE: 해당 에러의 경우 잘못된 설계로 인해 발생될 확률이 큼
        console.error(error);
      }
    },
  });
}

export function useGetUserInfo() {
  return useQuery({
    queryKey: authQueryKeys.my(),
    queryFn: () => getMy(),
    staleTime: 1000 * 60 * 60 * 24,
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: ({ accessToken, refreshToken }) =>
      Promise.all([
        AsyncStorage.setItem(ASYNC_STORAGE_KEY.accessToken, accessToken),
        AsyncStorage.setItem(ASYNC_STORAGE_KEY.refreshToken, refreshToken),
      ]).then(() =>
        queryClient.invalidateQueries({
          queryKey: authQueryKeys.keychainToken(),
          refetchType: 'all',
        }),
      ),
    onError: () => {
      //TODO: 어떻게 처리해야할지 정해야 함
    },
  });
}

export function useValidateInviteCode(inviteCode: string | null) {
  return useQuery({
    queryKey: authQueryKeys.validateInviteCode(inviteCode),
    queryFn: () => validateInviteCode({ inviteCode } as { inviteCode: string }),
    enabled: !!inviteCode && inviteCode.length === 8,
    staleTime: 1000,
  });
}

export function useValidateNickName(rawNickName?: string) {
  const nickName = rawNickName?.trim();

  return useQuery({
    queryKey: authQueryKeys.validateNickName(nickName ?? ''),
    queryFn: _.throttle(
      () => validateNickName({ nickName } as { nickName: string }),
      300,
      { trailing: false },
    ),
    enabled: !!nickName && nickName.length > 0,
    staleTime: 1000,
  });
}
