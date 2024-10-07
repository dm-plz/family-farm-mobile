import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { answerRouteNames, colors, defaultRouteNames } from '@/constants';
import {
  TextBold,
  TextLight,
  TextRegular,
  TextSemiBold,
} from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { DefaultTabNavigation } from '@/navigations/DefaultTabNavigator';

type DestinationOfOtherNavigator = {
  [answerRouteNames.DESCRIPTIVE_ANSWER]: undefined;
};

type FamilyAnswerScreenProps = BottomTabScreenProps<
  DefaultTabNavigation & DestinationOfOtherNavigator,
  typeof defaultRouteNames.FAMILY_ANSWER
>;

const FamilyAnswerScreen = ({ navigation }: FamilyAnswerScreenProps) => {
  return (
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
        <View className="mt-1">
          <TextLight className="text-h1 leading-9">가장 기억에 남는</TextLight>
          <TextBold className="text-h1 leading-9">추억의 장소 사진을</TextBold>
          <TextBold className="text-h1 leading-9">공유해 볼까요?</TextBold>
          <TextRegular className="mt-2 text-gray-400">
            가족들의 답변을 확인해 보세요
          </TextRegular>
        </View>
        <View className="mt-10">
          <View className="border-b border-gray-25 pb-4">
            <TextLight className="text-body3">딸</TextLight>
            <TextSemiBold className="mt-1">가은</TextSemiBold>
            <TextLight className="mt-3 text-body2 leading-4">
              아직 답변하지 않았아요
            </TextLight>
          </View>
          <View className="mt-4 border-b border-gray-25 pb-4">
            <View className="flex-row">
              <TextLight className="text-body3">엄마</TextLight>
              <View className="ml-1 rounded-xl bg-primary-8 px-2 py-1">
                <TextSemiBold className="text-body4 leading-3 text-primary-100">
                  나
                </TextSemiBold>
              </View>
            </View>
            <TextSemiBold className="mt-1">수</TextSemiBold>
            <Pressable
              className="mt-1 self-start rounded-3xl bg-primary-100 px-10 py-3"
              onPress={() =>
                navigation.navigate(answerRouteNames.DESCRIPTIVE_ANSWER)
              }>
              <TextBold className="text-body3 leading-3 text-white">
                답변하기
              </TextBold>
            </Pressable>
          </View>
          <View className="mt-4 border-b border-gray-25 pb-4">
            <TextLight className="text-body3">아빠</TextLight>
            <TextSemiBold className="mt-1">규</TextSemiBold>
            <TextLight className="mt-3 text-body2 leading-4">
              아직 답변하지 않았아요
            </TextLight>
          </View>
        </View>
      </View>
    </SafeScreenWithHeader>
  );
};

export default FamilyAnswerScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
  },
});
