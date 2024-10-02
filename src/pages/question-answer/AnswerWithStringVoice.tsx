//NOTE: QNAA04

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { routeNames } from '@/constants';
import { QuestionAnswerStackParamList } from '@/navigations/stack/QuestionAnswerStackNavigator';

type AnswerWithStringVoiceScreenProps = NativeStackScreenProps<
  QuestionAnswerStackParamList,
  typeof routeNames.ANSWER_WITH_STRING_VOICE
>;

const AnswerWithStringVoice = ({}: AnswerWithStringVoiceScreenProps) => {
  return (
    <SafeAreaView>
      <View className="h-full px-4">
        <View className="mt-8 h-56 space-y-2">
          <Text className="text-2xl font-bold">지금 이 순간</Text>
          <Text className="text-2xl font-bold">제일 듣고 싶은</Text>
          <Text className="text-2xl font-bold">문장/단어가 무엇인가요?</Text>
          <Text>가족들에게 공유해 보세요</Text>
        </View>
        <View className="flex-1">
          <View className="h-1/2">
            <View className="mb-4 flex-row">
              <View className="border-slate-600 h-14 flex-1 items-center justify-center border-b-2">
                <Text>텍스트</Text>
              </View>
              <View className="border-slate-200 h-14 flex-1 items-center justify-center border-b">
                <Text>음성</Text>
              </View>
            </View>
            <TextInput
              placeholder="편하게 입력해 보세요"
              className="bg-slate-200 rounded-xl p-4"
              multiline={true}
            />
          </View>
        </View>
        <View className="mb-4 justify-end">
          <Pressable className="bg-green-600 flex h-12 flex-col items-center justify-center rounded-2xl">
            <Text className="text-white font-bold">저장하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AnswerWithStringVoice;
