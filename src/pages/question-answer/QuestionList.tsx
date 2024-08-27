//NOTE: QNAA-01

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import MyIcon from '@/components/question-answer/MyIcon';
import { QuestionAnswerNavigation } from '@/constants';
import { QuestionAnswerStackParamList } from '@/navigations/stack/QuestionAnswerStackNavigator';
import dayjs from '@/util/dayjs';

type QuestionListScreenProps = NativeStackScreenProps<
  QuestionAnswerStackParamList,
  typeof QuestionAnswerNavigation.QUESTION_LIST
>;

const QuestionList = ({ navigation }: QuestionListScreenProps) => {
  return (
    <SafeAreaView style={{ height: Dimensions.get('window').height }}>
      <MyIcon groupRole={'daughter'} />
      <View className="mx-[21] h-full">
        <View className="flex-1">
          <Text className="text-2xl font-bold">지금까지 질문</Text>
          <Text className="mt-5 text-[#666666]">
            매일 매일 새로운 질문에 답변을 입력하세요
          </Text>
        </View>

        <FlatList
          className="flex-[8]"
          data={sortItemDescending(questionItem)}
          renderItem={({ item }: { item: QuestionItemProps }) => (
            <RenderQusetion item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.questionHistoryId.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionList;

interface RenderQusetionProps {
  item: QuestionItemProps;
  navigation: QuestionListScreenProps['navigation'];
}

const RenderQusetion = ({ item, navigation }: RenderQusetionProps) => {
  const today = dayjs('2024-08-20').format('YYYY-MM-DD');
  const isTodayQuestion = today === item.date;

  return (
    <Pressable
      className="mt-2 border-b border-[#F7F7F7] py-2"
      onPress={() => {
        navigation.navigate(QuestionAnswerNavigation.VIEW_ANSWER, item);
      }}>
      <View className="h-[40] w-[114] flex-row items-center justify-start">
        {isTodayQuestion && (
          <View className="mr-2 rounded-full bg-[#FF2B64] p-[4px]">
            <Text className="text-[10px] font-bold text-[#FFFFFF]">Today</Text>
          </View>
        )}
        <Text className="text-[11px] text-[#878C90]">{item.date}</Text>
      </View>
      <View className="flex-row">
        <Text className="mr-2 font-bold text-[#1BB874]">Q.</Text>
        <Text className={isTodayQuestion ? 'font-bold' : 'text-[#999999]'}>
          {item.question}
        </Text>
      </View>
    </Pressable>
  );
};

export interface QuestionItemProps {
  questionHistoryId: number;
  question: string;
  date: string;
}

const questionItem: QuestionItemProps[] = [
  {
    questionHistoryId: 1,
    question: '요즘 제일 먹고 싶은 음식이 무엇인가요?',
    date: '2024-08-10',
  },
  {
    questionHistoryId: 2,
    question: '지금 이 순간 제일 듣고 싶은 말이 무엇 인가요?',
    date: '2024-08-13',
  },
  {
    questionHistoryId: 3,
    question: '가장 기억에 남는 추억의 장소 사진을 공유해 볼까요?',
    date: '2024-08-20',
  },
];

const sortItemDescending = (arry: QuestionItemProps[]) => {
  return arry.sort((a, b) => b.questionHistoryId - a.questionHistoryId);
};
