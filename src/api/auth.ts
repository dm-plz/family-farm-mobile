import { kyInstance } from './ky';
import { AUTH_APIS } from './routes';

import { storageKeys } from '@/constants';
import { AlertToken, BirthType, GoupRole, OAuthAgent } from '@/types';
import { getEncryptStorage } from '@/utils';
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
  grantType: 'Bearer';
};

type ResponseSub = {
  code: string;
  message: string;
  data: {
    sub: string;
  };
};

async function postSignUp(body: BodySignUp) {
  return await kyInstance
    .post(AUTH_APIS.SIGN_UP, { json: body })
    .json<ResponseToken>();
}

type BodySignIn = {
  OAuthProvider: OAuthAgent;
  idToken: string;
  fcmToken: string;
};

async function postSignIn(body: BodySignIn) {
  const response = await kyInstance.post(AUTH_APIS.SIGN_IN, {
    json: body,
    throwHttpErrors: false,
  });

  if (response.status === 201) {
    return response.json<ResponseToken>();
  } else {
    return response.json<ResponseSub>();
  }
}

async function reIssueToken() {
  const refreshToken = await getEncryptStorage(storageKeys.REFRESH_TOKEN);
  if (!refreshToken) {
    throw new Error();
  }
  return await kyInstance
    .patch(AUTH_APIS.REISSUE_TOKEN, {
      json: {
        refreshToken,
      },
    })
    .json<ResponseToken>();
}

async function getSignOut() {
  return await kyInstance.get(AUTH_APIS.SIGN_OUT).json();
}

type QueryValidateFamilyCode = {
  familyCode: string;
};

type ResponseValidateFamilyCode = {
  isValidate: boolean;
};

async function validateFamilyCode(query: QueryValidateFamilyCode) {
  const apiUrl = createUrl(AUTH_APIS.VALIDATE_FAMILY_CODE, { query });
  return await kyInstance.get(apiUrl).json<ResponseValidateFamilyCode>();
}

type BodyPatchFcmToken = {
  userId: number;
} & AlertToken;

async function patchFcmToken(body: BodyPatchFcmToken) {
  return await kyInstance
    .patch(AUTH_APIS.PATCH_FCM_TOKEN, { json: body })
    .json();
}

export {
  postSignUp,
  postSignIn,
  getSignOut,
  validateFamilyCode,
  patchFcmToken,
  reIssueToken,
};
export type {
  BodySignUp,
  ResponseToken,
  BodySignIn,
  QueryValidateFamilyCode,
  ResponseValidateFamilyCode,
  BodyPatchFcmToken,
  ResponseSub,
};
