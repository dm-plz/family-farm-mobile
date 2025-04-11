import { useIsAuthorizedService } from '../services/useIsAuthorizedService';

import queryClient from '@/api/queryClient';
import { useSigninWithAgent } from '@/store/queries/useAuthQuery';
import { userQueryKeys } from '@/store/queries/user';
import useCredentialStore from '@/store/stores/credentialStore';
import { AuthAgent } from '@/types';
import { authorizeWithAgent } from '@/utils/agentAuth';
import { showToast } from '@/utils/toast';

export default function useAuth() {
  const { removeToken } = useCredentialStore();

  const { mutate: signinWithAgent } = useSigninWithAgent();

  const { setUnauthorized: setSignout } = useIsAuthorizedService();

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
      showToast({ title: '성공적으로 로그아웃 되었습니다.' }, 'success', {
        onShow: () => setSignout(),
      });
    },
  };
}
