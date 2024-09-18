import { http, HttpResponse, PathParams } from 'msw';

import { getApiUrl } from '../utils/api';

import {
  BodyPatchAnswer,
  BodyPostAnswer,
  ParamPatchAnswer,
  ResponseGetAnswer,
  ResponseGetList,
  ResponseGetQuestion,
} from '@/api/question';
import { QUESTION_APIS } from '@/api/routes';
import { Answer, Question } from '@/types';

const question: Question[] = [
  { questionHistoryId: 0, question: '지금 이 순간 제일 듣고 싶은 단어는?' },
];
const answer: Answer[] = [];

export default [
  http.get(getApiUrl(QUESTION_APIS.GET_QUESTION), () => {
    const response: ResponseGetQuestion = {
      ...question[0],
      isAnswered: false,
    };
    return HttpResponse.json(response);
  }),
  http.post<PathParams, BodyPostAnswer>(
    getApiUrl(QUESTION_APIS.PATCH_ANSWER),
    async ({ request }) => {
      const body = await request.json();
      answer[0] = {
        nickname: 'fake nickname',
        groupRole: 'SON',
        emoji: null,
        content: body.answer,
        createAt: new Date(),
      };

      return HttpResponse.json(null, { status: 201 });
    },
  ),
  http.get(getApiUrl(QUESTION_APIS.GET_ANSWER), () => {
    const response: ResponseGetAnswer = {
      answer: answer,
    };
    return HttpResponse.json(response);
  }),
  http.patch<ParamPatchAnswer, BodyPatchAnswer>(
    getApiUrl(QUESTION_APIS.PATCH_ANSWER),
    async ({ request }) => {
      const body = await request.json();
      answer[0].content = body.answer;
      return new HttpResponse();
    },
  ),
  http.get(getApiUrl(QUESTION_APIS.GET_LIST), () => {
    const response: ResponseGetList = {
      question,
    };
    return HttpResponse.json(response);
  }),
  http.post(getApiUrl(QUESTION_APIS.CHEER_UP), () => {
    return new HttpResponse();
  }),
];
