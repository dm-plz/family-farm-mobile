export type oauthAgent = 'google' | 'naver' | 'kakao' | 'apple';

export type SignInLog = {
  recentSigninDate: Date; // 최근 접속 시간
  recentSigninOauthAgent: oauthAgent; // 최근 접속시 사용한 로그인 방법
};

export type AlertToken = {
  deviceId: string;
  type: 'FCM';
  value: string;
};
