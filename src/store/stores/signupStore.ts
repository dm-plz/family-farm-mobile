import { create } from 'zustand';

import type { AuthAgent, BirthType, FamilyRole } from '@/types';

type SignupState = Partial<{
  agent: AuthAgent;
  inviteCode: string | null;
  nickName: string;
  familyRole: FamilyRole;
  birthday: Date;
}> & { birthType: BirthType };
type SignupActions = {
  setAuthAgent: (agent: AuthAgent) => void;
  setInviteCode: (inviteCode: string | null) => void;
  setNickName: (nickName: string) => void;
  setFamilyRole: (familyRole: FamilyRole) => void;
  setBirthday: (birthday: Date) => void;
  setBirthType: (birthType: BirthType) => void;
  removeAllState: () => void;
};
type Signup = SignupState & SignupActions;

const initSignupState: SignupState = {
  agent: undefined,
  inviteCode: undefined,
  nickName: undefined,
  familyRole: undefined,
  birthday: undefined,
  birthType: 'SOLAR',
};

const useSignupStore = create<Signup>(set => ({
  ...initSignupState,
  setAuthAgent: agent => set({ agent }),
  setInviteCode: inviteCode => set({ inviteCode }),
  setNickName: nickName => set({ nickName }),
  setFamilyRole: familyRole => set({ familyRole }),
  setBirthday: birthday => set({ birthday }),
  setBirthType: birthType => set({ birthType }),
  removeAllState: () => set(initSignupState),
}));

export default useSignupStore;
