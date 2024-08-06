import {roles} from '@/constants';

export type Role = (typeof roles)[number];

export type Birthday = {
  isLuna: boolean;
  date: Date;
};

export type Member = {
  name: string;
  role: Role;
  birthday: Birthday;
  signUpDate: Date;
  isHost: boolean; // 그룹장 여부
};
