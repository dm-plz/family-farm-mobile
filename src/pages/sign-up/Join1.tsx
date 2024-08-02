import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import CustomButton from '@/components/CustomButton';
import SignUpPageHeader from '@/components/sign-up-screen/SignUpPageHeader';
import {signUpNavigation} from '@/constants';
import {SignUpStackParamList} from '@/navigations/stack/SignUpStackNavigator';

type SignUpWelcomScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof signUpNavigation.JOIN_1
>;

function Join1({navigation}: SignUpWelcomScreenProps) {
  const [activeBorder, setActiveBorder] = useState(false);

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
            className={`mt-4 h-16 w-full rounded-md border-2 bg-white p-4 ${activeBorder ? 'border-violet-300' : 'border-slate-200'}`}
            placeholder="코드 8자리를 입력해 주세요"
            onFocus={() => {
              setActiveBorder(true);
            }}
            onBlur={() => setActiveBorder(false)}
          />
          <Text className="text-sm text-red-400">
            코드가 조회되지 않습니다. 다시 확인해 주세요.
          </Text>

          <CustomButton twClass="mt-2">입력완료</CustomButton>
        </View>

        <CustomButton
          twClass="bg-sky-300"
          onPress={() => navigation.navigate(signUpNavigation.JOIN_2)}>
          제가 가족중 처음이에요!
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
export default Join1;
