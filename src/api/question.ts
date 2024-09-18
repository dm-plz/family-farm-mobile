import { kyInstance } from './ky';
import { QUESTION_APIS } from './routes';

import { AlertToken, Answer, Question } from '@/types';
import { createUrl } from '@/utils/url';

type ParamGetQuestion = {
  familyId: string;
};

type ResponseGetQuestion = {
  isAnswered: boolean;
} & Question;

async function getQuestion(param: ParamGetQuestion) {
  const apiUrl = createUrl(QUESTION_APIS.GET_QUESTION, { param });
  return await kyInstance.get(apiUrl).json<ResponseGetQuestion>();
}

type BodyPostAnswer = {
  questionHistoryId: number;
  emoji: string | null;
  answer: string;
};

async function postAnswer(body: BodyPostAnswer) {
  return await kyInstance
    .post(QUESTION_APIS.PATCH_ANSWER, { json: body })
    .json();
}

type ParamGetAnswer = {
  questionHistoryId: number;
};

type ResponseGetAnswer = {
  answer: Answer[];
};

async function getAnswer(param: ParamGetAnswer) {
  const apiUrl = createUrl(QUESTION_APIS.GET_ANSWER, {
    param,
  });
  return await kyInstance.get(apiUrl).json<ResponseGetAnswer>();
}

type ParamPatchAnswer = {
  answerId: string;
};

type BodyPatchAnswer = {
  userId: string;
  answer: string;
};

async function patchAnswer(param: ParamPatchAnswer, body: BodyPatchAnswer) {
  const apiUrl = createUrl(QUESTION_APIS.PATCH_ANSWER, { param });
  return await kyInstance.patch(apiUrl, { json: body }).json();
}

type ParamGetList = {
  familyId: string;
};

type ResponseGetList = {
  question: Question[];
};

async function getList(param: ParamGetList) {
  const apiUrl = createUrl(QUESTION_APIS.GET_LIST, { param });
  return await kyInstance.get(apiUrl).json<ResponseGetList>();
}

type BodyCheerUp = {
  userId: string;
  familyId: string;
  alertToken: AlertToken;
};

async function cheerUp(body: BodyCheerUp) {
  return await kyInstance.post(QUESTION_APIS.CHEER_UP, { json: body }).json();
}

export { getQuestion, postAnswer, getAnswer, patchAnswer, getList, cheerUp };
export type {
  ParamGetQuestion,
  ResponseGetQuestion,
  BodyPostAnswer,
  ParamGetAnswer,
  ResponseGetAnswer,
  ParamPatchAnswer,
  BodyPatchAnswer,
  ParamGetList,
  ResponseGetList,
  BodyCheerUp,
};
