import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { answerRouteNames, colors } from '@/constants';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AnswerStackNavigatorParams } from '@/navigations/stack/AnswerStackNavigator';
import useNavigationStore from '@/store/stores/navigationStore';

const EMOTIONS = [
  ['😊', '😆', '😘'],
  ['🥲', '😭', '🫥'],
  ['😤', '🥱', '🤕'],
] as const;

type RecordEmotionScreenProps = NativeStackScreenProps<
  AnswerStackNavigatorParams,
  typeof answerRouteNames.RECORD_EMOTION
>;

function RecordEmotionScreen({ navigation }: RecordEmotionScreenProps) {
  const { navigate, goBack } = useNavigationStore();

  useLayoutEffect(() => {
    //NOTE: skip 하고싶은 경우 사용
    // navigation.replace(answerRouteNames.DESCRIPTIVE_ANSWER);
  }, [navigate, navigation]);

  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scroll]}
      left={{
        onPress: () => goBack(navigation),
        icon: (
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={colors.primary[100]}
          />
        ),
      }}>
      <View className="mt-2">
        <TextBold className="text-h1 leading-9">
          오늘의 기분을 기록해 주세요.
        </TextBold>
        <TextRegular className="mt-2 text-gray-400">
          내 기분을 표현할 수 있는 이모티콘을 선택해 주세요.
        </TextRegular>
      </View>
      <View className="mt-10 space-y-3">
        {EMOTIONS.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row justify-between">
            {row.map(emotion => (
              <EmotionSelector
                key={emotion}
                emotion={emotion}
                selected={true}
              />
            ))}
          </View>
        ))}
      </View>
      <View className="mb-2 mt-auto flex-row justify-center space-x-2 px-5">
        <Pressable
          className="flex-grow rounded-xl bg-primary-8 px-9 py-3.5"
          onPress={() =>
            navigate(navigation, answerRouteNames.DESCRIPTIVE_ANSWER)
          }>
          <TextBold className="text-center text-h4 text-primary-100">
            안할래요
          </TextBold>
        </Pressable>
        <Pressable
          className="flex-grow rounded-xl bg-primary-100 px-9 py-3.5"
          onPress={() =>
            navigate(navigation, answerRouteNames.DESCRIPTIVE_ANSWER)
          }>
          <TextBold className="text-center text-h4 text-white">
            결정했어요
          </TextBold>
        </Pressable>
      </View>
    </SafeScreenWithHeader>
  );
}

interface EmotionSelectorProps {
  emotion: (typeof EMOTIONS)[number][number];
  selected: boolean;
}

function EmotionSelector({ emotion, selected }: EmotionSelectorProps) {
  const boxClassName = selected ? 'border-primary-100' : ' border-gray-50';
  const borderClassName = selected ? 'border-primary-100/20' : 'border-gray-50';
  const checkIconTintColor = selected ? colors.primary[100] : colors.gray[50];

  return (
    <View
      className={`relative h-28 w-28 items-center justify-center rounded-xl border ${boxClassName}`}>
      <Image
        source={require('@/assets/img/icon-check-circle.png')}
        resizeMode="contain"
        className="absolute right-2 top-2 h-4 w-4"
        tintColor={checkIconTintColor}
      />
      <View
        className={`h-[52] w-[52] items-center justify-center rounded-full border pt-2 ${borderClassName}`}>
        <TextRegular style={[styles.emotion]}>{emotion}</TextRegular>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  emotion: {
    fontSize: 40,
    lineHeight: 44,
  },
});

export default RecordEmotionScreen;
