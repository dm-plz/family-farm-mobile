import React from 'react';

import DefaultTabNavigator from './DefaultTabNavigator';

import useInitApp from '@/business/hooks/useInitApp';
import AuthStackNavigator from '@/navigations/stack/AuthStackNavigator';
import ErrorScreen from '@/screen/ErrorScreen';
import { useErrorStore } from '@/store/stores';

export default function RootNavigator() {
  const { isAuthroized } = useInitApp();
  const { errorType } = useErrorStore();

  if (errorType) {
    return <ErrorScreen type={400} />;
  }

  return <>{isAuthroized ? <DefaultTabNavigator /> : <AuthStackNavigator />}</>;
}
