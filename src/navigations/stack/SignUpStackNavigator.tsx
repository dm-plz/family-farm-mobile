import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {signUpNavigation} from '@/constants';
import Join1 from '@/pages/sign-up/Join1';
import Join2 from '@/pages/sign-up/Join2';
import Join3A from '@/pages/sign-up/Join3A';

export type SignUpStackParamList = {
  [signUpNavigation.JOIN_1]: undefined;
  [signUpNavigation.JOIN_2]: undefined;
  [signUpNavigation.JOIN_3A]: undefined;
  [signUpNavigation.JOIN_3B]: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={signUpNavigation.JOIN_1}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={signUpNavigation.JOIN_1} component={Join1} />
      <Stack.Screen name={signUpNavigation.JOIN_2} component={Join2} />
      <Stack.Screen name={signUpNavigation.JOIN_3A} component={Join3A} />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
