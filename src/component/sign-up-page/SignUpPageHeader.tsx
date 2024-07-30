import React from 'react';
import {Text, View} from 'react-native';

const SignUpPageHeader = ({currentStep}: {currentStep: 1 | 2 | 3}) => {
  return (
    <View className="flex flex-row items-center justify-center w-full h-40">
      <View className="flex items-center justify-center w-20 h-20 bg-transparent border-4 border-green-600 rounded-full">
        <Text className="font-bold text-green-600">1</Text>
        <Text className="mt-2 text-green-600">가족 면접</Text>
      </View>
      <View
        className={`w-10 h-[2px] ${
          currentStep >= 2 ? 'bg-green-600' : 'bg-slate-500'
        }`}
      />
      <View
        className={`flex items-center justify-center border-4 w-20 h-20 bg-transparent ${
          currentStep >= 2 ? ' border-green-600' : 'border-slate-500'
        } rounded-full`}>
        <Text
          className={`font-bold ${
            currentStep >= 2 ? 'text-green-600' : 'text-slate-500'
          }`}>
          2
        </Text>
        <Text
          className={`mt-2 ${
            currentStep >= 2 ? 'text-green-600' : 'text-slate-500'
          }`}>
          정보 입력
        </Text>
      </View>
      <View
        className={`w-10 h-[2px] ${
          currentStep === 3 ? 'bg-green-600' : 'bg-slate-500'
        }`}
      />
      <View
        className={`flex items-center justify-center border-4 w-20 h-20 bg-transparent ${
          currentStep === 3 ? ' border-green-600' : 'border-slate-500'
        } rounded-full`}>
        <Text
          className={`font-bold ${
            currentStep === 3 ? 'text-green-600' : 'text-slate-500'
          }`}>
          3
        </Text>
        <Text
          className={`mt-2 ${
            currentStep === 3 ? 'text-green-600' : 'text-slate-500'
          }`}>
          시작 하기
        </Text>
      </View>
    </View>
  );
};

export default SignUpPageHeader;
