import { create } from 'zustand';

import {
  type RouteName,
  allRouteNames,
  answerRouteNames,
  settingRouteNames,
} from '@/constants';

type Navigation = { navigate: (routeName: RouteName) => void };

type NavigationStoreState = {
  prevScreens: RouteName[];
  currentScreen: RouteName;
  nextScreens: RouteName[];
};

type NavigationStoreActions = {
  navigate: (navigation: Navigation, routeName: RouteName) => void;
  goBack: (navigation: Navigation) => void;
  goNext: (navigation: Navigation) => void;
  moveWithFlush: (routeName: RouteName) => void;
};
type NavigationStore = NavigationStoreState & NavigationStoreActions;

const replaceRouteNames: Partial<Record<RouteName, RouteName>> = {
  [settingRouteNames.SETTING_NAVIGATOR_NAME]: settingRouteNames.SETTING,
  [answerRouteNames.ANSWER_NAVIGATOR_NAME]: answerRouteNames.DESCRIPTIVE_ANSWER,
};

const useNavigationStore = create<NavigationStore>((set, get) => ({
  prevScreens: [],
  //NOTE: 사용자가 최초로 접근하는 화면과 일치시켜야 함
  currentScreen: allRouteNames.SIGN_IN,
  nextScreens: [],
  navigate: (navigation, routeName) => {
    const { prevScreens, currentScreen } = get();

    const targetRouteName = replaceRouteNames[routeName] ?? routeName;

    set({
      prevScreens: [...prevScreens, currentScreen].slice(-10),
      currentScreen: targetRouteName,
    });

    navigation.navigate(routeName);
  },
  moveWithFlush: routeName => {
    set({ prevScreens: [], nextScreens: [], currentScreen: routeName });
  },
  goBack: navigation => {
    const { prevScreens, currentScreen, nextScreens } = get();
    if (prevScreens.length === 0) {
      return;
    }

    const prevScreen = prevScreens[prevScreens.length - 1];

    set({
      prevScreens: prevScreens.slice(0, -1),
      currentScreen: prevScreen,
      nextScreens: [currentScreen, ...nextScreens].slice(0, 10),
    });

    navigation.navigate(prevScreen);
  },
  goNext: navigation => {
    const { prevScreens, currentScreen, nextScreens } = get();
    if (nextScreens.length === 0) {
      return;
    }

    const nextScreen = nextScreens[nextScreens.length - 1];

    set({
      prevScreens: [...prevScreens, currentScreen].slice(-10),
      currentScreen: nextScreen,
      nextScreens: nextScreens.slice(1, 11),
    });

    navigation.navigate(nextScreen);
  },
}));

export default useNavigationStore;
