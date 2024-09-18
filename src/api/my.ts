import { kyInstance } from './ky';
import { MY_APIS } from './routes';

import { ResponseGetMy } from '@/types';
import { createUrl } from '@/utils/url';

async function getMy() {
  return await kyInstance.get(MY_APIS.GET_MY).json<ResponseGetMy>();
}

type ParamPatchMy = { userId: string };

async function patchMy(param: ParamPatchMy) {
  const apiUrl = createUrl(MY_APIS.PATCH_MY, { param });
  return await kyInstance.patch(apiUrl).json();
}

type ParamWithdraw = { userId: string };

async function withdraw(param: ParamWithdraw) {
  const apiUrl = createUrl(MY_APIS.WITHDRAW, { param });
  return await kyInstance.patch(apiUrl).json();
}

export { getMy, patchMy, withdraw };
export type { ParamPatchMy, ParamWithdraw };
