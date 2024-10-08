import { NativeModules } from 'react-native';
import { authorize } from 'react-native-app-auth';

import { SIGN_IN_WITH_GOOGLE_CONFIG } from '@/constants';
import { AuthAgent } from '@/types';

const { KakaoLoginModule, AppleLoginModule } = NativeModules;

export type AuthToken = string;

const authorizeAgents: Record<AuthAgent, () => Promise<AuthToken>> = {
  apple: authorizeWithApple,
  google: authorizeWithGoogle,
  kakao: authorizeWithKakao,
};

export async function authorizeWithAgent(agent: AuthAgent) {
  return await authorizeAgents[agent]();
}

type AppleAuthPayload = { idToken: string };

async function authorizeWithApple(): Promise<AuthToken> {
  const { idToken } =
    (await AppleLoginModule.loginWithApple()) as AppleAuthPayload;
  return idToken;
}

type GoogleAuthPayload = { idToken: string };

async function authorizeWithGoogle(): Promise<AuthToken> {
  const { idToken } = (await authorize(
    SIGN_IN_WITH_GOOGLE_CONFIG,
  )) as GoogleAuthPayload;
  return idToken;
}

async function authorizeWithKakao(): Promise<AuthToken> {
  return await KakaoLoginModule.signInWithKakao();
}
