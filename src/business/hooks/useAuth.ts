import { authorizeWithAgent } from '@/business/services/authorizeService';
import { defaultRouteNames } from '@/constants';
import { useSigninWithAgent } from '@/store/queries/useAuthQuery';
import { useAuthStore } from '@/store/stores';
import useNavigationStore from '@/store/stores/navigationStore';
import { AuthAgent } from '@/types';

export default function useAuth() {
  const { setIsLogin } = useAuthStore();
  const { moveWithFlush } = useNavigationStore();
  const { mutate: signinWithAgent } = useSigninWithAgent();

  return {
    authorize: async (agent: AuthAgent) => {
      try {
        const agentToken = await authorizeWithAgent(agent);
        signinWithAgent({ agent, agentToken });
      } catch (error) {
        //TODO: OAuth에서 인증이 실패한 경우에 대한 에러 처리가 들어가야 함
      }
    },
    signUpSuccess: () => {
      moveWithFlush(defaultRouteNames.HOME);
      setIsLogin(true);
    },
  };
}
