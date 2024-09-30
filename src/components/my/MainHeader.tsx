import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { TextBold } from '@/entities/fonts';

interface Props {
  title: string;
  left?: {
    onPress: PressableProps['onPress'];
    icon: ReactNode;
  };
  right?: {
    onPress: PressableProps['onPress'];
    icon: ReactNode;
  };
}

export default function MainHeader({ title, left, right }: Props) {
  return (
    <View className="relative h-14 py-4">
      {left && (
        <Pressable
          className="absolute left-0 top-4 ml-4 h-5 w-5"
          onPress={left.onPress}>
          {left.icon}
        </Pressable>
      )}
      <TextBold className="text-center text-h2">{title}</TextBold>
      {right && (
        <Pressable
          className="absolute right-0 top-4 mr-4 h-5 w-5"
          onPress={right.onPress}>
          {right.icon}
        </Pressable>
      )}
    </View>
  );
}
