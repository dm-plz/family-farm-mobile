import ky from 'ky';

import {API_BASE_URL} from '@/constants/api';

const requestHeaders: Record<string, string> = {};

const kyInstance = ky.create({
  prefixUrl: API_BASE_URL,
  hooks: {
    beforeRequest: [
      request => {
        Object.keys(requestHeaders).forEach(key => {
          request.headers.set(key, requestHeaders[key]);
        });
      },
    ],
  },
});

function setHeader(key: string, value: string) {
  requestHeaders[key] = value;
}

function removeHeader(key: string) {
  delete requestHeaders[key];
}

export {kyInstance, setHeader, removeHeader};
