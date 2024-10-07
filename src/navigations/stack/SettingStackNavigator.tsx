import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { settingRouteNames } from '@/constants';
import { ProfileScreen, SettingScreen } from '@/screen/my';

export type SettingStackParams = {
  [settingRouteNames.SETTING]: undefined;
  [settingRouteNames.PROFILE]: undefined;
};

const SettingStack = createNativeStackNavigator<SettingStackParams>();

function SettingStackNavigator() {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingStack.Screen
        name={settingRouteNames.SETTING}
        component={SettingScreen}
      />
      <SettingStack.Screen
        name={settingRouteNames.PROFILE}
        component={ProfileScreen}
      />
    </SettingStack.Navigator>
  );
}

export default SettingStackNavigator;
