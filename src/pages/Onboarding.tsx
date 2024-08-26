import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  NativeModules,
  Image,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';

import { signUpNavigation } from '@/constants';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';
import { signInWithGoogle } from '@/utils/oauth';
type OnboardingProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof signUpNavigation.ONBOARDING
>;

//XXX: 배포까지 완료된 후에 Firestore를 통한 구글 로그인 방식 제거해야 함
//TODO: ios, android kakao sign in 에러 처리를 동일하게 할 수 있도록 수정 필요
const { KakaoLoginModule, AppleLoginModule } = NativeModules;

function Onboarding({ navigation }: OnboardingProps) {
  const handleKakaoSignIn = () => {
    KakaoLoginModule.signInWithKakao()
      .then((token: any) => {
        console.log(token);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const { idToken } = await signInWithGoogle();
      console.log(idToken ?? 'idToken is null');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const { idToken }: { idToken: string } =
        await AppleLoginModule.loginWithApple();
      console.log('Apple Login Success:', idToken);
    } catch (error) {
      console.error('Apple Login Failed:', error);
    }
  };

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
        <Pressable
          className="mb-4 w-full bg-yellow-200 px-4 py-6"
          onPress={handleKakaoSignIn}>
          <Text>카카오 로그인</Text>
        </Pressable>
        <Pressable
          className="mb-4 w-full bg-green-200 px-4 py-6"
          onPress={handleGoogleSignIn}>
          <Text>구글 로그인</Text>
        </Pressable>
        {Platform.OS === 'ios' && (
          <Pressable
            className="w-full bg-blue-200 px-4 py-6"
            onPress={handleAppleSignIn}>
            <Text>IOS</Text>
          </Pressable>
        )}

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

export default Onboarding;
