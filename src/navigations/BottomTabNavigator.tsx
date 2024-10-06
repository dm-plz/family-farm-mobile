import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React, { PropsWithChildren } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import {
  colors,
  routeNames,
  ANSWER_STACK_NAV_KEY,
  MY_STACK_NAV_KEY,
} from '@/constants';
import GradientEndBackground from '@/entities/background/GradientEndBackground';
import { TextMedium } from '@/entities/fonts';
import { AnswerStackNavigator, MyStackNavigator } from '@/navigations/stack';
import Main from '@/pages/home/Main';
import { My } from '@/pages/my';
import FamilyAnswer from '@/pages/question-answer/FamilyAnswer';
import QuestionList from '@/pages/question-answer/QuestionList';
import { useBackGroundStore } from '@/store/stores';

export type BottomTabNavigation = {
  [routeNames.HOME]: undefined;
  [routeNames.QUESTION_LIST]: undefined;
  [routeNames.MY]: undefined;
  [MY_STACK_NAV_KEY]: undefined;
  [ANSWER_STACK_NAV_KEY]: undefined;
  [routeNames.FAMILY_ANSWER]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigation>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={CustomTabBar}
      initialRouteName={routeNames.FAMILY_ANSWER}
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
        name={routeNames.QUESTION_LIST}
        component={QuestionList}
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
      <Tab.Screen
        name={ANSWER_STACK_NAV_KEY}
        component={AnswerStackNavigator}
      />
      <Tab.Screen name={routeNames.FAMILY_ANSWER} component={FamilyAnswer} />
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
    <View className="w-20 items-center space-y-0.5">
      <Image
        source={require('@/assets/img/icon-home.png')}
        className="h-6 w-6 px-[3] py-0.5"
        resizeMode="contain"
        style={[{ tintColor: props.color }]}
      />
      <TextMedium
        style={{ color: props.color }}
        className="text-center text-body4 leading-3">
        홈
      </TextMedium>
    </View>
  );
}

function MainTabBarIcon(_: TabBarIconProps) {
  return (
    <View
      className="w-[60] rounded-full bg-primary-100 p-4"
      style={[styles.mainButton]}>
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
    <View className="w-20 items-center space-y-0.5">
      <Image
        source={require('@/assets/img/icon-my.png')}
        className="h-6 w-6 px-0.5 py-[5]"
        resizeMode="contain"
        style={[{ tintColor: props.color }]}
      />
      <TextMedium
        style={{ color: props.color }}
        className="text-center text-body4 leading-3">
        마이페이지
      </TextMedium>
    </View>
  );
}

function CustomTabBarWrapper({ children }: PropsWithChildren) {
  const { outOfSafeAreaBackgroundMode } = useBackGroundStore();
  return outOfSafeAreaBackgroundMode === 'default' ? (
    <View>{children}</View>
  ) : (
    <GradientEndBackground>{children}</GradientEndBackground>
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const currentRouteName = state.routes[state.index].name;
  const hideTabBarRouteNames: string[] = [
    MY_STACK_NAV_KEY,
    ANSWER_STACK_NAV_KEY,
  ];

  if (hideTabBarRouteNames.includes(currentRouteName)) {
    return null;
  }

  return (
    <CustomTabBarWrapper>
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
    </CustomTabBarWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
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
    shadowOpacity: 0.12,
    borderTopWidth: 0,
    elevation: 8, //NOTE: For Android shadow
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  mainButton: {
    shadowColor: '#1bb876',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 16,
    elevation: 8,
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
