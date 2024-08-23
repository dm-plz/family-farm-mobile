import { Buffer } from 'buffer';

import { faker } from '@faker-js/faker';

const SECRET_KEY = 'secret-key';

function base64Encode(str: string) {
  return Buffer.from(str).toString('base64');
}

function base64Decode(str: string) {
  return Buffer.from(str, 'base64').toString('utf-8');
}

export function createFakeToken(isRefresh = false) {
  const expiresInSeconds = isRefresh ? 24 * 60 * 60 : 60 * 60;
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };
  const encodedHeader = base64Encode(JSON.stringify(header));

  const currentTime = Math.floor(Date.now() / 1000);
  const encodedPayload = base64Encode(
    JSON.stringify({
      iat: currentTime,
      exp: currentTime + expiresInSeconds,
      noncee: faker.string.uuid(),
    }),
  );
  const signature = base64Encode(
    `${encodedHeader}.${encodedPayload}.${SECRET_KEY}`,
  );

  const token = `${encodedHeader}.${encodedPayload}.${signature}`;

  return token;
}

type FakeTokens = { accessToken: string | null; refreshToken: string | null };

let myFakeTokens: FakeTokens = {
  accessToken: null,
  refreshToken: null,
};

export function setFakeToken(tokens: Partial<FakeTokens>) {
  myFakeTokens = { ...myFakeTokens, ...tokens };
}

export function verifyFakeToken(token: string) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }

    const [, encodedPayload] = parts;

    const payload = JSON.parse(base64Decode(encodedPayload));

    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp && currentTime > payload.exp) {
      return false; // 토큰이 만료됨
    }

    return (
      token === myFakeTokens.accessToken || token === myFakeTokens.refreshToken
    );
  } catch (error) {
    return false;
  }
}
