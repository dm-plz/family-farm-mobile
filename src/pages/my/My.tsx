import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { routeNames, colors, MY_STACK_NAV_KEY } from '@/constants';
import GradientBackground from '@/entities/background/GradientBackground';
import SafeDisplayViewWithHeader from '@/entities/common/SafeDisplayWithHeader';
import { TextRegular, TextSemiBold } from '@/entities/fonts';
import { BottomTabNavigation } from '@/navigations/BottomTabNavigator';

type MymyScreenProps = BottomTabScreenProps<
  BottomTabNavigation,
  typeof routeNames.MY
>;

export default function My({ navigation }: MymyScreenProps) {
  const familyInfoes = [
    { date: '1994.09.16', name: '가은', role: '딸' },
    { date: '1994.09.16', name: '수', role: '엄마' },
    { date: '1994.09.16', name: '규', role: '아빠' },
  ];

  return (
    <GradientBackground>
      <SafeDisplayViewWithHeader
        safeAreaStyle={styles.container}
        scrollViewStyle={styles.screen}
        title="가은's family"
        rightButton={{
          onPress: () => navigation.navigate(MY_STACK_NAV_KEY),
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
              className={`flex flex-row py-3 ${index !== familyInfoes.length - 1 ? 'border-b border-gray-25' : ''}`}
              key={item.name}>
              <Image
                source={require('@/assets/img/default-user-profile.png')}
                className="mr-5 h-14 w-14"
                resizeMode="contain"
              />
              <View className="flex flex-col justify-between">
                <TextRegular className="text-body3 text-gray-300">
                  {item.role}
                </TextRegular>
                <TextSemiBold className="text-h3">{item.name}</TextSemiBold>
                <TextRegular className="text-body4 text-gray-400">
                  {item.date}
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
            <TextSemiBold className="text-black text-h3">AS12F56E</TextSemiBold>
          </View>
          <View className="bg-white flex h-10 w-10 items-center justify-center rounded-full">
            <Image
              source={require('@/assets/img/icon-copy.png')}
              className="h-4 w-4"
              resizeMode="contain"
            />
          </View>
        </View>
      </SafeDisplayViewWithHeader>
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
