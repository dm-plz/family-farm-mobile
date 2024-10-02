import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';

import MainHeader from '@/components/my/MainHeader';
import { bottomTabNavigation, colors, myNavigation } from '@/constants';
import SafeDisplayViewWithHeader from '@/entities/common/SafeDisplayWithHeader';
import { TextBold, TextMedium, TextRegular } from '@/entities/fonts';
import { BottomTabNavigation } from '@/navigations/BottomTabNavigator';
import { MyStackParamList } from '@/navigations/stack/MyStackNavigator';

type SettingScreenProps = NativeStackScreenProps<
  MyStackParamList & BottomTabNavigation,
  typeof myNavigation.SETTING
>;
export default function Setting({ navigation }: SettingScreenProps) {
  // TODO: Modal Page 구현 후 적용
  const showAlert = () => {
    Alert.alert(
      '로그아웃 확인',
      '로그아웃하시겠어요?',
      [
        {
          text: '취소',
          onPress: () => {},
        },
        { text: '로그아웃', onPress: () => {}, style: 'destructive' },
      ],
      { cancelable: false },
    );
  };
  const [isAlarm, setIsAlram] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);

  //FIXME: onPress 작동 안하는 중
  return (
    <SafeDisplayViewWithHeader
      leftButton={{
        onPress: () => navigation.navigate(bottomTabNavigation.MY),
        icon: (
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={colors.primary[100]}
          />
        ),
      }}
      title="설정"
      className="bg-white h-full">
      <Pressable onPress={() => navigation.navigate(myNavigation.PROFILE)}>
        <View className="mx-5 my-5 flex flex-row items-center">
          <Image
            source={require('@/assets/img/default-user-profile.png')}
            className="mr-2 h-12 w-12"
            resizeMode="contain"
          />
          <View>
            <TextBold className="text-h3">가은님</TextBold>
          </View>
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="ml-auto h-5 w-5 rotate-180"
            tintColor={colors.primary[100]}
          />
        </View>
      </Pressable>
      <View>
        <TextBold className="mb-1 ml-5 text-h3">알람 설정</TextBold>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>PUSH 알림</TextRegular>
          <Switch
            trackColor={{
              false: colors.gray[100],
              true: colors.primary[100],
            }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.gray[100]}
            onValueChange={() => {
              setIsAlram(!isAlarm);
            }}
            value={isAlarm}
            style={styles.switch}
          />
        </View>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>마케팅 정보 알림</TextRegular>
          <Switch
            trackColor={{
              false: colors.gray[100],
              true: colors.primary[100],
            }}
            thumbColor={colors.white}
            ios_backgroundColor={colors.gray[100]}
            onValueChange={() => {
              setIsMarketing(!isMarketing);
            }}
            value={isMarketing}
            style={styles.switch}
          />
        </View>
      </View>
      <View className="mt-5">
        <TextBold className="mb-1 ml-5 text-h3">문의하기</TextBold>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>자주 묻는 질문</TextRegular>
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="ml-auto h-4 w-4 rotate-180"
            tintColor={colors.gray[100]}
          />
        </View>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>1:1 문의하기</TextRegular>
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="ml-auto h-4 w-4 rotate-180"
            tintColor={colors.gray[100]}
          />
        </View>
      </View>
      <View className="mt-5">
        <TextBold className="mb-1 ml-5 text-h3">약관 및 정책</TextBold>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>이용 약관</TextRegular>
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="ml-auto h-4 w-4 rotate-180"
            tintColor={colors.gray[100]}
          />
        </View>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>개인 정보 처리 방침</TextRegular>
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="ml-auto h-4 w-4 rotate-180"
            tintColor={colors.gray[100]}
          />
        </View>
        <View className="flex flex-row items-center border-b border-gray-25 px-5 py-3">
          <TextRegular>위치 정보 이용 약관</TextRegular>
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="ml-auto h-4 w-4 rotate-180"
            tintColor={colors.gray[100]}
          />
        </View>
      </View>
      <View className="ml-5 mt-5">
        <TextMedium className="text-body2 text-gray-300">로그아웃</TextMedium>
      </View>
      <View className="ml-5 mt-5">
        <TextMedium className="text-body2 text-gray-300">탈퇴하기</TextMedium>
      </View>
    </SafeDisplayViewWithHeader>
  );
}

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
    marginLeft: 'auto',
  },
});
