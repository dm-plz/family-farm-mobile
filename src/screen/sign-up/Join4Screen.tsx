import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, authRouteNames } from '@/constants';
import { DatePicker, SelectableText } from '@/entities/common';
import { TextBold, TextRegular, TextSemiBold } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AuthStackParams } from '@/navigations/stack/AuthStackNavigator';
import useNavigationStore from '@/store/stores/navigationStore';
import useSignupStore from '@/store/stores/signupStore';

type Join2ScreenProps = NativeStackScreenProps<
  AuthStackParams,
  typeof authRouteNames.JOIN4
>;

function Join4Screen({ navigation }: Join2ScreenProps) {
  const { navigate, goBack } = useNavigationStore();
  const { setBirthday, birthday } = useSignupStore();

  const [isLuna, setIsLuna] = useState(false);
  const [date, setDate] = useState<Date | undefined>(birthday);

  //TODO: 알림을 위한 token 등록을 위한 과정이 누락 됨
  function handleJoin4(inputDay: Date, inputBirthType: boolean) {
    setBirthday(inputDay, inputBirthType ? 'SOLAR' : 'LUNA');
    navigate(navigation, authRouteNames.JOIN5);
  }

  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      left={{
        onPress: () => goBack(navigation),
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
            생년월일을 입력해 주세요
          </TextRegular>
        </View>
        <View className="mt-10">
          <TextSemiBold className="text-body2 leading-4 text-gray-300">
            생년월일
          </TextSemiBold>
          <View className="flex-row items-start pt-3">
            <DatePicker date={date} onChange={setDate} />
            <SelectableText
              className="ml-3 pt-4"
              text="음력"
              isSelected={isLuna}
              onPress={() => setIsLuna(!isLuna)}
            />
          </View>
        </View>
        <Pressable
          className={`my-2 mt-auto flex-row items-center justify-center rounded-xl px-9 py-3 ${date ? 'bg-primary-100' : 'bg-gray-300'}`}
          onPress={() => date && handleJoin4(date, !isLuna)}>
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
