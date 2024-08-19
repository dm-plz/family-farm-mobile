export const authApis = {
  signIn: 'auth/oauth/log-in',
  signOut: 'auth/oauth/sign-out',
  signUp: 'auth/oauth/sign-up',
  validateFamilyCode: 'auth/validate/family-code',
  reRegistrationAlertToken: 'auth/alert-token/re-registration',
};

export const questionApis = {
  getQuestion: 'question/:family-id',
  postAnswer: 'question/answer',
  getAnswer: 'question/answer/:question-history-id',
  patchAnser: 'question/answer/:answer-id',
  getList: 'question/answer/:family-id',
  cheerUp: 'question/alert/cheer-up',
};

export const myApis = {
  my: 'user/:user-id',
  patchMy: 'user/:user-id',
  withdraw: 'user/:user-id',
};

export const surveyApis = {
  getSurvey: 'survey/:user-id',
  postSurvey: 'survey/:user-id',
};

export const familyApis = {
  getFamilyCode: 'family/code',
  refreshFamilyCode: 'family/code/:family-id',
};
