import {kyInstance} from './ky';
import {myApis} from './routes';

import {UserInfo} from '@/types';
import {createUrl} from '@/utils/url';

type ParamGetMy = {userId: string};

type ResponseGetMy = {
  family: UserInfo[];
  familyCode: string;
} & UserInfo;

async function getMy(param: ParamGetMy) {
  const apiUrl = createUrl(myApis.getMy, {param});
  return await kyInstance.get(apiUrl).json<ResponseGetMy>();
}

type ParamPatchMy = {userId: string};

async function patchMy(param: ParamPatchMy) {
  const apiUrl = createUrl(myApis.patchMy, {param});
  return await kyInstance.patch(apiUrl).json<ResponseGetMy>();
}

type ParamWithdraw = {userId: string};

async function withdraw(param: ParamWithdraw) {
  const apiUrl = createUrl(myApis.withdraw, {param});
  return await kyInstance.delete(apiUrl).json<ResponseGetMy>();
}

export {getMy, patchMy, withdraw};
export type {ParamGetMy, ParamPatchMy, ParamWithdraw, ResponseGetMy};
