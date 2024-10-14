import { FamilyRole } from './user';

export type Question = {
  questionHistoryId: number;
  content: string;
};

export type Answer = {
  nickname: string;
  groupRole: FamilyRole;
  emoji: string | null;
  content: string;
  createAt: Date;
};
