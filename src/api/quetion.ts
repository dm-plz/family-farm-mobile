import {kyInstance} from './ky';

type ParamGetQuestion = {
  familyId: string;
};

type ResponseGetQuestion = {
  questionHistoryId: string;
  question: string;
  isAnswered: boolean;
};

async function getQuestion({familyId}: ParamGetQuestion) {
  return (await kyInstance
    .get(`question/${familyId}`)
    .json()) as ResponseGetQuestion;
}

export {getQuestion};
export type {ParamGetQuestion, ResponseGetQuestion};
