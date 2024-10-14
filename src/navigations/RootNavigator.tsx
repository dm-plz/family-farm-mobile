import React from 'react';

import DefaultTabNavigator from './DefaultTabNavigator';

import ErrorScreen from '@/screen/ErrorScreen';
import { useErrorStore } from '@/store/stores';

export default function RootNavigator() {
  const { errorType } = useErrorStore();

  //XXX: ErroType이 변경될 때 보여질 화면 처리 로직도 수정해야 함 (defaultTabNavigator에서 가야 함)
  if (errorType) {
    return <ErrorScreen type={400} />;
  }

  return <DefaultTabNavigator />;
}
