export const AUTH_APIS = {
  SIGN_IN: 'auth/sign-in/oidc',
  SIGN_OUT: 'auth/sign-out',
  SIGN_UP: 'auth/sign-up/oidc',
  REISSUE_TOKEN: 'auth/token/reissuance',
  VALIDATE_FAMILY_CODE: 'auth/validate/family-code',
  PATCH_FCM_TOKEN: 'auth/alert-token/re-registration',
} as const;

export const QUESTION_APIS = {
  GET_QUESTION: 'question/:familyId',
  GET_ANSWER: 'question/answer/:questionHistoryId',
  POST_ANSWER: 'question/answer',
  PATCH_ANSWER: 'question/answer/:answerId',
  GET_LIST: 'question/answer/:familyId',
  CHEER_UP: 'question/alert/cheer-up',
} as const;

export const MY_APIS = {
  GET_MY: 'user',
  PATCH_MY: 'user/:userId',
  WITHDRAW: 'user/:userId',
} as const;

export const SURVEY_APIS = {
  GET_SURVEY: 'survey/:userId',
  POST_SURVEY: 'survey/:userId',
} as const;

export const FAMILY_APIS = {
  GET_FAMILY_CODE: 'family/code',
  REFRESH_FAMILY_CODE: 'family/code/:familyId',
} as const;
