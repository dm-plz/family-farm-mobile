import {kyInstance} from './ky';

import {BirthType, GoupRole, OAuthAgent} from '@/types';
import {getEncryptStorage} from '@/utils';

type RequestSignUp = {
  nickName: string;
  OAuthProvider: OAuthAgent;
  birth: Date;
  birthType: BirthType;
  email: String;
  groupRole: GoupRole;
  familyCode: null | string;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
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

async function getAccessToken() {
  const refreshToken = await getEncryptStorage('refreshToken');

  return (await kyInstance
    .get('auth/token/refresh', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    .json()) as ResponseToken;
}

export {postSignUp, postSignIn, getSignOut, getAccessToken};
export type {RequestSignUp, ResponseToken, RequestSignIn};
