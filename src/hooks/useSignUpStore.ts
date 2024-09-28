import { create } from 'zustand';

import { BodySignUp } from '@/api/auth';

type State = {
  signUpStore: BodySignUp;
};

type Action = {
  updateNickname: (nickname: BodySignUp['nickname']) => void;
  updateSubAndAlertToken: (
    sub: BodySignUp['sub'],
    alertTokenValue: BodySignUp['alertToken']['value'],
    deviceId: BodySignUp['alertToken']['deviceId'],
  ) => void;
  updateGroupRole: (groupRole: BodySignUp['groupRole']) => void;
};

export const useSignUpStore = create<State & Action>(set => ({
  signUpStore: {
    nickname: '',
    birth: '',
    birthType: 'SOLAR',
    sub: '',
    groupRole: '',
    familyCode: 'null',
    alertToken: {
      deviceId: '',
      type: 'FCM',
      value: '',
    },
  },

  updateNickname: nickname =>
    set(state => ({ signUpStore: { ...state.signUpStore, nickname } })),

  updateSubAndAlertToken: (sub, alertTokenValue, deviceId) =>
    set(state => ({
      signUpStore: {
        ...state.signUpStore,
        sub,
        alertToken: {
          ...state.signUpStore.alertToken,
          value: alertTokenValue,
          deviceId,
        },
      },
    })),

  updateGroupRole: groupRole =>
    set(state => ({ signUpStore: { ...state.signUpStore, groupRole } })),
}));
