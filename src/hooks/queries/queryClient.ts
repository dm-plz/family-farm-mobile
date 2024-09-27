import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: error => {
      console.log(error.name, error.message);
    },
  }),
  mutationCache: new MutationCache({
    onError: error => {
      console.log(error);
    },
  }),
});

export default queryClient;
