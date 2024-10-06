import { Pressable, StyleSheet, View } from 'react-native';

import { ERROR_TYPES, ErrorTypes } from '@/constants/error';
import { TextBold, TextLight } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';

type ErrorProps = { type: ErrorTypes };

function ErrorScreen({ type }: ErrorProps) {
  const { title, imageComponent, description1, description2 } =
    ERROR_TYPES[type];
  return (
    <SafeScreenWithHeader
      safeAreaStyle={styles.safeArea}
      scrollViewStyle={styles.scroll}
      title={title}>
      <View className="flex-1">
        <View className="flex-1 items-center justify-center">
          {imageComponent()}
          <TextBold className="mt-3 text-h2">{description1}</TextBold>
          <View className="mt-2 space-y-1">
            {description2.map(desc => (
              <TextLight className="text-center text-gray-300" key={desc}>
                {desc}
              </TextLight>
            ))}
          </View>
        </View>
        <Pressable
          className="mx-auto mb-2 mt-auto w-80 rounded-lg bg-primary-100 px-9 py-3"
          onPress={() => {}}>
          <TextBold className="text-center text-h4 text-white">홈으로</TextBold>
        </Pressable>
      </View>
    </SafeScreenWithHeader>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
});

export default ErrorScreen;
