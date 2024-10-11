import { create } from 'zustand';

import {
  removeEncryptStorage,
  setEncryptStorage,
} from '@/utils/encryptStorage';

export type CredentialStoreState = {
  accessToken?: string;
  refreshToken?: string;
};

type CredentialStoreActions = {
  setToken: (props: Required<CredentialStoreState>) => void;
  removeToken: () => void;
};

type CredentialStore = CredentialStoreState & CredentialStoreActions;
const useCredentialStore = create<CredentialStore>(set => ({
  accessToken: undefined,
  refreshToken: undefined,
  setToken: props => {
    setEncryptStorage('credential_token', props);
    set(props);
  },
  removeToken: () => {
    removeEncryptStorage('credential_token');
    set({ accessToken: undefined, refreshToken: undefined });
  },
}));

export default useCredentialStore;
