import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {mymyNavigation} from '@/constants';
import Mymy01 from '@/pages/Mymy01';
import Sett01 from '@/pages/Sett01';

export type MapStackParamList = {
  [mymyNavigation.MYMY_HOME]: undefined;
  [mymyNavigation.SETTING]: undefined;
};

const Stack = createNativeStackNavigator<MapStackParamList>();

function MapStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={mymyNavigation.MYMY_HOME} component={Mymy01} />
      <Stack.Screen name={mymyNavigation.SETTING} component={Sett01} />
    </Stack.Navigator>
  );
}

export default MapStackNavigator;
