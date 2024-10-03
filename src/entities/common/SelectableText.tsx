import { GestureResponderEvent, Image, Pressable } from 'react-native';

import { TextRegular } from '../fonts';

import { colors } from '@/constants';

interface SelectableTextProps {
  isSelected: boolean;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

function SelectableText({ isSelected, onPress, text }: SelectableTextProps) {
  return (
    <Pressable className="mt-auto flex-row items-center p-3" onPress={onPress}>
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
