import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface CustomCheckBoxProps {
  children?: React.ReactNode;
  twClass?: string;
}

export default function CustomCheckBox({
  children,
  twClass,
}: CustomCheckBoxProps) {
  const [isChecked, setCheckbox] = useState(false);
  return (
    <Pressable
      className={`flex flex-row items-center space-x-2 ${twClass}`}
      onPress={() => {
        setCheckbox(state => !state);
      }}>
      <View className="h-6 w-6 items-center justify-center border border-black bg-white">
        {isChecked && (
          <Image
            source={require('../assets/img/orange.png')}
            className="h-4 w-4"
            resizeMode="contain"
          />
        )}
      </View>

      {children && (
        <View className="flex items-center justify-center">
          <Text>{children}</Text>
        </View>
      )}
    </Pressable>
  );
}
