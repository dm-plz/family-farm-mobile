import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

import MyIcon from '@/components/question-answer/MyIcon';
import { QustionAnswerNavigation } from '@/constants';
import { QustionAnswerStackParamList } from '@/navigations/stack/QustionAnswerStackNavigator';
import useDayjs from '@/util/dayjs';

type WriteAnswerScreenProps = NativeStackScreenProps<
  QustionAnswerStackParamList,
  typeof QustionAnswerNavigation.WRITE_ANSWER
>;

// BUG: Sending 'onAnimatedValueUpdate' 해결해야함.
// NOTE: 인증기능 구현되면, (나) 기능에 로직 추가해야함.

const WriteAnswer = ({ navigation, route }: WriteAnswerScreenProps) => {
  const [QuestionItem] = useState(route.params);

  return (
    <SafeAreaView
      style={{ height: Dimensions.get('window').height }}
      className="mx-2">
      <MyIcon groupRole={'daughter'} />
      <View className="h-full">
        <View className="mb-[40]">
          {/* BUG:  break-words 작동 안함. 해결해야함.*/}
          <Text className="w-1/2 text-2xl font-bold leading-9">
            {QuestionItem.question}
          </Text>
          <Text className="mt-4 text-[#666666]">
            가족들의 답변을 확인해 보세요
          </Text>
        </View>

        <FlatList
          data={answerItem}
          renderItem={({ item }: { item: answerItemProps }) => (
            <RenderAnswer item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default WriteAnswer;

interface answerItemProps {
  nickname: string;
  groupRole: string;
  emoji: string | null;
  content: string | null;
  createAt: string;
  id: string;
}

const answerItem: answerItemProps[] = [
  {
    nickname: '신가은',
    groupRole: 'Daughter',
    emoji: null,
    content: null,
    createAt: '2024-08-20T10:01:10',
    id: '1',
  },
  {
    nickname: '정지원',
    groupRole: 'SON',
    emoji: 'U+1F600',
    content: '사랑합니다!',
    createAt: '2024-09-02T10:01:10',
    id: '2',
  },
  {
    nickname: '박시현',
    groupRole: 'FATHER',
    emoji: null,
    content: '케이크 먹고 싶어요',
    createAt: '2024-09-02T10:01:10',
    id: '3',
  },
];

interface RenderAnswerProps {
  item: answerItemProps;
  navigation: WriteAnswerScreenProps['navigation'];
}

const RenderAnswer = ({ item, navigation }: RenderAnswerProps) => {
  const today = useDayjs('2024-08-20').format('YYYY-MM-DD');

  const answerHandler = (createAt: string) => {
    const isToday = today === createAt.slice(0, 10);

    if (isToday) {
      // 오늘의 기분으로
      navigation.navigate('');
    } else {
      //
      navigation.navigate('');
    }
  };

  return (
    <View className="justify-center border-b border-[#F7F7F7] py-4">
      <View className="flex-row">
        <View className="ml-2 mr-4 items-center justify-center">
          <MyIcon groupRole={item.groupRole} />
        </View>
        <View className="space-y-2">
          <View className="flex-row space-x-1">
            <Text className="text-[#878C90]">{item.groupRole[0]}</Text>
            {item.groupRole === 'Daughter' && (
              <Text className="text-[#1BB876]">(나)</Text>
            )}
          </View>
          <Text className="font-bold">{item.nickname}</Text>
          {item.content === null ? (
            <Pressable
              className="h-[36] w-[120] items-center justify-center rounded-full bg-[#1BB876]"
              onPress={() => {
                answerHandler(item.createAt);
              }}>
              <Text className="font-bold text-white">답변하기</Text>
            </Pressable>
          ) : (
            <Text>{item.content}</Text>
          )}
        </View>
      </View>
    </View>
  );
};
