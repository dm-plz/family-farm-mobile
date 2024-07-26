import React from 'react';
import {SafeAreaView} from 'react-native';

import LoginPage from './src/component/LoginPage';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="bg-amber-100/30 h-full flex flex-col">
      <LoginPage />
    </SafeAreaView>
  );
}

export default App;
