import { FamilyRole } from './user';

export type Question = {
  questionHistoryId: number;
  question: string;
};

export type Answer = {
  nickname: string;
  groupRole: FamilyRole;
  emoji: string | null;
  content: string;
  createAt: Date;
};
