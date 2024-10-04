import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, routeNames } from '@/constants';
import {
  TextBold,
  TextLight,
  TextRegular,
  TextSemiBold,
} from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';
import { useAuthStore } from '@/store/stores';

type Join2ScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof routeNames.JOIN5
>;

function Join5(_: Join2ScreenProps) {
  const { setIsLogin } = useAuthStore();

  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      title="가입 완료">
      <View className="mb-5 mt-10">
        <Image
          source={require('@/assets/img/symbol-character.png')}
          resizeMode="contain"
          className="mx-auto h-[348] w-[224]"
        />
        <TextBold className="text-center text-h2">
          회원가입이 완료되었습니다.
        </TextBold>
        <TextLight className="text-center text-gray-300">
          가은님, 가족과 소중한 추억 쌓으러 가볼까요?
        </TextLight>
      </View>
      <View className="bg-white mx-auto mt-auto w-[340] rounded-3xl border border-primary-8 px-5 py-4">
        <View
          className="flex flex-row items-center justify-between"
          style={styles.familyCodeCard}>
          <View>
            <TextRegular className="text-body2 text-gray-300">
              우리 가족 코드
            </TextRegular>
            <TextSemiBold className="text-black mt-1 text-h3">
              AS12F56E
            </TextSemiBold>
          </View>
          <View className="bg-white border-primary-4 mt-2 flex h-10 w-10 items-center justify-center rounded-full border p-3">
            <Image
              source={require('@/assets/img/icon-copy.png')}
              className="h-4 w-4"
              resizeMode="contain"
            />
          </View>
        </View>
        <Pressable
          className="mt-2 rounded-3xl bg-primary-100 px-9 py-3"
          onPress={() => {}}>
          <TextBold className="text-white text-center text-body3">
            초대하기
          </TextBold>
        </Pressable>
      </View>
      <Pressable
        className="mx-5 mb-2 mt-5 rounded-xl bg-gray-500 px-9 py-4"
        onPress={() => {
          setIsLogin(true);
        }}>
        <TextBold className="text-white text-center text-h4">홈으로</TextBold>
      </Pressable>
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
  familyCodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});

export default Join5;
