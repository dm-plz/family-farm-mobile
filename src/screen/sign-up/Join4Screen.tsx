import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, authRouteNames } from '@/constants';
import SelectableText from '@/entities/common/SelectableText';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular, TextSemiBold } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AuthStackParams } from '@/navigations/stack/AuthStackNavigator';

type Join2ScreenProps = NativeStackScreenProps<
  AuthStackParams,
  typeof authRouteNames.JOIN4
>;

function Join4Screen({ navigation }: Join2ScreenProps) {
  const [isLuna, setIsLuna] = useState(false);
  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      left={{
        onPress: () => navigation.goBack(),
        icon: (
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={colors.primary[100]}
          />
        ),
      }}>
      <View className="h-full px-5">
        <View className="mt-2">
          <TextBold className="text-h1 leading-9">나의 정보를</TextBold>
          <TextBold className="text-h1 leading-9">입력해 주세요.</TextBold>
          <TextRegular className="mt-2 leading-4 text-gray-400">
            생년월일 6자리를 입력해 주세요
          </TextRegular>
        </View>
        <View className="mt-10">
          <TextSemiBold className="text-body2 leading-4 text-gray-300">
            생년월일 (6자리)
          </TextSemiBold>
          <View className="flex-row items-start pt-3">
            <CustomInput
              className="flex-1"
              error={false}
              errorMessage="YYMMDD 형식에 맞춰 작성해주세요."
              placeholder="YYMMDD"
            />
            <SelectableText
              className="ml-3 pt-4"
              text="음력"
              isSelected={isLuna}
              onPress={() => setIsLuna(!isLuna)}
            />
          </View>
        </View>
        <Pressable
          className="my-2 mt-auto flex-row items-center justify-center rounded-xl bg-primary-100 px-9 py-3"
          onPress={() => navigation.navigate(authRouteNames.JOIN5)}>
          <TextBold className="text-h4 text-white">입력 완료</TextBold>
        </Pressable>
      </View>
    </SafeScreenWithHeader>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
});

export default Join4Screen;
