import { useQuery } from '@tanstack/react-query';

import { getMy } from '@/api/my';
import useCredentialStore from '@/store/stores/credentialStore';

export const userQueryKeys = {
  my: () => ['user_my'],
};

export function useGetUserInfo() {
  const { accessToken, refreshToken } = useCredentialStore();
  return useQuery({
    queryKey: userQueryKeys.my(),
    queryFn: () => getMy(),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!accessToken && !!refreshToken,
  });
}
