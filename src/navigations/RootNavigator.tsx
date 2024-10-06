import React from 'react';

import BottomTabNavigator from '@/navigations/BottomTabNavigator';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';
import ErrorScreen from '@/pages/ErrorScreen';
import { useAuthStore, useErrorStore } from '@/store/stores';

export default function RootNavigator() {
  const { isLogin } = useAuthStore();
  const { errorType } = useErrorStore();

  if (errorType) {
    return <ErrorScreen type={400} />;
  }
  return <>{isLogin ? <BottomTabNavigator /> : <SignUpStackNavigator />}</>;
}
