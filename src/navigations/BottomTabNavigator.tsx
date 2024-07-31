import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main01 from '@/pages/Main01';
import Mymy01 from '@/pages/Mymy01';
import {colors} from '@/constants';
import {Text} from 'react-native';

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
          tabBarIcon: ({color}) => <Text style={{color}}>홈 아이콘</Text>,
        }}
      />
      <Tab.Screen
        name="질문 답변"
        component={Mymy01}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color}}>질문 답변 아이콘</Text>
          ),
        }}
      />
      <Tab.Screen
        name="마이"
        component={Mymy01}
        options={{
          tabBarIcon: ({color}) => <Text style={{color}}>마이 아이콘</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
