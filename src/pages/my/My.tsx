import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import MainHeader from '@/components/my/MainHeader';
import { bottomTabNavigation, colors } from '@/constants';
import GradientBackground from '@/entities/background/GradientBackground';
import { TextRegular, TextSemiBold } from '@/entities/fonts';
import { BottomTabNavigation } from '@/navigations/BottomTabNavigator';

type MymyScreenProps = BottomTabScreenProps<
  BottomTabNavigation,
  typeof bottomTabNavigation.MY
>;

export default function My({ navigation }: MymyScreenProps) {
  return (
    <GradientBackground>
      <SafeAreaView className="h-full">
        <MainHeader
          title="가은's family"
          right={{
            onPress: () => navigation.navigate(bottomTabNavigation.SETTING),
            icon: (
              <Image
                source={require('@/assets/img/icon-setting.png')}
                resizeMode="contain"
                className="h-5 w-5"
                tintColor={colors.primary[100]}
              />
            ),
          }}
        />
        <FlatList
          style={styles.familyList}
          ItemSeparatorComponent={FamliyListSeperator}
          data={[
            { date: '1994.09.16', name: '가은', role: '딸' },
            { date: '1994.09.16', name: '수', role: '엄마' },
            { date: '1994.09.16', name: '규', role: '아빠' },
          ]}
          renderItem={({ item }) => (
            <View className="flex flex-row">
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
          )}
          keyExtractor={item => item.name}
        />
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
      </SafeAreaView>
    </GradientBackground>
  );
}

function FamliyListSeperator() {
  return <View className="my-5 border border-gray-25" />;
}

const styles = StyleSheet.create({
  familyList: {
    paddingHorizontal: 25,
    marginTop: 28,
  },
  familyCodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});
