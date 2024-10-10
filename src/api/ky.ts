import ky, { type KyRequest } from 'ky';

import queryClient from './queryClient';

import { API_BASE_URL } from '@/constants/api';
import { authQueryKeys } from '@/store/queries/useAuthQuery';
import { AuthToken } from '@/types';

const requestHeaders: Record<string, string> = {};

function attachHeaderToRequest(request: KyRequest) {
  const authTokens: AuthToken | undefined = queryClient.getQueryData(
    authQueryKeys.keychainToken(),
  );

  if (authTokens) {
    request.headers.set('accessToken', authTokens.accessToken);
  }

  Object.keys(requestHeaders).forEach(key => {
    request.headers.set(key, requestHeaders[key]);
  });
}

//NOTE: 에러 핸들링은 react-query에서 진행
const kyInstance = ky.create({
  prefixUrl: API_BASE_URL,
  hooks: {
    beforeRequest: [attachHeaderToRequest],
  },
});

function setHeader(key: string, value: string) {
  requestHeaders[key] = value;
}

function removeHeader(key: string) {
  delete requestHeaders[key];
}

export { kyInstance, setHeader, removeHeader };
