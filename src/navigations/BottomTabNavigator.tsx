import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';

import QustionAnswerStackNavigator from './stack/QustionAnswerStackNavigator';

import { colors } from '@/constants';
import MapStackNavigator from '@/navigations/stack/MyStackNavigator';
import Main from '@/pages/home/Main';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.GREEN_700,
        tabBarInactiveTintColor: '#7E8C86',
        tabBarStyle: {
          backgroundColor: colors.WHITE,
          minHeight: 114,

          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          elevation: 8,
          shadowColor: '#000000',
          shadowOpacity: 0.04,
          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        name="홈"
        component={Main}
        options={{
          tabBarIcon: props => TabBarIcon(props, '홈 아이콘'),
        }}
      />
      <Tab.Screen
        name="질문 답변"
        component={QustionAnswerStackNavigator}
        options={{
          tabBarIcon: props => TabBarIcon(props, '질문 답변 아이콘'),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MapStackNavigator}
        options={{
          tabBarIcon: props => TabBarIcon(props, '마이 아이콘'),
        }}
      />
    </Tab.Navigator>
  );
}

function TabBarIcon(
  {
    color,
  }: {
    focused: boolean;
    color: string;
    size: number;
  },
  text: string,
) {
  return <Text style={{ color }}>{text}</Text>;
}
