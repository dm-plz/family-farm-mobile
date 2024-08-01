import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';

interface CustomButtonProps extends Pick<PressableProps, 'onPress'> {
  twClass?: string;
  children?: React.ReactNode;
}

const CustomButton = ({
  children,
  twClass = 'bg-slate-200',
  onPress,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`mt-2 flex h-12 ${twClass} items-center justify-center rounded-lg p-2 active:bg-green-200`}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
