import { authRouteNames, defaultRouteNames } from '@/constants';
import { useIsAuthorizedStore } from '@/store/stores';
import useNavigationStore from '@/store/stores/navigationStore';
import { navigate } from '@/utils/navigation';

//TODO: 네비게이션 작동 방식을 수정 한 후 해당 위치에서 네비게이션 자체를 이동하도록 만들어야 보다 안전 함
export function useIsAuthorizedService() {
  const { setIsAuthorized } = useIsAuthorizedStore();
  const { moveWithFlush } = useNavigationStore();

  return {
    setSignout: () => {
      setIsAuthorized(false);
      navigate('AuthStackNavigator');
      moveWithFlush(authRouteNames.SIGN_IN);
    },
    setSignin: () => {
      setIsAuthorized(true);
      moveWithFlush(defaultRouteNames.HOME);
    },
  };
}
