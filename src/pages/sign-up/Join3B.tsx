import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import CustomButton from '@/components/CustomButton';
import StepHeader from '@/components/sign-up/StepHeader';

function Join3B() {
  return (
    <SafeAreaView>
      <View className="flex h-full flex-col justify-between px-10 pb-8">
        <StepHeader currentStep={3} />
        <View className="flex h-[40%] flex-col items-center space-y-6">
          <View className="flex h-20 w-60 items-center justify-center bg-slate-200">
            <Text className="text-center">로고</Text>
          </View>
          <View>
            <Text className="text-center font-bold">{`가은님,
      가족과 소중한 추억 쌓으러 가볼까요?`}</Text>
          </View>
        </View>
        <CustomButton>시작하기</CustomButton>
      </View>
    </SafeAreaView>
  );
}
export default Join3B;
