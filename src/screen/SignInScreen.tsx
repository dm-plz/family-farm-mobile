import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageBackground,
  NativeModules,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { authRouteNames, colors } from '@/constants';
import { TextMedium, TextSemiBold } from '@/entities/fonts';
import { AuthStackParams } from '@/navigations/stack/AuthStackNavigator';
import useNavigationStore from '@/store/stores/navigationStore';
import { signInWithGoogle } from '@/utils/oauth';

type SignInScreenProps = NativeStackScreenProps<
  AuthStackParams,
  typeof authRouteNames.SIGN_IN
>;

//XXX: 배포까지 완료된 후에 Firestore를 통한 구글 로그인 방식 제거해야 함
//TODO: ios, android kakao sign in 에러 처리를 동일하게 할 수 있도록 수정 필요
const { KakaoLoginModule, AppleLoginModule } = NativeModules;

function SignInScreen({ navigation }: SignInScreenProps) {
  const { navigate } = useNavigationStore();

  function handleSignIn() {
    navigate(navigation, authRouteNames.JOIN1);
  }
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
    <ImageBackground
      source={require('@/assets/img/launch-screen-background.png')}
      className="relative h-full">
      <View className="absolute left-0 top-0 h-full w-full bg-black/20" />
      <SafeAreaView className="h-full pb-11">
        <Image
          source={require('@/assets/img/launch-screen-title.png')}
          className="mx-auto"
          style={[styles.titleImage]}
        />
        <View className="mx-auto mt-auto w-80">
          <TextMedium className="text-center text-white opacity-60">
            Sign ip with Social Networkd
          </TextMedium>
          <View className="my-4">
            <Pressable
              className="flex h-11 flex-row items-center rounded-lg bg-white px-4"
              onPress={() => handleSignIn()}>
              <Image
                source={require('@/assets/img/google-logo.png')}
                className="h-5 w-5"
              />
              <TextSemiBold className="mx-auto">
                Google 계정으로 로그인
              </TextSemiBold>
            </Pressable>
            <Pressable
              className="my-3 flex h-11 flex-row items-center rounded-lg px-4"
              style={[styles.kakaoLoginButton]}
              onPress={() => handleSignIn()}>
              <Image
                source={require('@/assets/img/kakao-logo.png')}
                className="h-5 w-5"
              />
              <TextSemiBold className="mx-auto">
                Kakao 계정으로 로그인
              </TextSemiBold>
            </Pressable>
            {Platform.OS === 'ios' && (
              <Pressable
                className="flex h-11 flex-row items-center rounded-lg px-4"
                onPress={() => handleSignIn()}
                style={[styles.appleLoginButton]}>
                <Image
                  source={require('@/assets/img/apple-logo.png')}
                  className="h-5 w-5"
                  style={[]}
                />
                <TextSemiBold className="mx-auto text-white">
                  Apple 계정으로 로그인
                </TextSemiBold>
              </Pressable>
            )}
          </View>
          <View className="flex flex-row justify-center">
            <TextMedium className="text-white">이용약관</TextMedium>
            <TextMedium className="mx-1 text-white opacity-40">|</TextMedium>
            <TextMedium className="text-white">개인정보처리방침</TextMedium>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleImage: {
    width: 184.5,
    height: 49.5,
    marginTop: 120,
  },
  kakaoLoginButton: {
    backgroundColor: colors.kakaoColor,
  },
  appleLoginButton: {
    backgroundColor: colors.appleColor,
  },
});

export default SignInScreen;
