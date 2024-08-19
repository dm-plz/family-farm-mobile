import {kyInstance} from './ky';

type ResponseTodayQuestion = {
  question: string;
};

async function getTodayQuestion() {
  return (await kyInstance
    .get('question/today')
    .json()) as ResponseTodayQuestion;
}

export {getTodayQuestion};
export type {ResponseTodayQuestion};
