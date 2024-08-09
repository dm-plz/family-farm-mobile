import {faker} from '@faker-js/faker';

import {getRandom} from './util';

import {birthType, roles} from '@/constants';
import type {Member} from '@/types';
import {formatDate} from '@/utils';

export function createUser(isHost: boolean): Member {
  return {
    nickName: faker.person.fullName(),
    groupRole: getRandom(roles),
    birth: formatDate(faker.date.birthdate()),
    birthType: getRandom(birthType),
    email: faker.internet.email(),
    signUpDate: faker.date.past(),
    isHost,
  };
}
