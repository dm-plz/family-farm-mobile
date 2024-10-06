import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors } from '@/constants';
import GradientBackground from '@/entities/background/GradientBackground';
import { TextBold, TextRegular, TextSemiBold } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';

export default function Main() {
  return (
    <GradientBackground>
      <SafeScreenWithHeader
        safeAreaStyle={styles.safeArea}
        scrollViewStyle={styles.scroll}
        rightButton={{
          onPress: () => {},
          icon: (
            <View className="relative">
              <View className="absolute -top-0.5 right-0 h-1.5 w-1.5 rounded-full bg-secondary" />
              <Image
                source={require('@/assets/img/icon-bell.png')}
                resizeMode="contain"
                className="h-5 w-5"
                tintColor={colors.primary[100]}
              />
            </View>
          ),
        }}>
        <View className="px-5">
          <View className="flex-row items-center">
            <TextRegular>안녕하세요&nbsp;</TextRegular>
            <TextBold className="text-primary-100">가은님</TextBold>
          </View>
          <View className="mt-2">
            <TextSemiBold className="text-h1">오늘도 가족들과</TextSemiBold>
            <TextSemiBold className="text-h1">소통해 보세요.</TextSemiBold>
          </View>
        </View>
        <View className="mt-8">
          <Image
            source={require('@/assets/img/symbol-character.png')}
            resizeMode="contain"
            className="mx-auto h-[348] w-[224]"
          />
        </View>
        <View className="absolute bottom-5 z-10" style={[styles.bottomCard]}>
          <View className="relative rounded-3xl border border-primary-100/30 bg-white/90 py-4">
            <Image
              source={require('@/assets/img/icon-x.png')}
              resizeMode="contain"
              className="absolute right-3 top-3 h-4 w-4"
              tintColor={colors.gray[300]}
            />
            <TextBold className="text-center text-body3 text-primary-100">
              오늘 하루 질문
            </TextBold>
            <View className="mt-2">
              <TextSemiBold className="text-center text-h4">
                지금 이 순간
              </TextSemiBold>
              <TextSemiBold className="text-center text-h4">
                제일 듣고 싶은 단어는?
              </TextSemiBold>
              <Pressable
                className="mx-auto mt-3 w-32 rounded-3xl bg-primary-100 px-10 py-3"
                onPress={() => {}}>
                <TextBold className="text-center text-body3 text-white">
                  답변하기
                </TextBold>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeScreenWithHeader>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  bottomCard: {
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
  },
});
