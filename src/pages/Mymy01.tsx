import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import MainHeader from '@/components/MainHeader';
import {mymyNavigation} from '@/constants';
import {MapStackParamList} from '@/navigations/stack/MymyStackNavigator';

type MymyScreenProps = NativeStackScreenProps<
  MapStackParamList,
  typeof mymyNavigation.MYMY_HOME
>;

export default function Mymy01({navigation}: MymyScreenProps) {
  return (
    <SafeAreaView className="h-full bg-green-100">
      <View>
        <MainHeader
          iconText="Setting Icon"
          onPressIcon={() => navigation.navigate(mymyNavigation.SETTING)}
        />
        <Text className="text-center font-extrabold">가은's family</Text>
        <View className="my-4 flex flex-row items-center justify-center">
          <View className="mr-4 bg-slate-100 p-2">
            <Text className="h-10 w-10 text-center">SNS Icon</Text>
          </View>
          <Text>가입일: 2024.07.20</Text>
        </View>
        <View className="mx-10 flex rounded-xl bg-green-400 py-4 pl-4">
          <Text className="font-bold">딸 가은</Text>
          <Text className="pl-4 font-bold">1994.09.16</Text>
          <Text className="pl-4">카카오톡 로그인 (2024.07.20)</Text>
        </View>
        <View className="mx-12 mt-4 border border-slate-400" />
        <View className="mx-10 mt-8 flex py-4 pl-4">
          <Text className="font-bold">엄마 수</Text>
          <Text className="pl-4 font-bold">YYYY.MM.DD(음)</Text>
          <Text className="pl-4">구글 로그인 (2024.07.20)</Text>
        </View>
        <View className="mx-10 mt-8 flex py-4 pl-4">
          <Text className="font-bold">아빠 규</Text>
          <Text className="pl-4 font-bold">YYYY.MM.DD</Text>
          <Text className="pl-4">카카오톡 로그인 (2024.07.21)</Text>
        </View>
        <View className="mt-auto">
          <View>
            <Text className="text-center">우리 가족 코드</Text>
            <Text className="text-center text-lg font-bold underline">
              AS12F56E
            </Text>
          </View>
          <View className="mx-auto mt-10 flex rounded-lg bg-green-400 px-12 py-4">
            <Text className="text-center">초대장 보내기</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
