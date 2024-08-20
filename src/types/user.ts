import { OAuthAgent } from './auth';

import { birthType, roles } from '@/constants';

export type GoupRole = (typeof roles)[number];
export type BirthType = (typeof birthType)[number];

export type UserInfo = {
  nickName: string;
  birth: string;
  birthType: BirthType;
  OAuthProvider: OAuthAgent;
  createAt: Date;
};
