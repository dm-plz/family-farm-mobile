import {kyInstance} from './ky';

import {Member} from '@/types';

type ResponseMembers = {
  members: Member[];
};

async function getMembers() {
  return (await kyInstance.get('members').json()) as ResponseMembers;
}

export {getMembers};
export type {ResponseMembers};
