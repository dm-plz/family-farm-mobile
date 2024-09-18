import { faker } from '@faker-js/faker';

import { getRandom } from './util';

import { birthType } from '@/constants';
import { oauthAgents } from '@/mocks/constants';
import type { UserInfo } from '@/types';
import { formatDate } from '@/utils';

export function createUser(): UserInfo {
  return {
    nickname: faker.person.fullName(),
    OAuthProvider: getRandom(oauthAgents),
    birth: formatDate(faker.date.birthdate()),
    birthType: getRandom(birthType),
    createAt: faker.date.past().toString(),
  };
}
