import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

import MainHeader from '@/components/my/MainHeader';

const questionLists = [
  {
    questionHistoryId: 1,
    question: '요즘 제일 먹고 싶은 음식이 무엇인가요?',
    key: uuid.v4() as string,
  },
  {
    questionHistoryId: 2,
    question: '지금 이 순간 제일 듣고 싶은 말이 무엇 인가요?',
    key: uuid.v4() as string,
  },
];

interface ItemProps {
  questionHistoryId: number;
  question: string;
}

const Item = ({ questionHistoryId, question }: ItemProps) => (
  <Pressable className="mt-8 flex-row">
    <Text className="mr-2">{questionHistoryId}</Text>
    <Text>{question}</Text>
  </Pressable>
);

const QuestionList = () => {
  return (
    <SafeAreaView className="bg-green-100">
      <View className="mx-2 h-full">
        <MainHeader iconText="Save Icon" />

        <ScrollView horizontal={true}>
          <FlatList
            data={questionLists}
            renderItem={({ item }) => (
              <Item
                questionHistoryId={item.questionHistoryId}
                question={item.question}
              />
            )}
            keyExtractor={item => item.key}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default QuestionList;
