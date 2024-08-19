//NOTE: 로그인 실패 -> 회원 가입 로직
// import {faker} from '@faker-js/faker';
import {http, HttpResponse} from 'msw';

import {mockMembers} from './mockUser';

import {RequestSignIn, RequestSignUp, ResponseToken} from '@/api/auth';
import {ResponseMembers} from '@/api/member';
import {ResponseTodayQuestion} from '@/api/quetions';
import {API_BASE_URL} from '@/constants/api';
import {createUser} from '@/mocks/fakers';
import {createFakeJWT, verifyFakeJWT} from '@/mocks/utils/token';

const getHandlers = [
  http.get(API_BASE_URL + '/auth/sign-out', () => {
    return new HttpResponse(null, {
      status: 204,
      statusText: 'No Content',
    });
  }),
  http.get(API_BASE_URL + '/question/today', ({request}) => {
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
    } as ResponseTodayQuestion);
  }),
  http.get(API_BASE_URL + '/members', ({request}) => {
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
      members: mockMembers,
    } as ResponseMembers);
  }),
];

const postHandlers = [
  http.post(API_BASE_URL + '/auth/oauth/sign-in', async ({request}) => {
    const body = (await request.json()) as Partial<RequestSignIn>;
    const {OAuthProvider, AuthorizationCode} = body;
    const oauthAgent = ['NATIVE', 'GOOGLE', 'NAVER', 'KAKAO', 'APPLE'];
    if (
      !OAuthProvider ||
      !oauthAgent.includes(OAuthProvider) ||
      !AuthorizationCode
    ) {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'Bad Request',
      });
    }

    //NOTE: 로그인 실패 -> 회원 가입 로직
    // return HttpResponse.json(
    //   {
    //     code: 'AUTH-0001',
    //     message: '가입하지 않은 회원입니다. 회원가입을 진행해주세요.',
    //     data: {
    //       OAuthProvider,
    //       AuthorizationCode,
    //       email: faker.internet.email(),
    //     },
    //   },
    //   {
    //     status: 401,
    //     statusText: 'Unauthorized',
    //   },
    // );

    //NOTE: 로그인 성공 로직
    console.log(createFakeJWT(createUser(true)));
    return HttpResponse.json({
      accessToken: createFakeJWT(createUser(true)),
      refreshToken: createFakeJWT(createUser(true), 24 * 60 * 60),
      grantType: 'Bearer',
    } as ResponseToken);
  }),
  http.post(API_BASE_URL + '/auth/oauth/sign-up', async ({request}) => {
    const body = (await request.json()) as RequestSignUp;
    if (
      !(
        body.nickName &&
        body.OAuthProvider &&
        body.birth &&
        body.birthType &&
        body.email &&
        body.groupRole &&
        (body.familyCode || body.familyCode === null)
      )
    ) {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'Bad Request',
      });
    }
    return HttpResponse.json({
      accessToken: createFakeJWT(createUser(true)),
      refreshToken: createFakeJWT(createUser(true), 24 * 60 * 60),
      grantType: 'Bearer',
    } as ResponseToken);
  }),
];

export const handlers = [...getHandlers, ...postHandlers];
