import React from 'react';

import DefaultTabNavigator from './DefaultTabNavigator';

import AuthStackNavigator from '@/navigations/stack/AuthStackNavigator';
import ErrorScreen from '@/screen/ErrorScreen';
import { useAuthStore, useErrorStore } from '@/store/stores';

export default function RootNavigator() {
  const { isLogin } = useAuthStore();
  const { errorType } = useErrorStore();

  if (errorType) {
    return <ErrorScreen type={400} />;
  }
  return <>{isLogin ? <DefaultTabNavigator /> : <AuthStackNavigator />}</>;
}
