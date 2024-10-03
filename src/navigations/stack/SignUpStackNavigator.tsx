import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { routeNames } from '@/constants';
import Onboarding from '@/pages/Onboarding';
import Join1 from '@/pages/sign-up/Join1';
import Join2 from '@/pages/sign-up/Join2';
import Join3 from '@/pages/sign-up/Join3';
import Join4 from '@/pages/sign-up/Join4';

export type SignUpStackParamList = {
  [routeNames.ON_BOARDING]: undefined;
  [routeNames.JOIN1]: undefined;
  [routeNames.JOIN2]: undefined;
  [routeNames.JOIN3]: undefined;
  [routeNames.JOIN4]: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routeNames.JOIN3}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.ON_BOARDING} component={Onboarding} />
      <Stack.Screen name={routeNames.JOIN1} component={Join1} />
      <Stack.Screen name={routeNames.JOIN2} component={Join2} />
      <Stack.Screen name={routeNames.JOIN3} component={Join3} />
      <Stack.Screen name={routeNames.JOIN4} component={Join4} />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
