import { create } from 'zustand';

import { AlertToken, BirthType, FamilyRole, AuthAgent } from '@/types';

type SignupState = Partial<{
  oAuthProvider: AuthAgent;
  nickName: string;
  inviteCode: string | null;
  birthday: Date;
  birthType: BirthType;
  familyRole: FamilyRole;
  registerAlertToken: AlertToken;
}>;
type SignupActions = {
  removeAllState: () => void;
  setNickName: (nickName: string) => void;
  setInviteCode: (inviteCode: string | null) => void;
  setOAuthProvider: (oAuthProvider: AuthAgent) => void;
  setBirthday: (birthday: Date, birthType: BirthType) => void;
  setFamilyRole: (familyRole: FamilyRole) => void;
  setRegisterAlertToken: (registerAlertToken: AlertToken) => void;
};
type Signup = SignupState & SignupActions;

const initSignupState = {
  oAuthProvider: undefined,
  nickName: undefined,
  inviteCode: undefined,
  birthday: undefined,
  birthType: undefined,
  familyRole: undefined,
  registerAlertToken: undefined,
};

const useSignupStore = create<Signup>(set => ({
  ...initSignupState,
  removeAllState: () => set(initSignupState),
  setOAuthProvider: oAuthProvider => set({ oAuthProvider }),
  setInviteCode: inviteCode => set({ inviteCode }),
  setNickName: nickName => set({ nickName }),
  setFamilyRole: familyRole => set({ familyRole }),
  setBirthday: (birthday, birthType) => set({ birthday, birthType }),
  setRegisterAlertToken: registerAlertToken => set({ registerAlertToken }),
}));

export default useSignupStore;
