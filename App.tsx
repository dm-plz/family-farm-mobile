import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';

import queryClient from '@/api/queryClient';
import { initMSW } from '@/mocks/init';
import RootNavigator from '@/navigations/RootNavigator';

import './gesture-handler';
const { FirebaseMessagingModule } = NativeModules;

export default function App() {
  const [isMockingEnabled, setMockingEnabled] = useState(false);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(FirebaseEventModule);
    const eventListener = eventEmitter.addListener(
      'messaging_token_refresh',
      (event: string) => {
        console.log(event); // "someValue"
      },
    );
    initMSW().then(() => setMockingEnabled(true));
    FirebaseMessagingModule.getToken().then((token: string) => {
      console.log('Firebase Token:', token);
    });

    return () => {
      eventListener.remove();
    };
  }, []);

  if (!isMockingEnabled) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
