import {kyInstance} from './ky';
import {myApis} from './routes';

import {UserInfo} from '@/types';
import {createUrl} from '@/utils/url';

type ParamGetMy = {userId: string};

type ResponseGetMy = {
  family: UserInfo[];
  familyCode: string;
} & UserInfo;

async function getMy({userId}: ParamGetMy) {
  const apiUrl = createUrl(myApis.getMy, {param: {userId}});
  return await kyInstance.get(apiUrl).json<ResponseGetMy>();
}

type ParamPatchMy = {userId: string};

async function patchMy({userId}: ParamPatchMy) {
  const apiUrl = createUrl(myApis.patchMy, {param: {userId}});
  return await kyInstance.patch(apiUrl).json<ResponseGetMy>();
}

type ParamWithdraw = {userId: string};

async function withdraw({userId}: ParamWithdraw) {
  const apiUrl = createUrl(myApis.withdraw, {param: {userId}});
  return await kyInstance.delete(apiUrl).json<ResponseGetMy>();
}

export {getMy, patchMy, withdraw};
export type {ParamGetMy, ParamPatchMy, ParamWithdraw, ResponseGetMy};
