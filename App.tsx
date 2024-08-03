import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <SignUpStackNavigator />
    </NavigationContainer>
  );
}
