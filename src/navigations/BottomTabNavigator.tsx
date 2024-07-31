import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';

import {colors} from '@/constants';
import Main01 from '@/pages/Main01';
import Mymy01 from '@/pages/Mymy01';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.YELLOW_400,
        tabBarInactiveTintColor: colors.WHITE,
        tabBarStyle: {
          backgroundColor: colors.GREEN_700,
          minHeight: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="홈"
        component={Main01}
        options={{
          tabBarIcon: props => TabBarIcon(props, '홈 아이콘'),
        }}
      />
      <Tab.Screen
        name="질문 답변"
        component={Mymy01}
        options={{
          tabBarIcon: props => TabBarIcon(props, '질문 답변 아이콘'),
        }}
      />
      <Tab.Screen
        name="마이"
        component={Mymy01}
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
  return <Text style={{color}}>{text}</Text>;
}
