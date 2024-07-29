import React from 'react';
import {SafeAreaView} from 'react-native';

import LoginPage from '@/component/LoginPage';

function App() {
  return (
    <SafeAreaView className="flex flex-col h-full bg-amber-100/30">
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
