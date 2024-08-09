import {http, HttpResponse} from 'msw';

import {mockMembers} from './mockUser';

import {API_BASE_URL} from '@/constants/api';

const getHandlers = [
  http.get(API_BASE_URL + '/auth/oauth/sign-out', () => {
    return HttpResponse.json({});
  }),
  http.get(API_BASE_URL + '/question/today', () => {
    return HttpResponse.json({question: '오늘의 질문 입니다!'});
  }),
  http.get(API_BASE_URL + '/members', () => {
    return HttpResponse.json({
      members: mockMembers,
    });
  }),
];

const postHandlers = [
  http.post(API_BASE_URL + '/auth/oauth/log-in', () => {
    return HttpResponse.json({});
  }),
  http.post(API_BASE_URL + '/auth/oauth/sign-up', () => {
    return HttpResponse.json({});
  }),
];

export const handlers = [...getHandlers, ...postHandlers];
