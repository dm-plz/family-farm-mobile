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

export default useBackGroundStore;
