export const authRouteNames = {
  SIGN_IN: 'SignIn',
  JOIN1: 'Join1',
  JOIN2: 'Join2',
  JOIN3: 'Join3',
  JOIN4: 'Join4',
  JOIN5: 'Join5',
} as const;

export const defaultRouteNames = {
  HOME: 'Home',
  QUESTION_LIST: 'QuetionList',
  MY: 'My',
  FAMILY_ANSWER: 'FamilyAnswer',
  ALARM: 'Alarm',
} as const;

export const answerRouteNames = {
  NAVIGATOR_NAME: 'AnswerStackNavigator',
  DESCRIPTIVE_ANSWER: 'DescriptiveAnswer',
  RECORD_EMOTION: 'RecordEmotion',
} as const;

export const settingRouteNames = {
  NAVIGATOR_NAME: 'SettingStackNavigator',
  SETTING: 'Setting',
  PROFILE: 'Profile',
} as const;

export const routeNames = {
  VIEW_ANSWER: 'ViewAnser',
  ANSWER_WITH_FEELING: 'AnswerWithFeeling',
  ANSWER_WITH_IMAGE: 'AnswerWithImage',
  ANSWER_WITH_STRING_VOICE: 'AnswerWithStringVoice',
} as const;
