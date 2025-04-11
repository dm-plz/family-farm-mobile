import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { useIsAuthorizedService } from '../services/useIsAuthorizedService';

import { useGetUserInfo } from '@/store/queries/user';
import useCredentialStore from '@/store/stores/credentialStore';
import { getEncryptStorage } from '@/utils/encryptStorage';

export default function useInitApp() {
  const { setToken } = useCredentialStore();
  const { data: userInfo, refetch: refetchUserInfo } = useGetUserInfo();
  const { setAuthorized: setSignin } = useIsAuthorizedService();

  //NOTE: 최초로 1번만 실행 됨
  useEffect(() => {
    (async () => {
      const credentials = await getEncryptStorage('credential_token');

      if (credentials) {
        setToken(credentials);
        refetchUserInfo()
          .then(() => {
            setSignin();
          })
          .finally(() => {
            SplashScreen.hide();
          });
      } else {
        setTimeout(() => {
          SplashScreen.hide();
        }, 100);
      }
    })();
  }, [setToken, refetchUserInfo, setSignin]);

  return { isAuthroized: !!userInfo };
}
