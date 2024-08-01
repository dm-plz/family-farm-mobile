import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';
import LoginScreen from '@/Screens/LoginScreen';

function App() {
  return (
    <NavigationContainer>
      {/* LoginPage === USER01 */}
      {/* <LoginScreen /> */}
      <SignUpStackNavigator />
    </NavigationContainer>
  );
}

export default App;
