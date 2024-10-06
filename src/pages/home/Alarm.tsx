import { Image, StyleSheet, View } from 'react-native';

import { colors } from '@/constants';
import { TextBold, TextLight, TextMedium, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';

function AlarmScreen() {
  return (
    <SafeScreenWithHeader
      safeAreaStyle={styles.safeArea}
      scrollViewStyle={styles.scroll}
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
      }}
      title="알림"
      rightButton={{
        onPress: () => {},
        icon: (
          <TextMedium className="text-body2 text-primary-100">
            읽음 처리
          </TextMedium>
        ),
      }}>
      <View>
        <View className="px-5 py-4">
          <View className="flex-row">
            <TextBold>Peter&nbsp;</TextBold>
            <TextLight>commented on your photo</TextLight>
          </View>
          <TextRegular className="mt-2 text-body2 text-gray-300">
            2분 전
          </TextRegular>
        </View>
        <View className="px-5 py-4">
          <View className="max-w-xs flex-row">
            <TextBold>FamilyFarm&nbsp;</TextBold>
            <TextLight>
              and 36 others like your round play at Meadow Spring Golf
            </TextLight>
          </View>
          <TextRegular className="mt-2 text-body2 text-gray-300">
            10분 전
          </TextRegular>
        </View>
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
  bottomCard: {
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
  },
});

export default AlarmScreen;
