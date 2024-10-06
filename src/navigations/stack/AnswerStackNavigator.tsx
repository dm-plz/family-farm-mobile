import { createStackNavigator } from '@react-navigation/stack';

import { routeNames } from '@/constants';
import RecordEmotion from '@/pages/question-answer/RecordEmotion';

export type AnswerStackNavigatorParams = {
  [routeNames.RECORD_EMOTION]: undefined;
};

const Stack = createStackNavigator<AnswerStackNavigatorParams>();

function AnswerStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routeNames.RECORD_EMOTION}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routeNames.RECORD_EMOTION}
        component={RecordEmotion}
      />
    </Stack.Navigator>
  );
}

export default AnswerStackNavigator;
