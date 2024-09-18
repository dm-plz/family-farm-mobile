//NOTE: 로그인 실패 -> 회원 가입 로직
// import {faker} from '@faker-js/faker';
import { http, HttpResponse } from 'msw';

import { getApiUrl } from '../utils/api';

import {
  ResponseSub,
  //NOTE: 로그인 실패 -> 회원 가입 로직
  // RequestSignIn,
  ResponseToken,
  ResponseValidateFamilyCode,
} from '@/api/auth';
import { AUTH_APIS } from '@/api/routes';
import { createFakeToken, setFakeToken } from '@/mocks/utils/token';

export default [
  http.post(getApiUrl(AUTH_APIS.SIGN_UP), () => {
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({ accessToken, refreshToken });

    const response: ResponseToken = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    };

    return HttpResponse.json(response, { status: 201 });
  }),
  http.post(getApiUrl(AUTH_APIS.SIGN_IN), async () => {
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

    setFakeToken({ accessToken, refreshToken });

    const responseWith201: ResponseToken = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    };

    const code = 'AUTH-001';
    const message = '가입하지 않은 회원입니다. 회원가입을 진행해주세요.';
    const sub = 'asdan2oniskl';

    const responseWithStatus403: ResponseSub = {
      code,
      message,
      data: {
        sub,
      },
    };

    const resultWithStatus201 = HttpResponse.json(responseWith201, {
      status: 201,
    });
    const resultWithStatus403 = HttpResponse.json(responseWithStatus403, {
      status: 403,
    });

    // NOTE: 회원가입을 위해, 랜덤으로 resultWithStatus403을 리턴함.
    // NOTE: 현재는 테스트를 위해 0을 설정함.
    return Math.random() > 0 ? resultWithStatus201 : resultWithStatus403;
  }),
  http.get(getApiUrl(AUTH_APIS.SIGN_OUT), () => {
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({ accessToken, refreshToken });

    const response: ResponseToken = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    };

    return HttpResponse.json(response, { status: 201 });
  }),
  http.patch(getApiUrl(AUTH_APIS.REISSUE_TOKEN), () => {
    const accessToken = createFakeToken();
    const refreshToken = createFakeToken(true);

    setFakeToken({ accessToken, refreshToken });

    const response: ResponseToken = {
      accessToken,
      refreshToken,
      grantType: 'Bearer',
    };

    return HttpResponse.json(response, { status: 201 });
  }),
  http.get(getApiUrl(AUTH_APIS.VALIDATE_FAMILY_CODE), () => {
    const response: ResponseValidateFamilyCode = { isValidate: true };
    return HttpResponse.json(response);
  }),
  http.patch(getApiUrl(AUTH_APIS.PATCH_FCM_TOKEN), () => {
    return new HttpResponse(null);
  }),
];
