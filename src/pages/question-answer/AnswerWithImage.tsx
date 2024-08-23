//NOTE: QNAA04
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import { QustionAnswerNavigation } from '@/constants';
import { QustionAnswerStackParamList } from '@/navigations/stack/QustionAnswerStackNavigator';

type AnswerWithImageScreenProps = NativeStackScreenProps<
  QustionAnswerStackParamList,
  typeof QustionAnswerNavigation.ANSWER_WITH_IMAGE
>;

const AnswerWithImage = ({}: AnswerWithImageScreenProps) => {
  return (
    <SafeAreaView>
      <View className="h-full px-4">
        <View className="mt-8 h-56 space-y-2">
          <Text>가장 기억에 남는</Text>
          <Text className="text-2xl font-bold">추억의 장소 사진을</Text>
          <Text className="text-2xl font-bold">공유해 볼까요?</Text>
          <Text>가족들에게 공유해 보세요</Text>
        </View>
        <View className="flex-1">
          <View className="h-1/2 bg-slate-200">
            <Text>이미지 사진 박스</Text>
          </View>
        </View>
        <View className="mb-4 justify-end">
          <Pressable className="flex h-12 flex-col items-center justify-center rounded-2xl bg-green-600">
            <Text className="font-bold text-white">저장하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AnswerWithImage;
