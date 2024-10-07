import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React, { PropsWithChildren } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import {
  colors,
  answerRouteNames,
  defaultRouteNames,
  settingRouteNames,
} from '@/constants';
import GradientEndBackground from '@/entities/background/GradientEndBackground';
import { TextMedium } from '@/entities/fonts';
import {
  AnswerStackNavigator,
  SettingStackNavigator,
} from '@/navigations/stack';
import { AlarmScreen, HomeScreen } from '@/screen/home';
import { MyScreen } from '@/screen/my';
import FamilyAnswerScreen from '@/screen/question-answer/FamilyAnswerScreen';
import QuestionListScreen from '@/screen/question-answer/QuestionListScreen';
import { useBackGroundStore } from '@/store/stores';

export type DefaultTabNavigation = {
  [defaultRouteNames.HOME]: undefined;
  [defaultRouteNames.QUESTION_LIST]: undefined;
  [defaultRouteNames.MY]: undefined;
  [defaultRouteNames.FAMILY_ANSWER]: undefined;
  [defaultRouteNames.ALARM]: undefined;
  [answerRouteNames.NAVIGATOR_NAME]: undefined;
  [settingRouteNames.NAVIGATOR_NAME]: undefined;
};

const DefaultTab = createBottomTabNavigator<DefaultTabNavigation>();

export default function DefaultTabNavigator() {
  return (
    <DefaultTab.Navigator
      tabBar={CustomTabBar}
      initialRouteName={defaultRouteNames.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[100],
        tabBarInactiveTintColor: '#7E8C86',

        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <DefaultTab.Screen
        name={defaultRouteNames.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <DefaultTab.Screen
        name={defaultRouteNames.QUESTION_LIST}
        component={QuestionListScreen}
        options={{
          tabBarIcon: MainTabBarIcon,
        }}
      />
      <DefaultTab.Screen
        name={defaultRouteNames.MY}
        component={MyScreen}
        options={{
          tabBarIcon: MyTabBarIcon,
        }}
      />
      <DefaultTab.Screen
        name={defaultRouteNames.FAMILY_ANSWER}
        component={FamilyAnswerScreen}
      />
      <DefaultTab.Screen
        name={defaultRouteNames.ALARM}
        component={AlarmScreen}
      />
      <DefaultTab.Screen
        name={settingRouteNames.NAVIGATOR_NAME}
        component={SettingStackNavigator}
      />
      <DefaultTab.Screen
        name={answerRouteNames.NAVIGATOR_NAME}
        component={AnswerStackNavigator}
      />
    </DefaultTab.Navigator>
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
    settingRouteNames.NAVIGATOR_NAME,
    answerRouteNames.NAVIGATOR_NAME,
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
