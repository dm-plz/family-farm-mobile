import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SignUpInfoInputScreen from '@/Screens/sign-up/SignUpInfoInputScreen';
import SignUpInviteCodeScreen from '@/Screens/sign-up/SignUpInviteCodeScreen';
import SignUpWelcomeScreen from '@/Screens/sign-up/SignUpWelcomeScreen';

const Stack = createNativeStackNavigator();

function SignUpStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SignUpWelcomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SignUpWelcomeScreen"
        component={SignUpWelcomeScreen}
      />
      <Stack.Screen
        name="SignUpInfoInputScreen"
        component={SignUpInfoInputScreen}
      />
      <Stack.Screen
        name="SignUpInviteCodeScreen"
        component={SignUpInviteCodeScreen}
      />
    </Stack.Navigator>
  );
}

export default SignUpStackNavigator;
