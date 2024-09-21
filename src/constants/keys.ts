const queryKeys = {
  AUTH: 'auth',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_MY: 'getMy',
  FCM: 'fcm',
  GET_FCM_TOKEN: 'getFcmToken',
} as const;

const storageKeys = {
  REFRESH_TOKEN: 'refreshToken',
  FCM_TOKEN: 'fcmToken',
} as const;

export { queryKeys, storageKeys };
