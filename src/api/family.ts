import { kyInstance } from './ky';
import { FAMILY_APIS } from './routes';

import { createUrl } from '@/utils/url';

type ParamGetFamilyCode = {
  familyId: string;
};

type ResponseGetFamilyCode = {
  code: string;
};

async function getFamilyCode(param: ParamGetFamilyCode) {
  const apiUrl = createUrl(FAMILY_APIS.GET_FAMILY_CODE, { param });
  return await kyInstance.get(apiUrl).json<ResponseGetFamilyCode>();
}

type ParamRefreshFamilyCode = {
  familyId: string;
};

type ResponseRefreshFamilyCode = {
  code: string;
};

async function refreshFamilyCode(param: ParamRefreshFamilyCode) {
  const apiUrl = createUrl(FAMILY_APIS.REFRESH_FAMILY_CODE, { param });
  return await kyInstance.patch(apiUrl).json<ResponseRefreshFamilyCode>();
}

export { getFamilyCode, refreshFamilyCode };
export type {
  ParamGetFamilyCode,
  ResponseGetFamilyCode,
  ParamRefreshFamilyCode,
  ResponseRefreshFamilyCode,
};
