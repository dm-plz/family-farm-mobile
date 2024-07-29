import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';

import SignUpPageHeader from '@/component/sign-up-page/SignUpPageHeader';
import Button from '@/component/Button';

function SinUpInformationPage() {
  return (
    <SafeAreaView>
      <View className="justify-between h-full px-10 pb-10">
        <View>
          <SignUpPageHeader currentStep={2} />
          <View>
            <Text className="text-lg font-bold">
              가족에서 어떤 역할을 담당하고 있나요?
            </Text>
            <Text className="mt-6 font-bold">이름을 입력해 주세요</Text>
          </View>
          <TextInput
            className="w-full h-16 p-4 mt-4 bg-white border-2 rounded-md border-slate-200"
            placeholder="이름이나 닉네임을 입력해 주세요"
          />
          <View>
            <Text className="mt-10 font-bold">역할을 선택해 주세요</Text>
            <View>
              <View className="flex flex-row">
                <Button className="2123213">아빠</Button>
                <Button>엄마</Button>
              </View>
              <View className="flex flex-row">
                <Button>아들</Button>
                <Button>딸</Button>
              </View>
            </View>
          </View>
        </View>
        <View className="flex h-24">
          <Button>이전</Button>
          <Button>다음</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default SinUpInformationPage;
