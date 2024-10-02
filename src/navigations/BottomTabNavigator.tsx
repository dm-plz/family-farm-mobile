import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import QuestionAnswerStackNavigator from './stack/QuestionAnswerStackNavigator';

import { colors, MY_STACK_NAV_KEY, routeNames } from '@/constants';
import { TextMedium } from '@/entities/fonts';
import MyStackNavigator from '@/navigations/stack/MyStackNavigator';
import Main from '@/pages/home/Main';
import { My } from '@/pages/my';

export type BottomTabNavigation = {
  [routeNames.HOME]: undefined;
  [routeNames.Q_A]: undefined;
  [routeNames.MY]: undefined;
  [MY_STACK_NAV_KEY]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigation>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={CustomTabBar}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[100],
        tabBarInactiveTintColor: '#7E8C86',

        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        name={routeNames.HOME}
        component={Main}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name={routeNames.Q_A}
        component={QuestionAnswerStackNavigator}
        options={{
          tabBarIcon: MainTabBarIcon,
        }}
      />
      <Tab.Screen
        name={routeNames.MY}
        component={My}
        options={{
          tabBarIcon: MyTabBarIcon,
        }}
      />
      <Tab.Screen name={MY_STACK_NAV_KEY} component={MyStackNavigator} />
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

//FIXME: Shadow 누락 됨
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

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const currentRouteName = state.routes[state.index].name;
  const hideTabBarRouteNames: string[] = [MY_STACK_NAV_KEY];

  if (hideTabBarRouteNames.includes(currentRouteName)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const {
            tabBarIcon,
            tabBarActiveTintColor = colors.primary[100],
            tabBarInactiveTintColor = '#7E8C86',
          } = options;

          if (tabBarIcon === undefined) {
            return null;
          }

          const focused = state.index === index;
          const color = focused
            ? tabBarActiveTintColor
            : tabBarInactiveTintColor;

          return (
            <Pressable
              key={route.key}
              onPress={() => navigation.navigate(route.name)}>
              {tabBarIcon({ focused: focused, color: color, size: 0 })}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: 114,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
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
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: '#999',
  },
  activeLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#ddd',
  },
});
