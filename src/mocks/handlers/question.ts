//NOTE: 로그인 실패 -> 회원 가입 로직
// import {faker} from '@faker-js/faker';
import {http, HttpResponse} from 'msw';

import {ResponseGetQuestion} from '@/api/quetion';
import {questionApis} from '@/api/routes';
import {API_BASE_URL} from '@/constants/api';
import {verifyFakeJWT} from '@/mocks/utils/token';

export default [
  http.get(API_BASE_URL + questionApis.getQuestion, ({request}) => {
    const Authorized = request.headers.get('Authorization');
    if (Authorized === null) {
      return new HttpResponse(null, {
        status: 401,
        statusText: 'Unauthorized',
      });
    }

    const [, accessToken] = Authorized.split(' ');
    if (!verifyFakeJWT(accessToken)) {
      return new HttpResponse(null, {
        status: 403,
        statusText: 'Forbidden',
      });
    }

    return HttpResponse.json({
      question: '오늘의 질문 입니다!',
    } as ResponseGetQuestion);
  }),
];
