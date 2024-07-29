import {PropsWithChildren, useState} from 'react';
import {Pressable, Text} from 'react-native';

interface Button extends PropsWithChildren {
  title?: string;
  className?: string;
}

const Button = ({children, className}: Button) => {
  const [isClicked, setIsClicked] = useState(false);

  console.log('클넴', className);
  return (
    <Pressable
      className={`${
        isClicked ? 'bg-slate-400' : 'bg-slate-200'
      } mt-2 items-center justify-center flex-1 h-12   p-2 rounded-lg ${className}`}
      onPressIn={() => {
        setIsClicked(true);
      }}
      onPressOut={() => {
        setIsClicked(false);
      }}>
      <Text>{children}</Text>
      <Text>{className}</Text>
    </Pressable>
  );
};

export default Button;
