import {kyInstance} from './ky';
import {questionApis} from './routes';

import {AlertToken, Answer, Question} from '@/types';
import {createUrl} from '@/utils/url';

type ParamGetQuestion = {
  familyId: string;
};

type ResponseGetQuestion = {
  isAnswered: boolean;
} & Question;

async function getQuestion({familyId}: ParamGetQuestion) {
  const apiUrl = createUrl(questionApis.getQuestion, {param: {familyId}});
  return await kyInstance.get(apiUrl).json<ResponseGetQuestion>();
}

type BodyPostAnswer = {
  questionHistoryId: number;
  emoji: string | null;
  answer: string;
};

async function postAnswer(body: BodyPostAnswer) {
  return await kyInstance.post(questionApis.postAnswer, {json: body}).json();
}

type ParamGetAnswer = {
  questionHistoryId: number;
};

type ResponseGetAnswer = {
  answer: Answer[];
};

async function getAnswer({questionHistoryId}: ParamGetAnswer) {
  const apiUrl = createUrl(questionApis.getAnswer, {
    param: {questionHistoryId},
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

async function patchAnswer(
  {answerId}: ParamPatchAnswer,
  body: BodyPatchAnswer,
) {
  const apiUrl = createUrl(questionApis.patchAnser, {param: {answerId}});
  return await kyInstance.patch(apiUrl, {json: body}).json();
}

type ParamGetList = {
  familyId: string;
};

type ResponseGetList = {
  question: Question[];
};

async function getList({familyId}: ParamGetList) {
  const apiUrl = createUrl(questionApis.getList, {param: {familyId}});
  return await kyInstance.get(apiUrl).json<ResponseGetList>();
}

type BodyCheerUp = {
  userId: string;
  familyId: string;
  alertToken: AlertToken;
};

async function cheerUp(body: BodyCheerUp) {
  return await kyInstance.post(questionApis.cheerUp, {json: body}).json();
}

export {getQuestion, postAnswer, getAnswer, patchAnswer, getList, cheerUp};
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
