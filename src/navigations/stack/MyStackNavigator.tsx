import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {myNavigation} from '@/constants';
import My from '@/pages/my/My';
import Setting from '@/pages/my/Setting';

export type MyStackParamList = {
  [myNavigation.MY]: undefined;
  [myNavigation.SETTING]: undefined;
};

const Stack = createNativeStackNavigator<MyStackParamList>();

function MapStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={myNavigation.MY} component={My} />
      <Stack.Screen name={myNavigation.SETTING} component={Setting} />
    </Stack.Navigator>
  );
}

export default MapStackNavigator;
