import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { myNavigation } from '@/constants';
import { Setting, Profile } from '@/pages/my';

export type MyStackParamList = {
  [myNavigation.SETTING]: undefined;
  [myNavigation.PROFILE]: undefined;
};

const Stack = createNativeStackNavigator<MyStackParamList>();

function MyStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={myNavigation.SETTING} component={Setting} />
      <Stack.Screen name={myNavigation.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}

export default MyStackNavigator;
