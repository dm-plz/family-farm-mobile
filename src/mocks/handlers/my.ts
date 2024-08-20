import { http, HttpResponse } from 'msw';

import { createUser } from '../fakers';
import { getApiUrl } from '../utils/api';

import { ParamPatchMy, ResponseGetMy } from '@/api/my';
import { myApis } from '@/api/routes';

const fakeFamily = [
  createUser(),
  createUser(),
  createUser(),
  createUser(),
  createUser(),
];

export default [
  http.get(getApiUrl(myApis.getMy), () => {
    const response: ResponseGetMy = {
      ...fakeFamily[0],
      family: fakeFamily,
      familyCode: 'fake family code',
    };
    return HttpResponse.json(response, { status: 200 });
  }),
  http.patch<ParamPatchMy>(getApiUrl(myApis.patchMy), () => {
    throw new Error('this api is not ready');
  }),
  http.patch(getApiUrl(myApis.withdraw), () => {
    throw new Error('this api is not ready');
  }),
];
