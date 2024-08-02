import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import queryClient from '@/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <Text className="text-orange-300">Hellow World</Text>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
