import { kyInstance } from './ky';
import { authApis } from './routes';

import { AlertToken, BirthType, GoupRole, OAuthAgent } from '@/types';
import { createUrl } from '@/utils/url';

type BodySignUp = {
  nickName: string;
  OAuthProvider: OAuthAgent;
  birth: Date;
  birthType: BirthType;
  email: String;
  groupRole: GoupRole;
  familyCode: null | string;
  alertToken: AlertToken;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
  grantType: string;
};

async function postSignUp(body: BodySignUp) {
  return await kyInstance
    .post(authApis.signUp, { json: body })
    .json<ResponseToken>();
}

type BodySignIn = {
  OAuthProvider: OAuthAgent;
  AuthorizationCode: string;
};

async function postSignIn(body: BodySignIn) {
  return await kyInstance
    .post(authApis.signIn, { json: body })
    .json<ResponseToken>();
}

async function getSignOut() {
  return await kyInstance.get(authApis.signOut).json();
}

async function reIssueToken() {
  return await kyInstance.patch(authApis.reIssueToken).json<ResponseToken>();
}

type QueryValidateFamilyCode = {
  familyCode: string;
};

type ResponseValidateFamilyCode = {
  isValidate: boolean;
};

async function validateFamilyCode(query: QueryValidateFamilyCode) {
  const apiUrl = createUrl(authApis.validateFamilyCode, { query });
  return await kyInstance.get(apiUrl).json<ResponseValidateFamilyCode>();
}

type BodyReRegistrationAlertToken = {
  userId: number;
} & AlertToken;

async function reRegistrationAlertToken(body: BodyReRegistrationAlertToken) {
  return await kyInstance
    .patch(authApis.reRegistrationAlertToken, { json: body })
    .json();
}

export {
  postSignUp,
  postSignIn,
  getSignOut,
  reIssueToken,
  validateFamilyCode,
  reRegistrationAlertToken,
};
export type {
  BodySignUp,
  ResponseToken,
  BodySignIn,
  QueryValidateFamilyCode,
  ResponseValidateFamilyCode,
  BodyReRegistrationAlertToken,
};
