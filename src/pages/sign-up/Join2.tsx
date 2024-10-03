import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, routeNames } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';

type Join2ScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof routeNames.JOIN2
>;

function Join2({ navigation }: Join2ScreenProps) {
  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      leftButton={{
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
          <TextBold className="text-h1">나의 정보를</TextBold>
          <TextBold className="text-h1">입력해 주세요.</TextBold>
          <TextRegular className="mt-2 text-gray-400">
            이름 또는 닉네임을 알려주세요.
          </TextRegular>
        </View>
        <View className="mt-10">
          <TextRegular className="text-gray-400">이름 또는 닉네임</TextRegular>
          <CustomInput
            className="mt-3"
            error={false}
            errorMessage="중복된 이름 또는 닉네임 입니다."
            success={true}
            successMessage="사용 가능한 이름 또는 닉네임 입니다."
          />
        </View>
        <Pressable
          className="my-2 mt-auto flex-row items-center justify-center rounded-xl bg-primary-100 px-9 py-3"
          onPress={() => navigation.navigate(routeNames.JOIN3)}>
          <TextBold className="text-white text-h4">입력 완료</TextBold>
        </Pressable>
      </View>
    </SafeScreenWithHeader>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default Join2;
