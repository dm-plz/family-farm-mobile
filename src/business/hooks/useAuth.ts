import queryClient from '@/api/queryClient';
import { authorizeWithAgent } from '@/business/services/authorizeService';
import { defaultRouteNames } from '@/constants';
import { useSigninWithAgent } from '@/store/queries/useAuthQuery';
import { userQueryKeys } from '@/store/queries/user';
import useCredentialStore from '@/store/stores/credentialStore';
import useNavigationStore from '@/store/stores/navigationStore';
import useSignupStore from '@/store/stores/signupStore';
import { AuthAgent } from '@/types';

export default function useAuth() {
  const { moveWithFlush } = useNavigationStore();
  const { removeToken } = useCredentialStore();
  const { removeAllState } = useSignupStore();

  const { mutate: signinWithAgent } = useSigninWithAgent();

  return {
    signin: async (agent: AuthAgent) => {
      try {
        const agentToken = await authorizeWithAgent(agent);
        signinWithAgent({ agent, agentToken });
      } catch (error) {
        //TODO: OAuth에서 인증이 실패한 경우에 대한 에러 처리가 들어가야 함
      }
    },
    signout: () => {
      removeToken();
      queryClient.removeQueries({ queryKey: userQueryKeys.my() });
    },
    signupSuccess: () => {
      removeAllState();
      queryClient.invalidateQueries({ queryKey: userQueryKeys.my() });
      moveWithFlush(defaultRouteNames.HOME);
    },
  };
}
