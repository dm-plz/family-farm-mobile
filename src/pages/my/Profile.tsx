import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, Image, Pressable, View } from 'react-native';

import { colors, routeNames } from '@/constants';
import SafeDisplayViewWithHeader from '@/entities/common/SafeDisplayWithHeader';
import CustomInput from '@/entities/CustomInput';
import {
  TextBold,
  TextMedium,
  TextRegular,
  TextSemiBold,
} from '@/entities/fonts';
import { MyStackParamList } from '@/navigations/stack/MyStackNavigator';

type ProfileScreenProps = NativeStackScreenProps<
  MyStackParamList,
  typeof routeNames.MY_PROFILE
>;
export default function Setting({ navigation }: ProfileScreenProps) {
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

  const [selectedRole, setSelectedRole] = useState<string>('아빠');

  return (
    <SafeDisplayViewWithHeader
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
      }}
      className="bg-white h-full pb-10">
      <View className="ml-5 mt-2">
        <TextBold className="text-h1">나의 정보를</TextBold>
        <TextBold className="text-h1">수정해 주세요.</TextBold>
      </View>
      <View className="ml-5 mt-2">
        <TextRegular className="text-gray-400">
          나의 정보를 다시 알려주세요
        </TextRegular>
      </View>
      <View className="relative mx-auto mt-10">
        <Image
          source={require('@/assets/img/default-user-profile.png')}
          resizeMode="contain"
          className="h-[120] w-[120] rounded-full"
        />
        <View className="bg-white absolute bottom-0 right-0 rounded-full border border-gray-50">
          <Image
            source={require('@/assets/img/icon-camera.png')}
            resizeMode="contain"
            className="h-7 w-7"
          />
        </View>
      </View>
      <View className="mx-4 my-5">
        <TextSemiBold className="mb-3 text-body2 text-gray-300">
          이름 또는 닉네임
        </TextSemiBold>
        <CustomInput
          success={true}
          successMessage="사용 가능한 이름 또는 닉네임 입니다."
        />
      </View>
      <View className="mx-5">
        <TextSemiBold className="mb-2 text-body2 text-gray-300">
          나의 역할
        </TextSemiBold>
        <Pressable
          className={`mt-2 flex h-[52] flex-row justify-between rounded-xl border border-gray-50 px-5 py-4 ${selectedRole === '아빠' ? 'border-success bg-success/5' : ''}`}
          onPress={() => {
            setSelectedRole('아빠');
          }}>
          <TextMedium
            className={` ${selectedRole === '아빠' ? 'text-success' : ''}`}>
            {'아빠'}
          </TextMedium>
          <Image
            source={require('@/assets/img/icon-check-circle.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={
              selectedRole === '아빠' ? colors.primary[100] : colors.gray[100]
            }
          />
        </Pressable>
        <Pressable
          className={`mt-2 flex h-[52] flex-row justify-between rounded-xl border border-gray-50 px-5 py-4 ${selectedRole === '엄마' ? 'border-success bg-success/5' : ''}`}
          onPress={() => {
            setSelectedRole('엄마');
          }}>
          <TextMedium
            className={` ${selectedRole === '엄마' ? 'text-success' : ''}`}>
            {'엄마'}
          </TextMedium>
          <Image
            source={require('@/assets/img/icon-check-circle.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={
              selectedRole === '엄마' ? colors.primary[100] : colors.gray[100]
            }
          />
        </Pressable>
        <Pressable
          className={`mt-2 flex h-[52] flex-row justify-between rounded-xl border border-gray-50 px-5 py-4 ${selectedRole === '아들' ? 'border-success bg-success/5' : ''}`}
          onPress={() => {
            setSelectedRole('아들');
          }}>
          <TextMedium
            className={` ${selectedRole === '아들' ? 'text-success' : ''}`}>
            {'아들'}
          </TextMedium>
          <Image
            source={require('@/assets/img/icon-check-circle.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={
              selectedRole === '아들' ? colors.primary[100] : colors.gray[100]
            }
          />
        </Pressable>
        <Pressable
          className={`mt-2 flex h-[52] flex-row justify-between rounded-xl border border-gray-50 px-5 py-4 ${selectedRole === '딸' ? 'border-success bg-success/5' : ''}`}
          onPress={() => {
            setSelectedRole('딸');
          }}>
          <TextMedium
            className={` ${selectedRole === '딸' ? 'text-success' : ''}`}>
            {'딸'}
          </TextMedium>
          <Image
            source={require('@/assets/img/icon-check-circle.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={
              selectedRole === '딸' ? colors.primary[100] : colors.gray[100]
            }
          />
        </Pressable>
      </View>
      <Pressable className="mx-5 my-2 mt-7 h-12 rounded-xl bg-primary-100 px-9 py-[14]">
        <TextBold className="text-white text-h4">수정 완료</TextBold>
      </Pressable>
    </SafeDisplayViewWithHeader>
  );
}
