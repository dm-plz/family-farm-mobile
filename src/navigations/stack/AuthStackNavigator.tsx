import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { authRouteNames } from '@/constants';
import {
  Join1Screen,
  Join2Screen,
  Join3Screen,
  Join4Screen,
  Join5Screen,
} from '@/screen/sign-up';
import SignInScreen from '@/screen/SignInScreen';

export type AuthStackParams = {
  [authRouteNames.SIGN_IN]: undefined;
  [authRouteNames.JOIN1]: undefined;
  [authRouteNames.JOIN2]: undefined;
  [authRouteNames.JOIN3]: undefined;
  [authRouteNames.JOIN4]: undefined;
  [authRouteNames.JOIN5]: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={authRouteNames.SIGN_IN}
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name={authRouteNames.SIGN_IN}
        component={SignInScreen}
      />
      <AuthStack.Screen name={authRouteNames.JOIN1} component={Join1Screen} />
      <AuthStack.Screen name={authRouteNames.JOIN2} component={Join2Screen} />
      <AuthStack.Screen name={authRouteNames.JOIN3} component={Join3Screen} />
      <AuthStack.Screen name={authRouteNames.JOIN4} component={Join4Screen} />
      <AuthStack.Screen name={authRouteNames.JOIN5} component={Join5Screen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
