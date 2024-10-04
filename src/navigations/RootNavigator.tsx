import React from 'react';

import BottomTabNavigator from '@/navigations/BottomTabNavigator';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';
import { useAuthStore } from '@/store/stores';

export default function RootNavigator() {
  const { isLogin } = useAuthStore();

  return <>{isLogin ? <BottomTabNavigator /> : <SignUpStackNavigator />}</>;
}
