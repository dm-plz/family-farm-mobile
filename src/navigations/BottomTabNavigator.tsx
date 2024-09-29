import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';

import QuestionAnswerStackNavigator from './stack/QuestionAnswerStackNavigator';

import { colors } from '@/constants';
import { TextMedium } from '@/entities/fonts';
import MapStackNavigator from '@/navigations/stack/MyStackNavigator';
import Main from '@/pages/home/Main';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[100],
        tabBarInactiveTintColor: '#7E8C86',
        tabBarStyle: {
          backgroundColor: colors.white,
          minHeight: 114,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          paddingHorizontal: 58,
          paddingTop: 12,
          paddingBottom: 42,
          shadowColor: 'rgba(0, 0, 0)',
          shadowOffset: { width: 0, height: -4 },
          shadowRadius: 20,
          shadowOpacity: 0.04,
          borderTopWidth: 0,
          elevation: 8, //NOTE: For Android shadow
        },

        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        name="홈"
        component={Main}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name="질문 답변"
        component={QuestionAnswerStackNavigator}
        options={{
          tabBarIcon: MainTabBarIcon,
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MapStackNavigator}
        options={{
          tabBarIcon: MyTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

function HomeTabBarIcon(props: TabBarIconProps) {
  return (
    <View className="flex w-20 flex-col items-center space-y-0.5">
      <Image
        source={require('@/assets/img/icon-home.png')}
        className="h-6 w-6"
        resizeMode="contain"
        style={[{ tintColor: props.color }]}
      />
      <TextMedium style={{ color: props.color }} className="text-center">
        홈
      </TextMedium>
    </View>
  );
}

function MainTabBarIcon(_: TabBarIconProps) {
  return (
    <View className="w-[60] rounded-full bg-primary-100 p-4">
      <Image
        source={require('@/assets/img/icon-message.png')}
        className="h-7 w-7"
        resizeMode="contain"
        style={[{ tintColor: colors.white }]}
      />
    </View>
  );
}

function MyTabBarIcon(props: TabBarIconProps) {
  return (
    <View className="flex w-20 flex-col items-center space-y-0.5">
      <Image
        source={require('@/assets/img/icon-my.png')}
        className="h-6 w-6"
        resizeMode="contain"
        style={[{ tintColor: props.color }]}
      />
      <TextMedium style={{ color: props.color }} className="text-center">
        마이페이지
      </TextMedium>
    </View>
  );
}
