import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

import queryClient from '@/api/queryClient';
import SignUpStackNavigator from '@/navigations/stack/SignUpStackNavigator';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SignUpStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
