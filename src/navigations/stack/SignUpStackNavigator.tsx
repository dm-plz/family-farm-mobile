import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {signUpNavigation} from '@/constants';
import User02 from '@/Screens/US-01-A/B/User02';
import User03 from '@/Screens/US-01-A/B/User03';
import User04 from '@/Screens/US-01-A/B/User04';

export type SignUpStackParamList = {
  [signUpNavigation.SIGN_UP_WELCOME]: undefined;
  [signUpNavigation.SIGN_UP_INFO_INPUT]: undefined;
  [signUpNavigation.SIGN_UP_INVITE]: undefined;
  [signUpNavigation.SIGN_UP_WITH_CODE]: undefined;
};

const Stack = createNativeStackNavigator<SignUpStackParamList>();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={signUpNavigation.SIGN_UP_WELCOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={signUpNavigation.SIGN_UP_WELCOME}
        component={User02}
      />
      <Stack.Screen
        name={signUpNavigation.SIGN_UP_INFO_INPUT}
        component={User03}
      />
      <Stack.Screen name={signUpNavigation.SIGN_UP_INVITE} component={User04} />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
