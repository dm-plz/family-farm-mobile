import { GestureResponderEvent, Image, Pressable } from 'react-native';
import { PressableProps } from 'react-native-gesture-handler';

import { TextRegular } from '../fonts';

import { colors } from '@/constants';
import { StylingProps } from '@/types/props';

interface SelectableTextProps {
  isSelected: boolean;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

function SelectableText({
  isSelected,
  onPress,
  text,
  className,
  style,
}: SelectableTextProps & StylingProps<PressableProps>) {
  return (
    <Pressable
      className={`flex-row items-center ${className}`}
      style={[style]}
      onPress={onPress}>
      <Image
        source={require('@/assets/img/icon-check-circle.png')}
        resizeMode="contain"
        className="mr-2 h-5 w-5"
        tintColor={isSelected ? colors.primary[100] : colors.gray[100]}
      />
      <TextRegular className="text-gray-400">{text}</TextRegular>
    </Pressable>
  );
}

export default SelectableText;
