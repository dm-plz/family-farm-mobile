import {http, HttpResponse} from 'msw';

import {API_BASE_URL} from '@/constants/api';

const getHandlers = [
  http.get(API_BASE_URL + '/auth/signout', () => {
    return HttpResponse.json({});
  }),
  http.get(API_BASE_URL + '/question/today', () => {
    return HttpResponse.json({
      question: '오늘의 질문 샘플 질문입니다',
    });
  }),
  http.get(API_BASE_URL + '/members', () => {
    return HttpResponse.json({});
  }),
];

const postHandlers = [
  http.post(API_BASE_URL + '/auth/signup', () => {
    return HttpResponse.json({
      token: 'token',
      name: 'test',
      role: 'son',
    });
  }),
  http.post(API_BASE_URL + '/auth/signin', () => {
    return HttpResponse.json({
      token: 'token',
      name: 'test',
      role: 'son',
    });
  }),
];

export const handlers = [...getHandlers, ...postHandlers];
