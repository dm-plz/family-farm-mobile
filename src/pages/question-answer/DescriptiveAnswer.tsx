import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';

function DescriptiveAnswer() {
  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scroll]}
      leftButton={{
        onPress: () => {},
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
          className="text-h1"
          style={[styles.question]}
          lineBreakStrategyIOS="hangul-word"
          textBreakStrategy="highQuality">
          {`지금 이 순간 제일 듣고 싶은\n문장/단어가 무엇인가요?`}
        </TextBold>
        <TextRegular className="mt-2 text-gray-400">
          가족들에게 공유해 보세요.
        </TextRegular>
      </View>
      <View className="mt-10 max-w-xs">
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
          className={`flex-grow rounded-xl bg-gray-200 px-9 py-3.5 ${'bg-primary-100'}`}>
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

export default DescriptiveAnswer;
