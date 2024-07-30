import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';

import SignUpPageHeader from '@/component/sign-up-page/SignUpPageHeader';

function SignUpWelcomePage() {
  return (
    <SafeAreaView>
      <View className="h-full justify-between px-10 pb-10">
        <View>
          <SignUpPageHeader currentStep={1} />
          <View>
            <Text className="text-2xl font-bold">환영합니다!</Text>
            <Text className="text-2xl font-bold">초대를 받고 오셨나요?</Text>
            <Text className="mt-4 font-bold">
              전달받은 초대 코드를 입력해 주세요.
            </Text>
          </View>
          <TextInput
            className="mt-4 h-16 w-full rounded-md border-2 border-slate-200 bg-white p-4"
            placeholder="코드 8자리를 입력해 주세요"
          />

          <Pressable className="mt-4 h-12 w-full items-center justify-center rounded-lg bg-slate-200 p-2">
            <Text>입력 완료</Text>
          </Pressable>
        </View>

        <Pressable className="h-12 w-full items-center justify-center rounded-lg bg-green-200 p-2">
          <Text>제가 가족중 처음이에요!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
export default SignUpWelcomePage;
