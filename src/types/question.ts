import {GoupRole} from './user';

export type Question = {
  questionHistoryId: number;
  question: string;
};

export type Answer = {
  nickname: string;
  groupRole: GoupRole;
  emoji: string | null;
  content: string;
  createAt: Date;
};
