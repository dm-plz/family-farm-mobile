import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { answerRouteNames, colors, defaultRouteNames } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AnswerStackNavigatorParams } from '@/navigations/stack/AnswerStackNavigator';
import useNavigationStore from '@/store/stores/navigationStore';

type DestinationOfOtherNavigator = {
  [defaultRouteNames.FAMILY_ANSWER]: undefined;
};

type DescriptiveAnswerScreenProps = NativeStackScreenProps<
  AnswerStackNavigatorParams & DestinationOfOtherNavigator,
  typeof answerRouteNames.DESCRIPTIVE_ANSWER
>;

//TODO: 오늘의 질문과, 사용자가 답변하는 날짜가 다른 경우, 응원하기 버튼이 출력된다고 함.
//TODO:
/**
  질문이 온 날짜와, 답변하는 날짜가 같다면, "오늘의 기분을 기록해 주세요."로 이동.
  "오늘의 기분을 기록해 주세요." 페이지에서, 등록완료 버튼을 누르면, 질문에서 요구하는 답변 형식에 따라 페이지를 이동시킨다.
  "오늘의 기분을 기록해 주세요." 페이지에서, 안할래요 버튼을 눌러도, 질문에서 요구하는 답변 형식에 따라 페이지를 이동시킨다.
  이동되는 페이지는 "AnswerWithStringVocie" or "AnswerWithImage"다.

  질문이 온 날짜와, 답변하는 날짜가 다른경우, "응원하기 버튼을 띄운다."
  응원하기 버튼에서 "조금 떨려"버튼을 누르면, 아무 반응없이 그냥 꺼진다.
  응원하기 버튼에서 "마음 보내기"버튼을 누르면, 질문에서 요구하는 답변 혁식에 따라 페이지를 이동시킨다.
  이동되는 페이지는 "AnswerWithStringVocie" or "AnswerWithImage"다.

  질문에서 요구하는 답변 형식이 string/voice 일 경우 "AnswerWithStringVoice" 로 이동
  질문에서 요구하는 답변 형식이 image 일 경우 "AnswerWithImage" 로 이동
 */
function DescriptiveAnswerScreen({ navigation }: DescriptiveAnswerScreenProps) {
  const { navigate, goBack } = useNavigationStore();

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
        <TextBold
          className="text-h1 leading-9"
          style={[styles.question]}
          lineBreakStrategyIOS="hangul-word"
          textBreakStrategy="highQuality">
          {`지금 이 순간 제일 듣고 싶은\n문장/단어가 무엇인가요?`}
        </TextBold>
        <TextRegular className="mt-2 text-gray-400">
          가족들에게 공유해 보세요.
        </TextRegular>
      </View>
      <View className="mt-10">
        <View className="w-full flex-row">
          <View className="w-5 border-b border-gray-50" />
          <Pressable className="w-5 flex-grow border-b border-gray-50">
            <TextRegular className="px-5 py-3 text-center">음성</TextRegular>
          </Pressable>
          <Pressable className="w-5 flex-grow border-b-2">
            <TextRegular className="px-5 py-3 text-center">텍스트</TextRegular>
          </Pressable>
          <View className="w-5 border-b border-gray-50" />
        </View>
      </View>
      <CustomInput placeholder="편하게 입력해 보세요" className="mt-5" />
      <View className="mb-2 mt-auto justify-center px-5">
        <Pressable
          className={`flex-grow rounded-xl bg-gray-200 px-9 py-3.5 ${'bg-primary-100'}`}
          onPress={() => {
            navigate(navigation, answerRouteNames.RECORD_EMOTION);
            navigate(navigation, defaultRouteNames.FAMILY_ANSWER);
          }}>
          <TextBold className="text-center text-h4 text-white">
            저장하기
          </TextBold>
        </Pressable>
      </View>
    </SafeScreenWithHeader>
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
  question: {
    flexWrap: 'wrap',
  },
});

export default DescriptiveAnswerScreen;
