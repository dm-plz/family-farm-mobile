import { create } from 'zustand';

import { ErrorTypes } from '@/constants/error';

type AuthStoreState = { isLogin: boolean };
type AuthStoreActions = {
  setIsLogin: (isLogin: AuthStoreState['isLogin']) => void;
};
type AuthStore = AuthStoreState & AuthStoreActions;

export const useAuthStore = create<AuthStore>(set => ({
  isLogin: true,
  setIsLogin: isLogin => set(() => ({ isLogin })),
}));

type BackGroundMode = 'default' | 'gradient';
type BackGroundStoreState = {
  outOfSafeAreaBackgroundMode: BackGroundMode;
};
type BackGroundStoreActions = {
  setDefaultBackgroundMode: () => void;
  setGradientBackgroundMode: () => void;
};
type BackGroundStore = BackGroundStoreState & BackGroundStoreActions;

export const useBackGroundStore = create<BackGroundStore>(set => ({
  outOfSafeAreaBackgroundMode: 'default',
  setDefaultBackgroundMode: () =>
    set(() => {
      console.log('default');
      return {
        outOfSafeAreaBackgroundMode: 'default',
      };
    }),
  setGradientBackgroundMode: () =>
    set(() => {
      console.log('gradient');
      return {
        outOfSafeAreaBackgroundMode: 'gradient',
      };
    }),
}));

type ErrorStoreState = { errorType: ErrorTypes | null };
type ErrorStoreActions = {
  setErrorType: (type: ErrorTypes | null) => void;
};
type ErrorStore = ErrorStoreState & ErrorStoreActions;
export const useErrorStore = create<ErrorStore>(set => ({
  errorType: null,
  setErrorType: errorType =>
    set(() => ({
      errorType,
    })),
}));
