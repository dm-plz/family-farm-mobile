import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';

import CustomButton from '@/component/CustomButton';
import SignUpPageHeader from '@/component/sign-up-screen/SignUpPageHeader';

function SignUpInfoInputScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex h-full flex-col justify-between px-10 pb-10">
          <View>
            <SignUpPageHeader currentStep={2} />
            <View>
              <Text className="mt-8 font-bold">
                가족에서 어떤 역할을 담당하고 있나요?
              </Text>
              <Text className="mt-6 font-bold">이름을 입력해 주세요</Text>
            </View>
            <TextInput
              className="mt-4 h-12 w-full rounded-md border-2 border-slate-200 bg-white p-4"
              placeholder="이름이나 닉네임을 입력해 주세요"
            />
            <View>
              <Text className="mt-4 font-bold">역할을 선택해 주세요</Text>
              <View className="mt-2">
                <View className="flex flex-row gap-x-2">
                  <CustomButton twClass="bg-slate-200 w-[45%]">
                    아빠
                  </CustomButton>
                  <CustomButton twClass="bg-slate-200 w-[45%]">
                    엄마
                  </CustomButton>
                </View>
                <View className="flex flex-row gap-x-2">
                  <CustomButton twClass="bg-slate-200 w-[45%]">
                    아들
                  </CustomButton>
                  <CustomButton twClass="bg-slate-200 w-[45%]">딸</CustomButton>
                </View>
              </View>
            </View>

            <View>
              <Text className="mt-4 font-bold">생년월일을 선택해 주세요</Text>
              <TextInput
                className="mt-4 h-12 w-full rounded-md border-2 border-slate-200 bg-white p-4"
                placeholder="YYYY년 MM월 DD일"
              />
            </View>
          </View>
          <View className="flex">
            <CustomButton
              onPress={() => {
                navigation.goBack();
              }}>
              이전
            </CustomButton>
            <CustomButton
              onPress={() => {
                navigation.navigate('SignUpInviteCodeScreen');
              }}>
              다음
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUpInfoInputScreen;
