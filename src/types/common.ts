import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { HTTPError } from 'ky';

type ResponseError = HTTPError & {
  response: {
    json(): Promise<{
      statusCode: string;
      message: string;
      error: string;
    }>;
  };
};

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  'mutationFn'
>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

export type { UseMutationCustomOptions, UseQueryCustomOptions };
