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
  ANSWER_NAVIGATOR_NAME: 'AnswerStackNavigator',
  RECORD_EMOTION: 'RecordEmotion',
  DESCRIPTIVE_ANSWER: 'DescriptiveAnswer',
} as const;

export const settingRouteNames = {
  SETTING_NAVIGATOR_NAME: 'SettingStackNavigator',
  SETTING: 'Setting',
  PROFILE: 'Profile',
} as const;

export const undefinedRouteNames = {
  ERROR: 'error',
} as const;

export const allRouteNames = {
  ...authRouteNames,
  ...defaultRouteNames,
  ...answerRouteNames,
  ...settingRouteNames,
  ...undefinedRouteNames,
};

export type RouteName = (typeof allRouteNames)[keyof typeof allRouteNames];
