import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';

import { colors, routeNames } from '@/constants';
import {
  TextBold,
  TextExtraBold,
  TextLight,
  TextRegular,
  TextSemiBold,
} from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { BottomTabNavigation } from '@/navigations/BottomTabNavigator';

type QuestionListProps = BottomTabScreenProps<
  BottomTabNavigation,
  typeof routeNames.QUESTION_LIST
>;

const QuestionList = ({ navigation }: QuestionListProps) => {
  return (
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
        <View className="mt-1">
          <TextBold className="text-h1">지금까지 질문</TextBold>
          <TextRegular className="mt-2 text-gray-400">
            매일 매일 새로운 질문에 답변을 입력하세요
          </TextRegular>
        </View>
        <View className="mt-10">
          <View className="border-b border-gray-100 pb-4">
            <View className="flex-row items-center">
              <View className="mr-2 rounded-3xl bg-secondary px-2 py-1">
                <TextSemiBold className="text-body4 font-bold text-[#FFFFFF]">
                  Today
                </TextSemiBold>
              </View>
              <TextLight className="text-body3">2024. 08. 18</TextLight>
            </View>
            <View className="mt-2 flex-row">
              <TextExtraBold className="mr-2 text-h4 text-primary-100">
                Q.
              </TextExtraBold>
              <TextSemiBold className="text-h4">
                가장 기억에 남는 추억의 장소 사진을 공유해 볼까요?
              </TextSemiBold>
            </View>
          </View>
          <View className="mt-4 border-b border-gray-100 pb-4">
            <View className="flex-row items-center">
              <TextLight className="text-body3">2024. 08. 17</TextLight>
            </View>
            <View className="mt-2 flex-row">
              <TextExtraBold className="mr-2 text-h4 text-primary-100">
                Q.
              </TextExtraBold>
              <TextSemiBold className="text-h4 text-gray-300">
                지금 이순간 제일 듣고 싶은 문장/단어가 무엇인가요?
              </TextSemiBold>
            </View>
          </View>
          <View className="mt-4 border-b border-gray-100 pb-4">
            <View className="flex-row items-center">
              <TextLight className="text-body3">2024. 08. 19</TextLight>
            </View>
            <View className="mt-2 flex-row">
              <TextExtraBold className="mr-2 text-h4 text-primary-100">
                Q.
              </TextExtraBold>
              <TextSemiBold className="text-h4 text-gray-300">
                요즘 제일 먹고 싶은 음식이 무엇인가요?
              </TextSemiBold>
            </View>
          </View>
        </View>
      </View>
    </SafeScreenWithHeader>
  );
};

export default QuestionList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
});
