import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import LoginPage from '@/pages/LoginPage';
import SignUpWelcomePage from '@/pages/sign-up/SignUpWelcomePage';

function App() {
  return (
    <SafeAreaView>
      {/* LoginPage === USER01 */}
      {/* <LoginPage /> */}
      <SignUpWelcomePage />
    </SafeAreaView>
  );
}

export default App;
