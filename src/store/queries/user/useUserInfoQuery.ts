import { useQuery } from '@tanstack/react-query';

import { getMy } from '@/api/my';

export const userQueryKeys = {
  my: () => ['user_my'],
};

export function useGetUserInfo() {
  return useQuery({
    queryKey: userQueryKeys.my(),
    queryFn: () => getMy(),
    staleTime: 1000 * 60 * 60 * 24,
  });
}
