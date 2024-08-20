import {faker} from '@faker-js/faker';

import {getRandom} from './util';

import {birthType} from '@/constants';
import {oauthAgents} from '@/mocks/constants';
import type {UserInfo} from '@/types';
import {formatDate} from '@/utils';

export function createUser(): UserInfo {
  return {
    nickName: faker.person.fullName(),
    birth: formatDate(faker.date.birthdate()),
    birthType: getRandom(birthType),
    OAuthProvider: getRandom(oauthAgents),
    createAt: faker.date.past(),
  };
}
