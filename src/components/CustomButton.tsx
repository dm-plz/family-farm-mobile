import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';

interface CustomButtonProps extends Pick<PressableProps, 'onPress' | 'style'> {
  twClass?: string;
  children?: React.ReactNode;
}

const CustomButton = ({
  children,
  twClass,
  onPress,
  style,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={style}
      className={`flex h-12 bg-slate-200 ${twClass} items-center justify-center rounded-lg p-2 active:bg-green-200`}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
