import { QueryClient } from '@tanstack/react-query';

//NOTE: retry의 경우 ky 라이브러리를 사용하여 관리 중
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;
