import { OAuthAgent } from './auth';

import { birthType, roles } from '@/constants';

export type GoupRole = (typeof roles)[number];
export type BirthType = (typeof birthType)[number];

export interface UserInfo {
  nickname: string;
  OAuthProvider: OAuthAgent;
  birth: string;
  birthType: BirthType;
  createAt: string;
}

export interface ResponseGetMy extends UserInfo {
  family: UserInfo[];
  familyCode: string;
}
