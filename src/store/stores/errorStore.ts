import { create } from 'zustand';

import { ErrorTypes } from '@/constants/error';

type ErrorStoreState = { errorType: ErrorTypes | null };
type ErrorStoreActions = {
  setErrorType: (type: ErrorTypes | null) => void;
};
type ErrorStore = ErrorStoreState & ErrorStoreActions;
const useErrorStore = create<ErrorStore>(set => ({
  errorType: null,
  setErrorType: errorType =>
    set(() => ({
      errorType,
    })),
}));

export default useErrorStore;
