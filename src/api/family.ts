import { kyInstance } from './ky';
import { familyApis } from './routes';

import { createUrl } from '@/utils/url';

type ParamGetFamilyCode = {
  familyId: string;
};

type ResponseGetFamilyCode = {
  code: string;
};

async function getFamilyCode(param: ParamGetFamilyCode) {
  const apiUrl = createUrl(familyApis.getFamilyCode, { param });
  return await kyInstance.get(apiUrl).json<ResponseGetFamilyCode>();
}

type ParamRefreshFamilyCode = {
  familyId: string;
};

type ResponseRefreshFamilyCode = {
  code: string;
};

async function refreshFamilyCode(param: ParamRefreshFamilyCode) {
  const apiUrl = createUrl(familyApis.refreshFamilyCode, { param });
  return await kyInstance.patch(apiUrl).json<ResponseRefreshFamilyCode>();
}

export { getFamilyCode, refreshFamilyCode };
export type {
  ParamGetFamilyCode,
  ResponseGetFamilyCode,
  ParamRefreshFamilyCode,
  ResponseRefreshFamilyCode,
};
