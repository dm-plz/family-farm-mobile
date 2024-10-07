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

//FIXME: 정렬 틀어진거 수정 및 배지 기능 추가하기
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
      <TextBold className="text-center text-h2 leading-6">{title}</TextBold>
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
