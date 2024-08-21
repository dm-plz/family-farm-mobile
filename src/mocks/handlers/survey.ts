import { http, HttpResponse } from 'msw';

import { getApiUrl } from '../utils/api';

import { surveyApis } from '@/api/routes';
import { ResponseGetSurvey } from '@/api/survey';
import { Survey } from '@/types';

const fakeSurveys: Survey[] = [
  {
    id: '1',
    content: '당신은 뭐시기뭐시기',
  },
  {
    id: '2',
    content: '당신은 뭐시기뭐시기',
  },
  {
    id: '3',
    content: '당신은 뭐시기뭐시기',
  },
];

export default [
  http.get(getApiUrl(surveyApis.getSurvey), () => {
    const response: ResponseGetSurvey = {
      survey: fakeSurveys,
    };
    return HttpResponse.json(response);
  }),
  http.post(getApiUrl(surveyApis.postSurvey), () => {
    return new HttpResponse({ status: 201 });
  }),
];
