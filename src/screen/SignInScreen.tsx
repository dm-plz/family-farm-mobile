import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import useAuth from '@/business/hooks/useAuth';
import { colors } from '@/constants';
import { TextMedium, TextSemiBold } from '@/entities/fonts';
import { isIOS } from '@/utils/platform';

function SignInScreen() {
  const { authorize } = useAuth();

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
              onPress={() => authorize('google')}>
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
              onPress={() => authorize('kakao')}>
              <Image
                source={require('@/assets/img/kakao-logo.png')}
                className="h-5 w-5"
              />
              <TextSemiBold className="mx-auto">
                Kakao 계정으로 로그인
              </TextSemiBold>
            </Pressable>
            {isIOS() && (
              <Pressable
                className="flex h-11 flex-row items-center rounded-lg px-4"
                onPress={() => authorize('apple')}
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
