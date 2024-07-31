import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* LoginPage === USER01 */}
      {/* <LoginPage /> */}
      <SignUpStackNavigator />
    </NavigationContainer>
  );
}

export default App;
