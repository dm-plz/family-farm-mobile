import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  iconText: string;
}

export default function MainHeader({iconText}: Props) {
  return (
    <View className="relative mb-10">
      <Text className="text-center text-xl">Logo</Text>
      <Text className="absolute right-0 mr-4">{iconText}</Text>
    </View>
  );
}
