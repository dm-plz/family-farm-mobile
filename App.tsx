import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <SignUpStackNavigator />
    </NavigationContainer>
  );
}

export default App;
