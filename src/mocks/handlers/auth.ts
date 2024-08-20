//NOTE: 로그인 실패 -> 회원 가입 로직
// import {faker} from '@faker-js/faker';
import {http, HttpResponse} from 'msw';

import {getApiUrl} from '../utils/api';

import {
  //NOTE: 로그인 실패 -> 회원 가입 로직
  // RequestSignIn,
  ResponseToken,
} from '@/api/auth';
import {authApis} from '@/api/routes';
import {createFakeToken, setFakeToken} from '@/mocks/utils/token';

export default [
  http.post(getApiUrl(authApis.signUp), () => {
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({accessToken, refreshToken});

    const response = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    } as ResponseToken;

    return HttpResponse.json(response, {status: 201});
  }),
  http.post(getApiUrl(authApis.signIn), async () => {
    //NOTE: 로그인 실패 -> 회원 가입 로직
    // const body = (await request.json()) as RequestSignIn;
    // const {OAuthProvider, AuthorizationCode} = body;
    // const userEmail = faker.internet.email();
    // const response = {
    //   code: 'AUTH-0001',
    //   message: '가입하지 않은 회원입니다. 회원가입을 진행해주세요.',
    //   data: {
    //     OAuthProvider,
    //     AuthorizationCode,
    //     email: userEmail,
    //   },
    // };
    // return HttpResponse.json(response, {
    //   status: 403,
    //   statusText: 'Forbidden',
    // });

    //NOTE: 로그인 성공 로직
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({accessToken, refreshToken});

    const response = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    } as ResponseToken;

    return HttpResponse.json(response, {status: 201});
  }),
  http.patch(getApiUrl(authApis.signOut), () => {
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({accessToken, refreshToken});

    const response = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    } as ResponseToken;

    return HttpResponse.json(response, {status: 201});
  }),
  http.patch(getApiUrl(authApis.reIssueToken), () => {
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({accessToken, refreshToken});

    const response = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    } as ResponseToken;

    return HttpResponse.json(response, {status: 201});
  }),
  http.get(getApiUrl(authApis.validateFamilyCode), () => {
    return HttpResponse.json({isValidate: true});
  }),
  http.patch(getApiUrl(authApis.reRegistrationAlertToken), () => {
    return HttpResponse.json();
  }),
];
