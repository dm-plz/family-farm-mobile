import { create } from 'zustand';

type AuthStoreState = { isLogin: boolean };
type AuthStoreActions = {
  setIsLogin: (isLogin: AuthStoreState['isLogin']) => void;
};
type AuthStore = AuthStoreState & AuthStoreActions;

export const useAuthStore = create<AuthStore>(set => ({
  isLogin: false,
  setIsLogin: isLogin => set(() => ({ isLogin })),
}));
