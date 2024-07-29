import React from 'react';
import {SafeAreaView} from 'react-native';

// import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/sign-up/SignUpWelcomePage';
import SinUpInformationPage from '@/pages/sign-up/SinUpInformationPage';

function App() {
  return (
    <SafeAreaView className="flex flex-col h-full bg-amber-100/30">
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <SinUpInformationPage />
    </SafeAreaView>
  );
}

export default App;
