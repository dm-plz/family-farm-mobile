export type OAuthAgent = 'apple' | 'google' | 'kakao';

export type SignInLog = {
  recentSigninDate: Date; // 최근 접속 시간
  recentSigninOAuthAgent: OAuthAgent; // 최근 접속시 사용한 로그인 방법
};