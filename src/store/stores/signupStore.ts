import { create } from 'zustand';

import { BirthType, FamilyRole } from '@/types';

type SignupState = Partial<{
  inviteCode: string | null;
  nickName: string;
  birthday: Date;
  birthType: BirthType;
  familyRole: FamilyRole;
}>;
type SignupActions = {
  setInviteCode: (inviteCode: string | null) => void;
  setNickName: (nickName: string) => void;
  setBirthday: (birthday: Date, birthType: BirthType) => void;
  setFamilyRole: (familyRole: FamilyRole) => void;
  removeAllState: () => void;
};
type Signup = SignupState & SignupActions;

const initSignupState = {
  nickName: undefined,
  inviteCode: undefined,
  birthday: undefined,
  birthType: undefined,
  familyRole: undefined,
};

const useSignupStore = create<Signup>(set => ({
  ...initSignupState,
  removeAllState: () => set(initSignupState),
  setInviteCode: inviteCode => set({ inviteCode }),
  setNickName: nickName => set({ nickName }),
  setFamilyRole: familyRole => set({ familyRole }),
  setBirthday: (birthday, birthType) => set({ birthday, birthType }),
}));

export default useSignupStore;
