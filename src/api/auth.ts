import { kyInstance } from './ky';
import { authApis } from './routes';

import { AuthAgentToken } from '@/business/services/authorizeService';
import { AlertToken, BirthType, FamilyRole, AuthAgent } from '@/types';
import { createUrl } from '@/utils/url';

type BodySignUp = {
  nickName: string;
  inviteCode: null | string;
  oAuthProvider: AuthAgent;
  birthday: Date;
  birthType: BirthType;
  familyRole: FamilyRole;
  registerAlertToken: AlertToken;
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
  agent: AuthAgent;
  agentToken: AuthAgentToken;
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

type QueryValidateInviteCode = {
  inviteCode: string;
};

type ResponseValidateInviteCode = {
  isValidate: boolean;
};

async function validateInviteCode(query: QueryValidateInviteCode) {
  const apiUrl = createUrl(authApis.validateInviteCode, { query });
  return await kyInstance.get(apiUrl).json<ResponseValidateInviteCode>();
}

type QueryValidateNickName = {
  nickName: string;
};

type ResponseValidateNickName = {
  isValidate: boolean;
};

async function validateNickName(query: QueryValidateNickName) {
  const apiUrl = createUrl(authApis.validateNickName, { query });
  return await kyInstance.get(apiUrl).json<ResponseValidateNickName>();
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
  validateInviteCode,
  validateNickName,
  reRegistrationAlertToken,
};
export type {
  BodySignUp,
  ResponseToken,
  BodySignIn,
  QueryValidateInviteCode,
  ResponseValidateInviteCode,
  QueryValidateNickName,
  ResponseValidateNickName,
  BodyReRegistrationAlertToken,
};
