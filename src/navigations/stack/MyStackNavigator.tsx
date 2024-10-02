import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { routeNames } from '@/constants';
import { Setting, Profile } from '@/pages/my';

export type MyStackParamList = {
  [routeNames.SETTING]: undefined;
  [routeNames.MY_PROFILE]: undefined;
};

const Stack = createNativeStackNavigator<MyStackParamList>();

function MyStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routeNames.SETTING} component={Setting} />
      <Stack.Screen name={routeNames.MY_PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}

export default MyStackNavigator;
