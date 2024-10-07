import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import ReactNativeModule, { NativeModules } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import queryClient from '@/api/queryClient';
import ConfirmModal from '@/entities/ConfirmModal';
import { initMSW } from '@/mocks/init';
import RootNavigator from '@/navigations/RootNavigator';
import './gesture-handler';

// NOTE: Firebase Messaging을 위한 Module 불러오기
const { FirebaseMessagingModule, FirebaseEventModule } = NativeModules;

//NOTE: Firebase Messaging Native Module에 js 환경 구성이 완료되었음을 알림
FirebaseMessagingModule.eventsNotifyReady(true);

//NOTE: event emitter를 통해 받아 올 이벤트 등록. 미등록시 이벤트 수신 불가
FirebaseMessagingModule.eventsAddListener('messaging_token_refresh');
FirebaseMessagingModule.eventsAddListener('messaging_notification_opened');
FirebaseMessagingModule.eventsAddListener('messaging_message_received');

export default function App() {
  const [isMockingEnabled, setMockingEnabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300); //스플래시 활성화 시간
  });

  useEffect(() => {
    const eventEmitter = new ReactNativeModule.NativeEventEmitter(
      FirebaseEventModule,
    );

    //NOTE: 토큰 재발급시 발생
    const eventListener = eventEmitter.addListener(
      'messaging_token_refresh',
      (event: string) => {
        console.log(event);
      },
    );
    //NOTE: 알림을 통해 앱을 열었을 때 발생
    //TODO: 안드로이드 환경에서는 현재 별도의 이벤트 인식이 불가능한 상태. 추후 알림관련 기획이 확정되면 추가 작업 예정
    const eventListener2 = eventEmitter.addListener(
      'messaging_notification_opened',
      (event: string) => {
        console.log(event);
      },
    );
    //NOTE: 앱을 사용중일 때 푸시 알림을 받았을 때 발생
    const eventListener3 = eventEmitter.addListener(
      'messaging_message_received',
      (event: string) => {
        console.log(event);
      },
    );

    initMSW().then(() => setMockingEnabled(true));

    //NOTE: 발급 받은 토큰을 확인하고 싶을 때 사용
    FirebaseMessagingModule.getToken().then((token: string) => {
      console.log('Firebase Token:', token);
    });

    //NOTE: eventListener를 필수적으로 제거해야 함. 그렇지 않으면 메모리 누수 발생으로 인해 앱이 종료될 수 있음
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
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <ConfirmModal />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
