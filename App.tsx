import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';

import queryClient from '@/api/queryClient';
import {initMSW} from '@/mocks/init';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

export default function App() {
  const [isMockingEnabled, setMockingEnabled] = useState(false);

  useEffect(() => {
    initMSW().then(() => setMockingEnabled(true));
  }, []);

  if (!isMockingEnabled) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SignUpStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
