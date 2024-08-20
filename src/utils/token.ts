import {UserInfo} from '@/types';

//NOTE: 유저 정보를 토큰에서 얻기 위한 함수
//FIXME: BE에서 전달해준 payload가 정해지면 수정해야 함
export function getUserFromToken(token: string): UserInfo | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }

    const [, encodedPayload] = parts;
    const decodedPayload = Buffer.from(encodedPayload, 'base64').toString(
      'utf-8',
    );
    const payload = JSON.parse(decodedPayload);

    return payload as UserInfo;
  } catch (error) {
    return null;
  }
}
