import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Platform, Pressable, Text, View } from 'react-native';

import { signUpNavigation } from '@/constants';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';

type OnboardingProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof signUpNavigation.ONBOARDING
>;

function Onboarding({ navigation }: OnboardingProps) {
  const isIOS = Platform.OS === 'ios';

  return (
    <View className="h-full">
      <View className="flex basis-2/3 flex-row items-center justify-center">
        <Image
          source={require('../assets/img/orange.png')}
          className="h-40 w-40"
          resizeMode="contain"
        />
      </View>
      <View className="flex basis-1/3 flex-col px-10">
        <Pressable className="mb-4 w-full bg-yellow-200 px-4 py-6">
          <Text>카카오 로그인</Text>
        </Pressable>
        <RenderLoginButtonByPlatform isIOS={isIOS} />

        {__DEV__ && (
          <Pressable
            className="mt-4 w-full bg-green-200 px-4 py-6"
            onPress={() => {
              navigation.navigate(signUpNavigation.JOIN_1);
            }}>
            {/*TODO:로그인 로직 구현 완료 이후 버튼 로직 수정  */}
            <Text>Join 화면 진입</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

function RenderLoginButtonByPlatform({ isIOS }: { isIOS: boolean }) {
  return isIOS ? (
    <Pressable className="w-full bg-blue-200 px-4 py-6">
      <Text>IOS</Text>
    </Pressable>
  ) : (
    <Pressable className="w-full bg-green-200 px-4 py-6">
      <Text>Android</Text>
    </Pressable>
  );
}

export default Onboarding;
