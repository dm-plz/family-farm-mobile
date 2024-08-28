// NOTE: QNAA03
// NOTE: QNAA04-T*, QNAA03-T*는 화면이 같음.
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import { QuestionAnswerNavigation } from '@/constants';
import { QuestionAnswerStackParamList } from '@/navigations/stack/QuestionAnswerStackNavigator';

type AnswerWithFeelingScreenProps = NativeStackScreenProps<
  QuestionAnswerStackParamList,
  typeof QuestionAnswerNavigation.ANSWER_WITH_FEELING
>;

const AnswerWithFeeling = ({ navigation }: AnswerWithFeelingScreenProps) => {
  const navigateHandler = () => {
    //  답변에서 요구하는 형식에따라 분기 처리해야함
    navigation.navigate(QuestionAnswerNavigation.ANSWER_WITH_StringVoice);
    //navigation.navigate(QustionAnswerNavigation.ANSWER_WITH_IMAGE);
  };

  return (
    <SafeAreaView>
      <View className="h-full px-4">
        <View>
          <View className="mb-8 mt-4 space-y-4">
            <Text className="text-xl font-bold">
              오늘의 기분을 기록해 주세요.
            </Text>
            <Text className="text-[#666666]">
              내 기분을 표현할 수 있는 이모티콘을 선택해 주세요.
            </Text>
          </View>
          <View className="items-center">
            {/* FIXME: 이모지 탈모 해결해야함 */}
            {/* NOTE: 컴포넌트 만들어야함 */}
            {/* NOTE: GRID 없어서, 시간관계상 이걸로 구현함 */}
            <EmojiContainer />
            <EmojiContainer />
            <EmojiContainer />
          </View>
        </View>
        <View className="mb-6 flex-1 flex-row items-end space-x-4">
          <Pressable className="h-[48] flex-1 items-center justify-center rounded-xl bg-[#1BB876]/[.08]">
            <Text className="font-bold text-[#1BB876]">안할래요</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigateHandler();
            }}
            className="h-[48] flex-1 items-center justify-center rounded-xl bg-[#1BB876]">
            <Text className="font-bold text-white">결정했어요</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const EmojiContainer = () => {
  return (
    <View className="mb-4 flex-row space-x-4">
      <View className="h-[104] w-[104] flex-row items-center justify-center bg-red-200">
        <Text className="text-5xl">😃</Text>
      </View>
      <View className="h-[104] w-[104] flex-row items-center justify-center bg-red-200">
        <Text className="text-5xl">😃</Text>
      </View>
      <View className="h-[104] w-[104] flex-row items-center justify-center bg-red-200">
        <Text className="text-5xl">😃</Text>
      </View>
    </View>
  );
};

export default AnswerWithFeeling;
