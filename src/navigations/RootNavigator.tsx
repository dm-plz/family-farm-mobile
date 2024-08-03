import React from 'react';

import useAuth from '@/hooks/useAuth';
import BottomTabNavigator from '@/navigations/BottomTabNavigator';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

export default function RootNavigator() {
  const {isLogin} = useAuth();

  return <>{isLogin ? <BottomTabNavigator /> : <SignUpStackNavigator />}</>;
}
