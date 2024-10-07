import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';

import { colors, defaultRouteNames } from '@/constants';
import { TextBold, TextLight, TextMedium, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { DefaultTabNavigation } from '@/navigations/DefaultTabNavigator';
import useNavigationStore from '@/store/stores/navigationStore';

type AlarmScreenProps = BottomTabScreenProps<
  DefaultTabNavigation,
  typeof defaultRouteNames.ALARM
>;

function AlarmScreen({ navigation }: AlarmScreenProps) {
  const { goBack } = useNavigationStore();

  return (
    <SafeScreenWithHeader
      safeAreaStyle={styles.safeArea}
      scrollViewStyle={styles.scroll}
      left={{
        onPress: () => goBack(navigation),
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
      right={{
        onPress: () => {},
        icon: (
          <TextMedium className="text-body2 leading-6 text-primary-100">
            읽음 처리
          </TextMedium>
        ),
      }}>
      <View>
        <View className="px-5 py-4">
          <View className="flex-row">
            <TextBold className="text-body2 leading-[18]">
              Peter&nbsp;
              <TextLight className="text-body2 leading-[18]">
                commented on your photo
              </TextLight>
            </TextBold>
          </View>
          <TextRegular className="mt-2 text-body2 leading-4 text-gray-300">
            2분 전
          </TextRegular>
        </View>
        <View className="max-w-xs px-5 py-4">
          <View className="flex-row">
            <TextBold className="text-body2 leading-[18]">
              FamilyFarm&nbsp;
              <TextLight className="text-body2 leading-[18]">
                and 36 others like your round play at Meadow Spring Golf
              </TextLight>
            </TextBold>
          </View>
          <TextRegular className="mt-2 text-body2 leading-4 text-gray-300">
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
