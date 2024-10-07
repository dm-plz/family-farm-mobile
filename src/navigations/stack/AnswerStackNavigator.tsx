import { createStackNavigator } from '@react-navigation/stack';

import { answerRouteNames } from '@/constants';
import DescriptiveAnswerScreen from '@/screen/question-answer/DescriptiveAnswerScreen';
import RecordEmotionScreen from '@/screen/question-answer/RecordEmotionScreen';

export type AnswerStackNavigatorParams = {
  [answerRouteNames.RECORD_EMOTION]: undefined;
  [answerRouteNames.DESCRIPTIVE_ANSWER]: undefined;
};

const Stack = createStackNavigator<AnswerStackNavigatorParams>();

function AnswerStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={answerRouteNames.RECORD_EMOTION}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={answerRouteNames.RECORD_EMOTION}
        component={RecordEmotionScreen}
      />
      <Stack.Screen
        name={answerRouteNames.DESCRIPTIVE_ANSWER}
        component={DescriptiveAnswerScreen}
      />
    </Stack.Navigator>
  );
}

export default AnswerStackNavigator;
