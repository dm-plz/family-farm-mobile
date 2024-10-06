import { createStackNavigator } from '@react-navigation/stack';

import { routeNames } from '@/constants';
import DescriptiveAnswer from '@/pages/question-answer/DescriptiveAnswer';
import RecordEmotion from '@/pages/question-answer/RecordEmotion';

export type AnswerStackNavigatorParams = {
  [routeNames.RECORD_EMOTION]: undefined;
  [routeNames.DESCRIPTIVE_ANSWER]: undefined;
};

const Stack = createStackNavigator<AnswerStackNavigatorParams>();

function AnswerStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routeNames.DESCRIPTIVE_ANSWER}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routeNames.RECORD_EMOTION}
        component={RecordEmotion}
      />
      <Stack.Screen
        name={routeNames.DESCRIPTIVE_ANSWER}
        component={DescriptiveAnswer}
      />
    </Stack.Navigator>
  );
}

export default AnswerStackNavigator;
