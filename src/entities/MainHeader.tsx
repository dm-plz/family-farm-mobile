import React, { ReactNode } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { TextBold } from '@/entities/fonts';

export interface MainHeaderProps {
  title?: string;
  left?: {
    onPress: PressableProps['onPress'];
    icon: ReactNode;
    showBadge?: boolean;
  };
  right?: {
    onPress: PressableProps['onPress'];
    icon: ReactNode;
    showBadge?: boolean;
  };
}

export default function MainHeader({ title, left, right }: MainHeaderProps) {
  return (
    <View className="relative h-14 py-4">
      {left && (
        <Pressable
          className="absolute left-5 top-1/2 z-10 h-6 w-6 translate-y-2"
          onPress={left.onPress}>
          <View className="relative">
            {left.showBadge && (
              <View className="absolute -top-0.5 right-0 h-1.5 w-1.5 rounded-full bg-secondary" />
            )}
            {left.icon}
          </View>
        </Pressable>
      )}
      <TextBold className="text-center text-h2 leading-6">{title}</TextBold>
      {right && (
        <Pressable
          className="absolute right-5 top-1/2 z-10 h-6 translate-y-2"
          onPress={right.onPress}>
          <View className="relative pr-1">
            {right.showBadge && (
              <View className="absolute -top-0.5 right-0 h-1.5 w-1.5 rounded-full bg-secondary" />
            )}
            {right.icon}
          </View>
        </Pressable>
      )}
    </View>
  );
}
