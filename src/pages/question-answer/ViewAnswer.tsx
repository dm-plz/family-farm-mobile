// NOTE: QNAA02
// NOTE: 기획과 디자인, BE로직이 확정되면 재작업 해야함.

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

import MyIcon from '@/components/question-answer/MyIcon';
import { QustionAnswerNavigation } from '@/constants';
import { QustionAnswerStackParamList } from '@/navigations/stack/QustionAnswerStackNavigator';

type ViewAnswerScreenProps = NativeStackScreenProps<
  QustionAnswerStackParamList,
  typeof QustionAnswerNavigation.VIEW_ANSWER
>;

// BUG: Sending 'onAnimatedValueUpdate' 해결해야함. (네비게이션 로직 확정 할 수 있을때 작업예정 (be))
// NOTE: 인증기능 구현되면, (나) 기능에 로직 추가해야함.

const ViewAnswer = ({ navigation, route }: ViewAnswerScreenProps) => {
  const [QuestionItem] = useState(route.params);

  return (
    <SafeAreaView
      style={{ height: Dimensions.get('window').height }}
      className="mx-2">
      <MyIcon groupRole={'daughter'} />
      <View className="h-full">
        <View className="mb-[40]">
          {/* BUG:  break-words 속성 안먹음. 해결해야함.*/}
          <Text className="w-1/2 text-2xl font-bold leading-9">
            {QuestionItem.question}
          </Text>
          <Text className="mt-4 text-[#666666]">
            가족들의 답변을 확인해 보세요
          </Text>
        </View>

        <FlatList
          data={answerItem}
          renderItem={({ item }: { item: AnswerItemProps }) => (
            <RenderAnswer item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewAnswer;

export interface AnswerItemProps {
  nickname: string;
  groupRole: string;
  emoji: string | null;
  content: string | null;
  createAt: string;
  id: string;
}

const answerItem: AnswerItemProps[] = [
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
  item: AnswerItemProps;
  navigation: ViewAnswerScreenProps['navigation'];
}

const RenderAnswer = ({ item, navigation }: RenderAnswerProps) => {
  // const writeAnswerButtonHandler = path => {
  //   const isToday = true;

  //질문이 온 날짜와, 답변하는 날짜가 같다면, "오늘의 기분을 기록해 주세요."로 이동.
  //"오늘의 기분을 기록해 주세요." 페이지에서, 등록완료 버튼을 누르면, 질문에서 요구하는 답변 형식에 따라 페이지를 이동시킨다.
  //"오늘의 기분을 기록해 주세요." 페이지에서, 안할래요 버튼을 눌러도, 질문에서 요구하는 답변 형식에 따라 페이지를 이동시킨다.
  //이동되는 페이지는 "AnswerWithStringVocie" or "AnswerWithImage"다.

  //질문이 온 날짜와, 답변하는 날짜가 다른경우, "응원하기 버튼을 띄운다."
  //응원하기 버튼에서 "조금 떨려"버튼을 누르면, 아무 반응없이 그냥 꺼진다.
  //응원하기 버튼에서 "마음 보내기"버튼을 누르면, 질문에서 요구하는 답변 혁식에 따라 페이지를 이동시킨다.
  //이동되는 페이지는 "AnswerWithStringVocie" or "AnswerWithImage"다.

  //질문에서 요구하는 답변 형식이 string/voice 일 경우 "AnswerWithStringVoice" 로 이동
  //질문에서 요구하는 답변 형식이 image 일 경우 "AnswerWithImage" 로 이동

  // if (isToday) {

  //     return navigation.navigate(path)}
  // } else if ()
  // };

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
              onPress={() =>
                navigation.navigate(
                  QustionAnswerNavigation.ANSWER_WITH_FEELING,
                  item,
                )
              }>
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

// 디자인 파일 나오면 반영 예정
// 오늘의 질문과, 사용자가 답변하는 날짜가 다른 경우, 응원하기 버튼이 출력된다고 함.

// 응원하기 버튼 함수
// const showCheerButton = () => {
//   const today = useDayjs('2024-08-21').format('YYYY-MM-DD');
//   const isToday = today === questionItem.createAt.slice(0, 10);

//   useEffect(() => {
//     if (!isToday) {
//       Alert.alert(
//         `우리 가족
//       항상 사랑하고 응원해`,
//         '',
//         [
//           {
//             text: '조금 떨려',
//             onPress: () => {},
//           },
//           { text: '마음 보내기', onPress: () => {} },
//         ],
//       );
//     }
//   }, [isToday]);
// }
