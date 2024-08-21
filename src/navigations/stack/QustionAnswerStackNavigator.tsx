import { createStackNavigator } from '@react-navigation/stack';

import { colors, QustionAnswerNavigation } from '@/constants';
import QuestionList, {
  QuestionItemProps,
} from '@/pages/question-answer/QuestionList';
import WriteAnswer from '@/pages/question-answer/WriteAnswer';

export type QustionAnswerStackParamList = {
  [QustionAnswerNavigation.QUESTION_LIST]: undefined;
  [QustionAnswerNavigation.WRITE_ANSWER]: QuestionItemProps;
};

const Stack = createStackNavigator<QustionAnswerStackParamList>();

const QustionAnswerStackNavigator = () => {
  // NOTE: bottomTab 비활성화시 사용하는 코드
  // useLayoutEffect(() => {
  //   const screens = { Question_Answer_WriteAnswer: 1 };
  //   const routeName = getFocusedRouteNameFromRoute(route);

  //   if (routeName in screens) {
  //     navigation.setOptions({ tabBarStyle: nonShowBottomTab });
  //   } else {
  //     navigation.setOptions({
  //       tabBarStyle: showBottomTab,
  //     });
  //   }
  // }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.WHITE,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={QustionAnswerNavigation.QUESTION_LIST}
        component={QuestionList}
        options={{ title: QustionAnswerNavigation.QUESTION_LIST }}
      />
      <Stack.Screen
        name={QustionAnswerNavigation.WRITE_ANSWER}
        component={WriteAnswer}
        options={{ title: QustionAnswerNavigation.WRITE_ANSWER }}
      />
    </Stack.Navigator>
  );
};

export default QustionAnswerStackNavigator;
