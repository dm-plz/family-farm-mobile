import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import DefaultTabNavigator from './DefaultTabNavigator';

import { useIsAuthorizedService } from '@/business/services/useIsAuthorizedService';
import ErrorScreen from '@/screen/ErrorScreen';
import { useGetUserInfo } from '@/store/queries/user';
import { useErrorStore } from '@/store/stores';
import useCredentialStore from '@/store/stores/credentialStore';
import { getEncryptStorage } from '@/utils';

export default function RootNavigator() {
  const { errorType } = useErrorStore();

  const { setToken } = useCredentialStore();
  const { refetch: refetchUserInfo } = useGetUserInfo();
  const { setSignin } = useIsAuthorizedService();

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

  //XXX: ErroType이 변경될 때 보여질 화면 처리 로직도 수정해야 함 (defaultTabNavigator에서 가야 함)
  if (errorType) {
    return <ErrorScreen type={400} />;
  }

  return <DefaultTabNavigator />;
}
