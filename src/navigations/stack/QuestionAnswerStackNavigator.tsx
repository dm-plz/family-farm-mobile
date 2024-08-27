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
  QuestionAnswerNavigation as QuestionAnswerNavigation,
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

export type QuestionAnswerStackParamList = {
  [QuestionAnswerNavigation.QUESTION_LIST]: undefined;
  [QuestionAnswerNavigation.VIEW_ANSWER]: QuestionItemProps;
  [QuestionAnswerNavigation.ANSWER_WITH_FEELING]: AnswerItemProps;
  [QuestionAnswerNavigation.ANSWER_WITH_IMAGE]: undefined;
  [QuestionAnswerNavigation.ANSWER_WITH_StringVoice]: undefined;
};

type QuestionAnswerStackNavigatorProps = {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};

const Stack = createStackNavigator<QuestionAnswerStackParamList>();

const QuestionAnswerStackNavigator = ({
  navigation,
  route,
}: QuestionAnswerStackNavigatorProps) => {
  useLayoutEffect(() => {
    const screens = {
      [QuestionAnswerNavigation.ANSWER_WITH_FEELING]: 1,
      [QuestionAnswerNavigation.ANSWER_WITH_IMAGE]: 2,
      [QuestionAnswerNavigation.ANSWER_WITH_StringVoice]: 3,
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
        name={QuestionAnswerNavigation.QUESTION_LIST}
        component={QuestionList}
      />
      <Stack.Screen
        name={QuestionAnswerNavigation.VIEW_ANSWER}
        component={ViewAnswer}
      />
      <Stack.Screen
        name={QuestionAnswerNavigation.ANSWER_WITH_FEELING}
        options={questionAnswerHeaderStyle}
        component={AnswerWithFeeling}
      />
      <Stack.Screen
        name={QuestionAnswerNavigation.ANSWER_WITH_IMAGE}
        options={questionAnswerHeaderStyle}
        component={AnswerWithImage}
      />
      <Stack.Screen
        name={QuestionAnswerNavigation.ANSWER_WITH_StringVoice}
        options={questionAnswerHeaderStyle}
        component={AnswerWithStringVoice}
      />
    </Stack.Navigator>
  );
};

export default QuestionAnswerStackNavigator;
