import { defaultRouteNames } from '@/constants';
import { useAuthStore } from '@/store/stores';
import useNavigationStore from '@/store/stores/navigationStore';

export default function useAuth() {
  const { setIsLogin } = useAuthStore();
  const { moveWithFlush } = useNavigationStore();

  return {
    signUpSuccess: () => {
      moveWithFlush(defaultRouteNames.HOME);
      setIsLogin(true);
    },
  };
}
