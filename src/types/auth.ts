export type AuthAgent = 'google' | 'kakao' | 'apple';

export type SignInLog = {
  recentSigninDate: Date; // 최근 접속 시간
  recentSigninOAuthAgent: AuthAgent; // 최근 접속시 사용한 로그인 방법
};

export type AlertToken = {
  deviceId: string;
  tokenValue: string;
};

export type AuthToken = {
  accessToken: string;
  refreshToken: string;
};
