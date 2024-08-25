export const authApis = {
  signIn: 'auth/oauth/log-in',
  signOut: 'auth/oauth/sign-out/:userId',
  signUp: 'auth/oauth/sign-up',
  reIssueToken: 'auth/toekn/reissuance',
  validateFamilyCode: 'auth/validate/family-code',
  reRegistrationAlertToken: 'auth/alert-token/re-registration',
};

export const questionApis = {
  getQuestion: 'question/:familyId',
  postAnswer: 'question/answer',
  getAnswer: 'question/answer/:questionHistoryId',
  patchAnswer: 'question/answer/:answerId',
  getList: 'question/answer/:familyId',
  cheerUp: 'question/alert/cheer-up',
};

export const myApis = {
  getMy: 'user/:userId',
  patchMy: 'user/:userId',
  withdraw: 'user/:userId',
};

export const surveyApis = {
  getSurvey: 'survey/:userId',
  postSurvey: 'survey/:userId',
};

export const familyApis = {
  getFamilyCode: 'family/code',
  refreshFamilyCode: 'family/code/:familyId',
};
