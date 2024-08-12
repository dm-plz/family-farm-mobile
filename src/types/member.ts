import {birthType, roles} from '@/constants';

export type GoupRole = (typeof roles)[number];
export type BirthType = (typeof birthType)[number];

export type Member = {
  nickName: string;
  groupRole: GoupRole;
  birth: string;
  birthType: BirthType;
  email: string;
  signUpDate: Date;
  isHost: boolean; // 그룹장 여부
};
