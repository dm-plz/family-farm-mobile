import {Pressable, PressableProps, Text} from 'react-native';

interface CustomButtonProps extends PressableProps {
  title?: string;
  twClass?: string;
  children?: React.ReactNode;
}

const CustomButton = ({
  children,
  twClass = 'bg-slate-200',
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      className={`mt-2 flex h-12 ${twClass} items-center justify-center rounded-lg p-2 active:bg-green-200`}
      {...props}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
