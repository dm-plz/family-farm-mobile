import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import RootNavigator from '@/navigations/RootNavigator';
import './gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
