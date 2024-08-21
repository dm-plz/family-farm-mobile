import {
  getFocusedRouteNameFromRoute,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useLayoutEffect } from 'react';

import {
  colors,
  nonShowBottomTab,
  questionAnswerHeaderStyle,
  QustionAnswerNavigation,
  showBottomTab,
} from '@/constants';
import AnswerWithFeeling from '@/pages/question-answer/AnswerWithFeeling';
import AnswerWithImage from '@/pages/question-answer/AnswerWithImage';
import AnswerWithStringVoice from '@/pages/question-answer/AnswerWithStringVoice';
import QuestionList, {
  QuestionItemProps,
} from '@/pages/question-answer/QuestionList';
import ViewAnswer, {
  AnswerItemProps,
} from '@/pages/question-answer/ViewAnswer';

export type QustionAnswerStackParamList = {
  [QustionAnswerNavigation.QUESTION_LIST]: undefined;
  [QustionAnswerNavigation.VIEW_ANSWER]: QuestionItemProps;
  [QustionAnswerNavigation.ANSWER_WITH_FEELING]: AnswerItemProps;
  [QustionAnswerNavigation.ANSWER_WITH_IMAGE]: undefined;
  [QustionAnswerNavigation.ANSWER_WITH_StringVoice]: undefined;
};

type QustionAnswerStackNavigatorProps = {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};

const Stack = createStackNavigator<QustionAnswerStackParamList>();

const QustionAnswerStackNavigator = ({
  navigation,
  route,
}: QustionAnswerStackNavigatorProps) => {
  useLayoutEffect(() => {
    const screens = {
      [QustionAnswerNavigation.ANSWER_WITH_FEELING]: 1,
      [QustionAnswerNavigation.ANSWER_WITH_IMAGE]: 2,
      [QustionAnswerNavigation.ANSWER_WITH_StringVoice]: 3,
    };
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName && routeName in screens) {
      // BUG: tabBarStyle 타입 지정이 안됨
      navigation.setOptions({ tabBarStyle: nonShowBottomTab });
    } else {
      navigation.setOptions({
        tabBarStyle: showBottomTab,
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.WHITE,
          elevation: 0,
          shadowOpacity: 0,
        },
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={QustionAnswerNavigation.QUESTION_LIST}
        component={QuestionList}
      />
      <Stack.Screen
        name={QustionAnswerNavigation.VIEW_ANSWER}
        component={ViewAnswer}
      />
      <Stack.Screen
        name={QustionAnswerNavigation.ANSWER_WITH_FEELING}
        options={questionAnswerHeaderStyle}
        component={AnswerWithFeeling}
      />
      <Stack.Screen
        name={QustionAnswerNavigation.ANSWER_WITH_IMAGE}
        options={questionAnswerHeaderStyle}
        component={AnswerWithImage}
      />
      <Stack.Screen
        name={QustionAnswerNavigation.ANSWER_WITH_StringVoice}
        options={questionAnswerHeaderStyle}
        component={AnswerWithStringVoice}
      />
    </Stack.Navigator>
  );
};

export default QustionAnswerStackNavigator;
