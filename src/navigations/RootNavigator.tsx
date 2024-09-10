import React from 'react';

import useAuth from '@/hooks/queries/useAuth';
import BottomTabNavigator from '@/navigations/BottomTabNavigator';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

export default function RootNavigator() {
  const { isSignedIn } = useAuth();

  return <>{isSignedIn ? <BottomTabNavigator /> : <SignUpStackNavigator />}</>;
}
