import ky from 'ky';

import {API_BASE_URL} from '@/constants/api';

const requestHeaders: Record<string, string> = {};

//TODO: 에러 핸들링 로직 추가
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

//TODO: 로그인 성공시 토큰 전달을 위한 Header 설정
function setHeader(key: string, value: string) {
  requestHeaders[key] = value;
}

function removeHeader(key: string) {
  delete requestHeaders[key];
}

export {kyInstance, setHeader, removeHeader};
