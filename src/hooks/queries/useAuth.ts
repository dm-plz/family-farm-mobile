import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MutationFunction, useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import {
  BodySignIn,
  getSignOut,
  postSignIn,
  reIssueToken,
  ResponseSub,
  ResponseToken,
} from '@/api/auth';
import { removeHeader, setHeader } from '@/api/ky';
import { getMy } from '@/api/my';
import queryClient from '@/api/queryClient';
import { queryKeys, signUpNavigation, storageKeys } from '@/constants';
import { numbers } from '@/constants/numbers';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';
import { UseMutationCustomOptions, UseQueryCustomOptions } from '@/types';
import { removeEncryptStorage, setEncryptStorage } from '@/utils';

function useSignIn<T>(
  signInAPI: MutationFunction<ResponseToken | ResponseSub, T>,
  mutationOptions?: UseMutationCustomOptions,
) {
  const navigation = useNavigation<StackNavigationProp<SignUpStackParamList>>();

  return useMutation({
    mutationFn: signInAPI,
    onSuccess: async (responseBody: ResponseToken | ResponseSub) => {
      if ('accessToken' in responseBody) {
        // 회원인 경우
        const { accessToken, refreshToken } = responseBody;

        setHeader('Authorization', `Bearer ${accessToken}`);
        setEncryptStorage(storageKeys.REFRESH_TOKEN, refreshToken);
      } else {
        // 비회원인 경우
        const { sub } = responseBody.data;

        navigation.navigate(signUpNavigation.JOIN_1);
      }
    },
    onSettled: async () => {
      queryClient.refetchQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUTH, queryKeys.GET_MY],
      });
    },
    ...mutationOptions,
  });
}
function useSignOut(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: getSignOut,
    onSuccess: async () => {
      removeHeader('Authorization');
      await removeEncryptStorage(storageKeys.REFRESH_TOKEN);
      queryClient.resetQueries({ queryKey: [queryKeys.AUTH] });
    },
    ...mutationOptions,
  });
}

function useGetRefreshToken() {
  const { data, isSuccess, isError } = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
    queryFn: reIssueToken,
    staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data.accessToken}`);
      setEncryptStorage(storageKeys.REFRESH_TOKEN, data.refreshToken);
    }
  }, [isSuccess, data?.accessToken, data?.refreshToken]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      removeEncryptStorage(storageKeys.REFRESH_TOKEN);
    }
  }, [isError]);

  return { isSuccess };
}

function useGetMy(queryOptions?: UseQueryCustomOptions) {
  return useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_MY],
    queryFn: getMy,
    ...queryOptions,
  });
}

function useKaKaoSignIn(mutationOptions?: UseMutationCustomOptions) {
  return useSignIn<BodySignIn>(postSignIn, mutationOptions);
}

function useAuth() {
  const refreshTokenQuery = useGetRefreshToken();
  const getMyQuery = useGetMy({
    enabled: refreshTokenQuery.isSuccess,
  });

  const isSignedIn = getMyQuery.isSuccess;
  const kakaoSignInMutation = useKaKaoSignIn();
  const signOutMutation = useSignOut();

  return { isSignedIn, kakaoSignInMutation, signOutMutation };
}

export default useAuth;
