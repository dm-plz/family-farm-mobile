import { kyInstance } from './ky';
import { surveyApis } from './routes';

import { Survey } from '@/types';
import { createUrl } from '@/utils/url';

type ParamGetSurvey = {
  userId: string;
};

type ResponseGetSurvey = {
  survey: Survey[];
};

async function getSurvey(param: ParamGetSurvey) {
  const apiUrl = createUrl(surveyApis.getSurvey, { param });
  return await kyInstance.get(apiUrl).json<ResponseGetSurvey>();
}

type BodyPostSurvey = {
  survey: Survey[];
};

async function postSurvey(body: BodyPostSurvey) {
  return await kyInstance.post(surveyApis.postSurvey, { json: body }).json();
}

export { getSurvey, postSurvey };
export type { ParamGetSurvey, ResponseGetSurvey, BodyPostSurvey };
