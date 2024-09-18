import { http, HttpResponse } from 'msw';

import { createUser } from '../fakers';
import { getApiUrl } from '../utils/api';

import { ParamPatchMy } from '@/api/my';
import { MY_APIS } from '@/api/routes';
import { ResponseGetMy } from '@/types';

const fakeFamily = [
  createUser(),
  createUser(),
  createUser(),
  createUser(),
  createUser(),
];

export default [
  http.get(getApiUrl(MY_APIS.GET_MY), () => {
    const response: ResponseGetMy = {
      ...fakeFamily[0],
      family: fakeFamily,
      familyCode: 'fake family code',
    };
    return HttpResponse.json(response, { status: 200 });
  }),
  http.patch<ParamPatchMy>(getApiUrl(MY_APIS.PATCH_MY), () => {
    throw new Error('this api is not ready');
  }),
  http.patch(getApiUrl(MY_APIS.WITHDRAW), () => {
    throw new Error('this api is not ready');
  }),
];
