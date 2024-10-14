import { create } from 'zustand';

type IsAuthorizedStoreState = { isAuthorized: boolean };
type IsAuthorizedStoreActions = {
  setIsAuthorized: (
    isAuthorized: IsAuthorizedStoreState['isAuthorized'],
  ) => void;
};
type IsAuthorizedStore = IsAuthorizedStoreState & IsAuthorizedStoreActions;

const useIsAuthorizedStore = create<IsAuthorizedStore>(set => ({
  isAuthorized: false,
  setIsAuthorized: isAuthorized => set(() => ({ isAuthorized })),
}));

export default useIsAuthorizedStore;
