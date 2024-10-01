import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { TextBold } from '@/entities/fonts';

interface Props {
  title?: string;
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
          className="absolute left-4 top-1/2 z-10 h-5 w-5 translate-y-2"
          onPress={left.onPress}>
          {left.icon}
        </Pressable>
      )}
      <TextBold className="text-center text-h2">{title}</TextBold>
      {right && (
        <Pressable
          className="absolute right-4 top-1/2 z-10 h-5 w-5 translate-y-2 transform"
          onPress={right.onPress}>
          {right.icon}
        </Pressable>
      )}
    </View>
  );
}
