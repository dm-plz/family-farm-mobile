import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  iconText?: string;
  onPressIcon?: () => void;
}

export default function MainHeader({iconText, onPressIcon = () => {}}: Props) {
  return (
    <View className="relative mb-10">
      <Text className="text-center text-xl">Logo</Text>
      {iconText && (
        <Text className="absolute right-0 mr-4" onPress={onPressIcon}>
          {iconText}
        </Text>
      )}
    </View>
  );
}
