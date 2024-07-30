import React from 'react';
import {Text, View} from 'react-native';

export default function MainHeader() {
  return (
    <View className="relative mb-10">
      <Text className="text-center text-xl">Logo</Text>
      <Text className="absolute right-0 mr-4">Bell Icon</Text>
    </View>
  );
}
