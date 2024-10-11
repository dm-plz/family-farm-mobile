import ky, { type KyRequest } from 'ky';

import { API_BASE_URL } from '@/constants/api';
import useCredentialStore from '@/store/stores/credentialStore';

const requestHeaders: Record<string, string> = {};

function useAttachHeaderToRequest(request: KyRequest) {
  const { accessToken, refreshToken } = useCredentialStore();

  if (accessToken && refreshToken) {
    request.headers.set('accessToken', accessToken);
    request.headers.set('refreshToken', refreshToken);
  }

  Object.keys(requestHeaders).forEach(key => {
    request.headers.set(key, requestHeaders[key]);
  });
}

//NOTE: 에러 핸들링은 react-query에서 진행
const kyInstance = ky.create({
  prefixUrl: API_BASE_URL,
  hooks: {
    beforeRequest: [useAttachHeaderToRequest],
  },
});

function setHeader(key: string, value: string) {
  requestHeaders[key] = value;
}

function removeHeader(key: string) {
  delete requestHeaders[key];
}

export { kyInstance, setHeader, removeHeader };
