import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import CustomButton from '@/components/CustomButton';
import SignUpPageHeader from '@/components/sign-up-screen/SignUpPageHeader';

function User04() {
  return (
    <SafeAreaView>
      <View className="flex h-full flex-col justify-between px-10 pb-8">
        <SignUpPageHeader currentStep={3} />
        <View className="flex h-[40%] flex-col items-center justify-around">
          <View className="flex h-20 w-60 items-center justify-center bg-slate-200">
            <Text className="text-center">로고</Text>
          </View>
          <View>
            <Text className="text-center font-bold">{`가은님,
      가족에게 초대장 코드를 보내보세요!`}</Text>
          </View>
          <View className="flex h-20 w-60 items-center justify-center bg-green-300">
            <Text className="text-center">초대장 보내기</Text>
          </View>
          <Text>or</Text>
          <Text>나의 코드 복사</Text>
          <Text className="text-xl font-bold underline">A2SDK3</Text>
        </View>
        <CustomButton>시작하기</CustomButton>
      </View>
    </SafeAreaView>
  );
}
export default User04;
