import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { answerRouteNames, colors, defaultRouteNames } from '@/constants';
import GradientBackground from '@/entities/background/GradientBackground';
import { TextBold, TextRegular, TextSemiBold } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { DefaultTabNavigation } from '@/navigations/DefaultTabNavigator';

type HomeScreenProps = BottomTabScreenProps<
  DefaultTabNavigation,
  typeof defaultRouteNames.HOME
>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <GradientBackground>
      <SafeScreenWithHeader
        safeAreaStyle={styles.safeArea}
        scrollViewStyle={styles.scroll}
        right={{
          onPress: () => navigation.navigate(defaultRouteNames.ALARM),
          icon: (
            <Image
              source={require('@/assets/img/icon-bell.png')}
              resizeMode="contain"
              className="h-5 w-5"
              tintColor={colors.primary[100]}
            />
          ),
          showBadge: true,
        }}>
        <View className="px-5">
          <View className="flex-row items-center">
            <TextRegular>안녕하세요&nbsp;</TextRegular>
            <TextBold className="text-primary-100">가은님</TextBold>
          </View>
          <View className="mt-2">
            <TextSemiBold className="text-h1 leading-8">
              오늘도 가족들과
            </TextSemiBold>
            <TextSemiBold className="text-h1 leading-8">
              소통해 보세요.
            </TextSemiBold>
          </View>
        </View>
        <View className="mt-[30]">
          <Image
            source={require('@/assets/img/symbol-character.png')}
            resizeMode="contain"
            className="mx-auto h-[348] w-[224]"
          />
        </View>
        <SuggestionCard hasAnsweredToday={false} navigation={navigation} />
      </SafeScreenWithHeader>
    </GradientBackground>
  );
}

interface SuggestionCardProps {
  hasAnsweredToday: boolean;
  navigation: BottomTabNavigationProp<
    DefaultTabNavigation,
    typeof defaultRouteNames.HOME,
    undefined
  >;
}

function SuggestionCard({ hasAnsweredToday, navigation }: SuggestionCardProps) {
  const type = hasAnsweredToday ? '답변 완료' : '오늘 하루 질문';
  const content = hasAnsweredToday
    ? '우리 가족들의 답변이 궁금하다면?'
    : '지금 이 순간 제일 듣고 싶은 단어는?';
  const actionText = hasAnsweredToday ? '보러가기' : '답변하기';
  const destination = hasAnsweredToday
    ? defaultRouteNames.FAMILY_ANSWER
    : answerRouteNames.NAVIGATOR_NAME;
  return (
    <View className="absolute bottom-5 z-10" style={[styles.bottomCard]}>
      <View className="relative rounded-3xl border border-primary-100/30 bg-white/90 py-4">
        <Image
          source={require('@/assets/img/icon-x.png')}
          resizeMode="contain"
          className="absolute right-3 top-3 h-4 w-4"
          tintColor={colors.gray[300]}
        />
        <TextBold className="text-center text-body3 leading-3 text-primary-100">
          {type}
        </TextBold>
        <View className="mt-2">
          <TextSemiBold
            className="text-center text-h4"
            lineBreakStrategyIOS="hangul-word"
            textBreakStrategy="highQuality">
            {content}
          </TextSemiBold>
          <Pressable
            className="mx-auto mt-3 w-32 rounded-3xl bg-primary-100 px-10 py-3"
            onPress={() => navigation.navigate(destination)}>
            <TextBold className="text-center text-body3 leading-3 text-white">
              {actionText}
            </TextBold>
          </Pressable>
        </View>
      </View>
    </View>
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
