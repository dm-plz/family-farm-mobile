import {kyInstance} from './ky';

import {BirthType, GoupRole, OAuthAgent} from '@/types';
//NOTE: 아직 BE에서 토큰 재발급 관련 API 미기획
// import {getEncryptStorage} from '@/utils';

type RequestSignUp = {
  nickName: string;
  OAuthProvider: OAuthAgent;
  birth: Date;
  birthType: BirthType;
  email: String;
  groupRole: GoupRole;
  familyCode: null | string;
  alertToken: {
    deviceId: string;
    type: 'FCM';
    value: string;
  };
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
  grantType: string;
};

async function postSignUp(body: RequestSignUp) {
  return (await kyInstance
    .post('auth/oauth/sign-up', {json: body})
    .json()) as ResponseToken;
}

type RequestSignIn = {
  OAuthProvider: OAuthAgent;
  AuthorizationCode: string;
};

async function postSignIn(body: RequestSignIn) {
  return (await kyInstance
    .post('auth/oauth/sign-in', {json: body})
    .json()) as ResponseToken;
}

async function getSignOut() {
  return await kyInstance.get('auth/sign-out').json();
}

//NOTE: 아직 BE에서 토큰 재발급 관련 API 미기획
// async function getAccessToken() {
//   const refreshToken = await getEncryptStorage('refreshToken');

//   return (await kyInstance
//     .get('auth/token/refresh', {
//       headers: {
//         Authorization: `Bearer ${refreshToken}`,
//       },
//     })
//     .json()) as ResponseToken;
// }

export {
  postSignUp,
  postSignIn,
  getSignOut,
  //NOTE: 아직 BE에서 토큰 재발급 관련 API 미기획
  // getAccessToken
};
export type {RequestSignUp, ResponseToken, RequestSignIn};
