import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import CustomButton from '@/components/CustomButton';
import StepHeader from '@/components/sign-up/StepHeader';

function Join3() {
  const isHost = false;

  return (
    <SafeAreaView>
      <View className="flex h-full flex-col justify-between px-10 pb-8">
        <StepHeader currentStep={3} />
        <View className="flex h-[40%] flex-col items-center justify-around">
          <View className="flex h-20 w-60 items-center justify-center bg-slate-200">
            <Text className="text-center">로고</Text>
          </View>
          {isHost ? (
            <>
              <View>
                <Text className="text-center font-bold">{`가은님,
      가족에게 초대장 코드를 보내보세요!`}</Text>
              </View>
              <View className="flex h-20 w-60 items-center justify-center bg-green-300">
                <Text className="text-center">초대장 보내기</Text>
              </View>
              <View className="flex items-center justify-center">
                <Text>or</Text>
                <Text>나의 코드 복사</Text>
                <Text className="text-xl font-bold underline">A2SDK3</Text>
              </View>
            </>
          ) : (
            <View className="items-center justify-center">
              <Text className="font-bold">{`가은님,`}</Text>
              <Text className="font-bold">{`가족과 소중한 추억 쌓으러 가볼까요?`}</Text>
            </View>
          )}
        </View>
        <CustomButton>시작하기</CustomButton>
      </View>
    </SafeAreaView>
  );
}
export default Join3;
