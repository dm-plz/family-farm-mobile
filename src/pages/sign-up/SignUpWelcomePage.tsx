import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';

import SignUpPageHeader from '@/component/sign-up-page/SignUpPageHeader';

function SignUpWelcomePage() {
  return (
    <SafeAreaView>
      <View className="justify-between h-full px-10 pb-10">
        <SignUpPageHeader currentStep={1} />
        <View>
          <Text className="text-2xl font-bold">환영합니다!</Text>
          <Text className="text-2xl font-bold">초대를 받고 오셨나요?</Text>
          <Text className="mt-6 font-bold">
            전달받은 초대 코드를 입력해 주세요.
          </Text>
        </View>
        <TextInput
          className="w-full h-16 p-4 mt-10 bg-white border-2 rounded-md border-slate-200"
          placeholder="코드 8자리를 입력해 주세요"
        />

        <Pressable className="items-center justify-center w-full h-12 p-2 rounded-lg bg-slate-200">
          <Text>입력 완료</Text>
        </Pressable>

        <Pressable className="items-center justify-center w-full h-12 p-2 bg-green-200 rounded-lg">
          <Text>제가 가족중 처음이에요!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default SignUpWelcomePage;
