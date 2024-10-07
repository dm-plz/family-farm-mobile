import { create } from 'zustand';

type BackGroundMode = 'default' | 'gradient';
type BackGroundStoreState = {
  outOfSafeAreaBackgroundMode: BackGroundMode;
};
type BackGroundStoreActions = {
  setDefaultBackgroundMode: () => void;
  setGradientBackgroundMode: () => void;
};
type BackGroundStore = BackGroundStoreState & BackGroundStoreActions;

const useBackGroundStore = create<BackGroundStore>(set => ({
  outOfSafeAreaBackgroundMode: 'default',
  setDefaultBackgroundMode: () =>
    set(() => ({
      outOfSafeAreaBackgroundMode: 'default',
    })),
  setGradientBackgroundMode: () =>
    set(() => ({
      outOfSafeAreaBackgroundMode: 'gradient',
    })),
}));

export default useBackGroundStore;
