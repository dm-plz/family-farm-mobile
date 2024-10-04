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
