import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

import CustomCheckBox from '@/components/CheckBox';
import CustomButton from '@/components/CustomButton';
import StepHeader from '@/components/sign-up/StepHeader';
import { routeNames } from '@/constants';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';

type Join2ScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof routeNames.JOIN2
>;

function Join2({ navigation }: Join2ScreenProps) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex h-full flex-col justify-between px-10 pb-10">
          <View>
            <StepHeader currentStep={2} />
            <View>
              <Text className="mt-8 font-bold">
                가족에서 어떤 역할을 담당하고 있나요?
              </Text>
              <Text className="mt-6 font-bold">이름을 입력해 주세요</Text>
            </View>
            <TextInput
              className="border-slate-200 bg-white mt-4 h-12 w-full rounded-md border-2 p-4"
              placeholder="이름이나 닉네임을 입력해 주세요"
            />
            <Text className="text-sm text-red-400">
              이름이나 닉네임이 입력되지 않았습니다.
            </Text>
            <View>
              <Text className="mt-4 font-bold">역할을 선택해 주세요</Text>
              <View className="mt-2 space-y-2">
                <View className="flex flex-row items-center justify-center space-x-2">
                  <CustomButton twClass="bg-slate-200 w-[45%]">
                    아빠
                  </CustomButton>
                  <CustomButton twClass="bg-slate-200 w-[45%]">
                    엄마
                  </CustomButton>
                </View>
                <View className="flex flex-row items-center justify-center space-x-2">
                  <CustomButton twClass="bg-slate-200 w-[45%]">
                    아들
                  </CustomButton>
                  <CustomButton twClass="bg-slate-200 w-[45%]">딸</CustomButton>
                </View>
                <Text className="text-sm text-red-400">
                  가족 구성원 내 역할이 선택되지 않았습니다.
                </Text>
              </View>
            </View>

            <View>
              <Text className="mt-4 font-bold">생년월일을 선택해 주세요</Text>
              <TextInput
                className="border-slate-200 bg-white mt-4 h-12 w-full rounded-md border-2 p-4"
                placeholder="YYYY년 MM월 DD일"
              />

              <Text className="text-sm text-red-400">
                생년월일이 선택되지 않았습니다.
              </Text>
              <CustomCheckBox twClass="mt-2">음력</CustomCheckBox>
            </View>
          </View>
          <View className="mt-6 flex flex-col space-y-2">
            <CustomButton
              onPress={() => {
                navigation.goBack();
              }}>
              이전
            </CustomButton>
            <CustomButton
              onPress={() => {
                navigation.navigate(routeNames.JOIN3);
              }}>
              다음
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Join2;
