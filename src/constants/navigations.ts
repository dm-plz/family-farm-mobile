const signUpNavigation = {
  ONBOARDING: 'SignUp_OnBoarding',
  JOIN_1: 'SignUp_Join1',
  JOIN_2: 'SignUp_Join2',
  JOIN_3: 'SignUp_Join3',
} as const;

const myNavigation = {
  MY: 'My_My',
  SETTING: 'My_Setting',
  PROFILE: 'My_Profile',
} as const;

const QuestionAnswerNavigation = {
  QUESTION_LIST: 'Question_Answer_QuestionList',
  VIEW_ANSWER: 'Question_Answer_ViewAnswer',
  ANSWER_WITH_FEELING: 'Question_Answer_AnswerWithFeeling',
  ANSWER_WITH_IMAGE: 'Question_Answer_AnswerWithImage',
  ANSWER_WITH_StringVoice: 'Question_Answer_AnswerWithStringVoice',
} as const;

export { signUpNavigation, myNavigation, QuestionAnswerNavigation };
