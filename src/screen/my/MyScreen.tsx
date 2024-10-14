import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, defaultRouteNames, settingRouteNames } from '@/constants';
import GradientBackground from '@/entities/background/GradientBackground';
import { TextRegular, TextSemiBold } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { DefaultTabNavigation } from '@/navigations/DefaultTabNavigator';
import useNavigationStore from '@/store/stores/navigationStore';
import { setStringToClipboard } from '@/utils/system';

type DestinationOfOtherNavigator = {
  [settingRouteNames.SETTING_NAVIGATOR_NAME]: undefined;
};

type MymyScreenProps = BottomTabScreenProps<
  DefaultTabNavigation & DestinationOfOtherNavigator,
  typeof defaultRouteNames.MY
>;

export default function MyScreen({ navigation }: MymyScreenProps) {
  const familyInfoes = [
    {
      birthday: '1994. 09. 16',
      lastActivity: { date: '2024. 07.20', platform: '카카오톡' },
      name: '가은',
      role: '딸',
    },
    {
      birthday: '1994. 09. 16',
      lastActivity: { date: '2024. 07.20', platform: '카카오톡' },
      name: '수',
      role: '엄마',
    },
    {
      birthday: '1994. 09. 16',
      lastActivity: { date: '2024. 07.20', platform: '카카오톡' },
      name: '규',
      role: '아빠',
    },
  ];

  const { navigate } = useNavigationStore();

  const FAMILY_CODE = 'AS12F56E';

  return (
    <GradientBackground>
      <SafeScreenWithHeader
        safeAreaStyle={styles.container}
        scrollViewStyle={styles.screen}
        title="가은's family"
        right={{
          onPress: () =>
            navigate(navigation, settingRouteNames.SETTING_NAVIGATOR_NAME),
          icon: (
            <Image
              source={require('@/assets/img/icon-setting.png')}
              resizeMode="contain"
              className="h-5 w-5"
              tintColor={colors.primary[100]}
            />
          ),
        }}>
        <View className="px-4">
          {familyInfoes.map((item, index) => (
            <View
              className={`flex flex-row py-3 ${index !== familyInfoes.length - 1 ? 'border-b border-gray-50' : ''}`}
              key={item.name}>
              <Image
                source={require('@/assets/img/default-user-profile.png')}
                className="mr-5 h-14 w-14"
                resizeMode="contain"
              />
              <View className="flex flex-col justify-between">
                <TextRegular className="text-body3 text-gray-300">
                  {item.role}
                  {item.role === '딸' && (
                    <TextRegular className="text-body3 text-primary-100">
                      &nbsp;(나)
                    </TextRegular>
                  )}
                </TextRegular>
                <TextSemiBold className="text-h3">{item.name}</TextSemiBold>
                <TextRegular className="text-body4 text-gray-400">
                  {item.birthday}
                  <TextRegular className="text-body4 text-gray-400">
                    &nbsp;({item.lastActivity.platform} {item.lastActivity.date}
                    )
                  </TextRegular>
                </TextRegular>
              </View>
              <View className="ml-auto mr-1 flex items-center justify-center">
                <Image
                  source={require('@/assets/img/icon-3dot.png')}
                  className="h-4 w-4"
                  resizeMode="contain"
                />
              </View>
            </View>
          ))}
        </View>
        <View
          className="mx-auto mb-4 flex w-[340] flex-row justify-between rounded-2xl px-5 py-4 shadow-md"
          style={styles.familyCodeCard}>
          <View>
            <TextRegular className="mb-1 text-gray-300">
              우리 가족 코드
            </TextRegular>
            <TextSemiBold className="text-h3 text-black">
              {FAMILY_CODE}
            </TextSemiBold>
          </View>
          <Pressable
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            onPress={() => setStringToClipboard(FAMILY_CODE)}>
            <Image
              source={require('@/assets/img/icon-copy.png')}
              className="h-4 w-4"
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </SafeScreenWithHeader>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  familyList: {
    paddingHorizontal: 25,
    marginTop: 28,
  },
  familyCodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});
