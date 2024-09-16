import {
  GoogleSignin,
  // isErrorWithCode,
  // statusCodes,
} from '@react-native-google-signin/google-signin';
import { Platform } from 'react-native';
import { authorize } from 'react-native-app-auth';

const GOOGLE_OAUTH_APP_GUID = '686661822188-cct2iq77fl06fk5t9dlsnatgtr90k4lc';
const config = {
  issuer: 'https://accounts.google.com',
  clientId: `${GOOGLE_OAUTH_APP_GUID}.apps.googleusercontent.com`,
  redirectUrl: `com.googleusercontent.apps.${GOOGLE_OAUTH_APP_GUID}:/oauth2redirect/google`,
  scopes: ['openid'],
};

export async function signInWithGoogle() {
  //NOTE: @react-native-google-signin/google-signin 라이브러리 내 android 기기 로그인 방식은 legacy임
  //NOTE: 이에 react-native-app-auth 라이브러리를 사용하기로 결정함
  return Platform.OS === 'ios' ? await signIn() : await authorize(config);
}

GoogleSignin.configure({
  webClientId:
    '686661822188-s6ncq8rrrmthulnbsu7240gclfos3i5v.apps.googleusercontent.com',
  scopes: ['openid'],
  offlineAccess: true,
  iosClientId:
    '686661822188-oulmfo3ohbbs2b26q0bst9ldufdr8rnt.apps.googleusercontent.com',
});

export async function signIn() {
  // try {
  await GoogleSignin.hasPlayServices();
  return await GoogleSignin.signIn();
  // } catch (error) {
  //   if (isErrorWithCode(error)) {
  //     console.error(error);
  //     switch (error.code) {
  //       case statusCodes.SIGN_IN_CANCELLED:
  //         // user cancelled the login flow
  //         break;
  //       case statusCodes.IN_PROGRESS:
  //         // operation (eg. sign in) already in progress
  //         break;
  //       case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //         // play services not available or outdated
  //         break;
  //       default:
  //       // some other error happened
  //     }
  //   } else {
  //     console.error(error);
  //   }
  // }
}
