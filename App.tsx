import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactNativeModule, { NativeModules } from 'react-native';

import queryClient from '@/api/queryClient';
import { initMSW } from '@/mocks/init';
import RootNavigator from '@/navigations/RootNavigator';

import './gesture-handler';
const { FirebaseMessagingModule, FirebaseEventModule } = NativeModules;
FirebaseMessagingModule.eventsNotifyReady(true);
FirebaseMessagingModule.eventsAddListener('messaging_token_refresh');
FirebaseMessagingModule.eventsAddListener('messaging_notification_opened');
FirebaseMessagingModule.eventsAddListener('messaging_message_received');

export default function App() {
  const [isMockingEnabled, setMockingEnabled] = useState(false);

  useEffect(() => {
    const eventEmitter = new ReactNativeModule.NativeEventEmitter(
      FirebaseEventModule,
    );
    const eventListener = eventEmitter.addListener(
      'messaging_token_refresh',
      (event: string) => {
        console.log(event); // "someValue"
      },
    );
    const eventListener2 = eventEmitter.addListener(
      'messaging_notification_opened',
      (event: string) => {
        console.log(event); // "someValue"
      },
    );
    const eventListener3 = eventEmitter.addListener(
      'messaging_message_received',
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
      eventListener2.remove();
      eventListener3.remove();
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
