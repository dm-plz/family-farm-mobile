//NOTE: 로그인 실패 -> 회원 가입 로직
// import {faker} from '@faker-js/faker';
import {http, HttpResponse} from 'msw';

import {getApiUrl} from '../utils/api';

import {RequestSignIn, RequestSignUp, ResponseToken} from '@/api/auth';
import {authApis} from '@/api/routes';
import {createUser} from '@/mocks/fakers';
import {createFakeJWT} from '@/mocks/utils/token';

export default [
  http.post(getApiUrl(authApis.signIn), async ({request}) => {
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
    return HttpResponse.json({
      accessToken: createFakeJWT(createUser(true)),
      refreshToken: createFakeJWT(createUser(true), 24 * 60 * 60),
      grantType: 'Bearer',
    } as ResponseToken);
  }),
  http.get(getApiUrl(authApis.signOut), () => {
    return new HttpResponse(null, {
      status: 204,
      statusText: 'No Content',
    });
  }),
  http.post(getApiUrl(authApis.signUp), async ({request}) => {
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
