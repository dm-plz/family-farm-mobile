import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { useGetUserInfo } from '@/store/queries/user';
import useCredentialStore from '@/store/stores/credentialStore';
import { getEncryptStorage } from '@/utils/encryptStorage';

export default function useInitApp() {
  const { setToken } = useCredentialStore();
  const { data: userInfo, refetch: refetchUserInfo } = useGetUserInfo();

  useEffect(() => {
    (async () => {
      const credentials = await getEncryptStorage('credential_token');

      if (credentials) {
        setToken(credentials);
        refetchUserInfo();
      }

      setTimeout(() => {
        SplashScreen.hide();
      }, 100);
    })();
  }, [setToken, refetchUserInfo]);

  return { isAuthroized: !!userInfo };
}
