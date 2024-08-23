import { http, HttpResponse } from 'msw';

import { getApiUrl } from '../utils/api';

import { ResponseGetFamilyCode } from '@/api/family';
import { familyApis } from '@/api/routes';

export default [
  http.get(getApiUrl(familyApis.getFamilyCode), () => {
    const response: ResponseGetFamilyCode = {
      code: 'fake family code',
    };
    return HttpResponse.json(response);
  }),
  http.patch(getApiUrl(familyApis.refreshFamilyCode), () => {
    const response: ResponseGetFamilyCode = {
      code: 'fake family code',
    };
    return HttpResponse.json(response);
  }),
];
