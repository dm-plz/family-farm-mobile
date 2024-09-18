import { http, HttpResponse } from 'msw';

import { getApiUrl } from '../utils/api';

import { ResponseGetFamilyCode } from '@/api/family';
import { FAMILY_APIS } from '@/api/routes';

export default [
  http.get(getApiUrl(FAMILY_APIS.GET_FAMILY_CODE), () => {
    const response: ResponseGetFamilyCode = {
      code: 'fake family code',
    };
    return HttpResponse.json(response);
  }),
  http.patch(getApiUrl(FAMILY_APIS.REFRESH_FAMILY_CODE), () => {
    const response: ResponseGetFamilyCode = {
      code: 'fake family code',
    };
    return HttpResponse.json(response);
  }),
];
