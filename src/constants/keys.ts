const queryKeys = {
  AUTH: 'auth',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_MY: 'getMy',
  FCM: 'fcm',
  GET_FCM_TOKEN: 'getFcmToken',
} as const;

const storageKeys = {
  REFRESH_TOKEN: 'refreshToken',
} as const;

export { queryKeys, storageKeys };
