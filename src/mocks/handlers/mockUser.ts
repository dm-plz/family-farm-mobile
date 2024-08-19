import {createUser} from '@/mocks/fakers';
import {Member} from '@/types';

export const mockMembers: Member[] = Array.from({length: 5}, createUser);
