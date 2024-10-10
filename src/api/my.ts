import { kyInstance } from './ky';
import { myApis } from './routes';

import { UserInfo } from '@/types';
import { createUrl } from '@/utils/url';

type ParamGetMy = { userId: string };

type ResponseGetMy = {
  family: UserInfo[];
  familyCode: string;
} & UserInfo;

async function getMy() {
  const apiUrl = createUrl(myApis.getMy);
  return await kyInstance.get(apiUrl).json<ResponseGetMy>();
}

type ParamPatchMy = { userId: string };
//TODO: 수정을 위해 사용 가능한 데이터 타입 선언해야 함
async function patchMy() {
  const apiUrl = createUrl(myApis.patchMy);
  return await kyInstance.patch(apiUrl).json();
}

type ParamWithdraw = { userId: string };

async function withdraw(param: ParamWithdraw) {
  const apiUrl = createUrl(myApis.withdraw, { param });
  return await kyInstance.patch(apiUrl).json();
}

export { getMy, patchMy, withdraw };
export type { ParamGetMy, ParamPatchMy, ParamWithdraw, ResponseGetMy };
