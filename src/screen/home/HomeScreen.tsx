import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { answerRouteNames, colors, defaultRouteNames } from '@/constants';
import GradientBackground from '@/entities/background/GradientBackground';
import { TextBold, TextRegular, TextSemiBold } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { DefaultTabNavigation } from '@/navigations/DefaultTabNavigator';
import { useTodayQuestionQuery } from '@/store/queries/question/useTodayQuestionQuery';
import useNavigationStore from '@/store/stores/navigationStore';
import { Question } from '@/types';

type HomeScreenProps = BottomTabScreenProps<
  DefaultTabNavigation,
  typeof defaultRouteNames.HOME
>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { navigate } = useNavigationStore();
  const { data, isSuccess } = useTodayQuestionQuery();
  const [hideCard, setHideCard] = useState(false);

  return (
    <GradientBackground>
      <SafeScreenWithHeader
        safeAreaStyle={styles.safeArea}
        scrollViewStyle={styles.scroll}
        right={{
          onPress: () => navigate(navigation, defaultRouteNames.ALARM),
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
        {isSuccess && !hideCard && (
          <SuggestionCard
            isAnswered={data.isAnswered}
            navigation={navigation}
            question={data.content}
            onClose={() => {
              setHideCard(true);
            }}
          />
        )}
      </SafeScreenWithHeader>
    </GradientBackground>
  );
}

interface SuggestionCardProps {
  isAnswered: boolean;
  navigation: BottomTabNavigationProp<
    DefaultTabNavigation,
    typeof defaultRouteNames.HOME,
    undefined
  >;
  question: Question['content'];
  onClose: () => void;
}

function SuggestionCard({
  isAnswered,
  navigation,
  question,
  onClose,
}: SuggestionCardProps) {
  const { navigate } = useNavigationStore();

  const type = isAnswered ? '답변 완료' : '오늘 하루 질문';
  const content = isAnswered ? '우리 가족들의 답변이 궁금하다면?' : question;
  const actionText = isAnswered ? '보러가기' : '답변하기';
  const destination = isAnswered
    ? defaultRouteNames.FAMILY_ANSWER
    : answerRouteNames.ANSWER_NAVIGATOR_NAME;
  return (
    <View className="absolute bottom-5 z-10" style={[styles.bottomCard]}>
      <View className="relative rounded-3xl border border-primary-100/30 bg-white/90 py-4">
        <Pressable onPress={onClose} className="absolute right-3 top-3 z-10">
          <Image
            source={require('@/assets/img/icon-x.png')}
            resizeMode="contain"
            className="h-4 w-4"
            tintColor={colors.gray[300]}
          />
        </Pressable>
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
            onPress={() => navigate(navigation, destination)}>
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
