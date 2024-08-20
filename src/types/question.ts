import {GoupRole} from './member';

export type Question = {
  questionHistoryId: number;
  question: string;
};

export type Answer = {
  nickname: string;
  groupRole: GoupRole;
  emoji: string;
  content: string;
  createAt: Date;
};
