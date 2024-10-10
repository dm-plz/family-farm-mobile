import { AuthAgent } from './auth';

import { birthType, roles } from '@/constants';

export type FamilyRole = (typeof roles)[number];
export type BirthType = (typeof birthType)[number];

export type UserInfo = {
  nickName: string;
  birth: string;
  birthType: BirthType;
  OAuthProvider: AuthAgent;
  createAt: Date;
  familyId: string;
};
