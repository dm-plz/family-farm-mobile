const queryKeys = {
  AUTH: 'auth',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_MY: 'getMy',
  FCM: 'fcm',
  GET_FCM_TOKEN: 'getFcmToken',
  VALIDATE_INVITE_CODE: 'validateInviteCode',
  SIGN_UP: 'signUp',
} as const;

const storageKeys = {
  REFRESH_TOKEN: 'refreshToken',
  FCM_TOKEN: 'fcmToken',
  SUB: 'sub',
  RECENT_OAUTH_PROVIDER: 'recentOauthProvider',
  FAMILY_CODE: 'familyCode',
} as const;

export { queryKeys, storageKeys };
