import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { TextBold } from '@/entities/fonts';

export interface MainHeaderProps {
  title?: string;
  leftButton?: {
    onPress: PressableProps['onPress'];
    icon: ReactNode;
  };
  rightButton?: {
    onPress: PressableProps['onPress'];
    icon: ReactNode;
  };
}

export default function MainHeader({
  title,
  leftButton,
  rightButton,
}: MainHeaderProps) {
  return (
    <View className="relative h-14 py-4">
      {leftButton && (
        <Pressable
          className="absolute left-5 top-1/2 z-10 h-5 w-5 translate-y-2"
          onPress={leftButton.onPress}>
          {leftButton.icon}
        </Pressable>
      )}
      <TextBold className="text-center text-h2">{title}</TextBold>
      {rightButton && (
        <Pressable
          className="absolute right-5 top-1/2 z-10 h-5 w-5 translate-y-2 transform"
          onPress={rightButton.onPress}>
          {rightButton.icon}
        </Pressable>
      )}
    </View>
  );
}
