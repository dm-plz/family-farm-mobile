import { useQuery } from '@tanstack/react-query';

import { getQuestion } from '@/api/question';

export const questionQueryKeys = {
  today: () => ['question', 'today'],
};

export function useTodayQuestionQuery() {
  return useQuery({
    queryKey: questionQueryKeys.today(),
    queryFn: () => getQuestion(),
    staleTime: Infinity,
  });
}
