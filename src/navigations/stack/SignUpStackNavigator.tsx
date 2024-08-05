import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {signUpNavigation} from '@/constants';
import Onboarding from '@/pages/Onboarding';
import Join1 from '@/pages/sign-up/Join1';
import Join2 from '@/pages/sign-up/Join2';
import Join3 from '@/pages/sign-up/Join3';

export type SignUpStackParamList = {
  [signUpNavigation.ONBOARDING]: undefined;
  [signUpNavigation.JOIN_1]: undefined;
  [signUpNavigation.JOIN_2]: undefined;
  [signUpNavigation.JOIN_3]: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={signUpNavigation.ONBOARDING}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={signUpNavigation.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={signUpNavigation.JOIN_1} component={Join1} />
      <Stack.Screen name={signUpNavigation.JOIN_2} component={Join2} />
      <Stack.Screen name={signUpNavigation.JOIN_3} component={Join3} />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
