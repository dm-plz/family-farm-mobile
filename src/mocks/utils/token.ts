import {Buffer} from 'buffer';

import {faker} from '@faker-js/faker';

import {Member} from '@/types';

const SECRET_KEY = 'secret-key';

function base64Encode(str: string) {
  return Buffer.from(str).toString('base64');
}

function base64Decode(str: string) {
  return Buffer.from(str, 'base64').toString('utf-8');
}

export function createFakeJWT(
  payload: Member,
  expiresInSeconds: number = 60 * 60,
) {
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
      ...payload,
    }),
  );
  const signature = base64Encode(
    `${encodedHeader}.${encodedPayload}.${SECRET_KEY}`,
  );

  const token = `${encodedHeader}.${encodedPayload}.${signature}`;
  return token;
}

export function verifyFakeJWT(token: string) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }

    const [encodedHeader, encodedPayload, signature] = parts;
    const validSignature = base64Encode(
      `${encodedHeader}.${encodedPayload}.${SECRET_KEY}`,
    );

    if (signature !== validSignature) {
      return false;
    }

    const payload = JSON.parse(base64Decode(encodedPayload));

    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp && currentTime > payload.exp) {
      return false; // 토큰이 만료됨
    }

    return true;
  } catch (error) {
    return false;
  }
}
