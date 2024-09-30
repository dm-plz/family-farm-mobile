import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import queryClient from '@/api/queryClient';
import GradientEndBackground from '@/entities/background/GradientEndBackground';
import { initMSW } from '@/mocks/init';
import RootNavigator from '@/navigations/RootNavigator';
import './gesture-handler';

//TODO: Gradient 배경 사용 여부에 따라 Tab 배경을 변경해야 함
export default function App() {
  const [isMockingEnabled, setMockingEnabled] = useState(false);

  useEffect(() => {
    initMSW().then(() => setMockingEnabled(true));
  }, []);

  if (!isMockingEnabled) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <GradientEndBackground>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </GradientEndBackground>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
