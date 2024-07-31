import {PropsWithChildren, useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';

interface CustomButtonProps extends PropsWithChildren {
  title?: string;
  twClass?: string;
}

const CustomButton = ({
  children,
  twClass = 'bg-slate-200',
}: CustomButtonProps) => {
  return (
    <Pressable
      className={`mt-2 flex h-12 ${twClass} items-center justify-center rounded-lg p-2 active:bg-green-200`}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
