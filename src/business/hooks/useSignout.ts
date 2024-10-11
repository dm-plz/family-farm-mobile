import queryClient from '@/api/queryClient';
import { userQueryKeys } from '@/store/queries/user';
import useCredentialStore from '@/store/stores/credentialStore';

export function useSignout() {
  const { removeToken } = useCredentialStore();

  return {
    signout: () => {
      removeToken();
      queryClient.removeQueries({ queryKey: userQueryKeys.my() });
    },
  };
}
