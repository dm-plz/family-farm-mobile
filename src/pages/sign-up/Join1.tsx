import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, routeNames } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';

type Join1ScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof routeNames.JOIN1
>;

function Join1({ navigation }: Join1ScreenProps) {
  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      leftButton={{
        onPress: () => navigation.navigate(routeNames.ON_BOARDING),
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
          <TextBold className="text-h1">환영합니다!</TextBold>
          <TextBold className="text-h1">초대를 받고 오셨나요?</TextBold>
          <TextRegular className="mt-2 text-gray-400">
            전달받은 초대 코드를 입력해 주세요.
          </TextRegular>
        </View>
        <View className="mt-10">
          <TextRegular className="text-gray-400">초대 코드 (8자리)</TextRegular>
          <CustomInput
            className="mt-3"
            error={true}
            errorMessage="코드가 조회되지 않습니다. 다시 확인해 주세요."
          />
          <Pressable className="mt-5 rounded-xl bg-gray-300 px-9 py-3">
            <TextBold className="text-white text-center text-h4">
              입력 완료
            </TextBold>
          </Pressable>
        </View>
        <Pressable
          className="my-2 mt-auto flex-row items-center justify-center rounded-xl bg-primary-100 px-9 py-3"
          onPress={() => navigation.navigate(routeNames.JOIN2)}>
          <Image
            source={require('@/assets/img/icon-check-circle.png')}
            resizeMode="contain"
            className="mr-2 h-5 w-5"
            tintColor={colors.white}
          />
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

export default Join1;
