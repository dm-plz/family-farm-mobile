import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  NativeModules,
  Image,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';

import { signUpNavigation } from '@/constants';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';
type OnboardingProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof signUpNavigation.ONBOARDING
>;

//NOTE: 추가로 client id를 사용할 일이 생길 경우 별도로 분리 해야 함
//FIXME: 해당 파일이 아닌 다른 곳에서 로그인 로직을 전체적으로 관리해야 함
GoogleSignin.configure({
  webClientId:
    '686661822188-g09au2cca8vhjbbsq14c2aq5cd54j2h0.apps.googleusercontent.com',
  offlineAccess: true,
});

const { KakaoLoginModule } = NativeModules;

function Onboarding({ navigation }: OnboardingProps) {
  const isIOS = Platform.OS === 'ios';

  const handleLogin = () => {
    KakaoLoginModule.signInWithKakao()
      .then((token: any) => {
        console.log(token);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const googleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //NOTE: userInfo 값에서 idToken을 사용하면 됨
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="h-full">
      <View className="flex basis-2/3 flex-row items-center justify-center">
        <Image
          source={require('../assets/img/orange.png')}
          className="h-40 w-40"
          resizeMode="contain"
        />
      </View>
      <View className="flex basis-1/3 flex-col px-10">
        <Pressable
          className="mb-4 w-full bg-yellow-200 px-4 py-6"
          onPress={handleLogin}>
          <Text>카카오 로그인</Text>
        </Pressable>
        <Pressable
          className="mb-4 w-full bg-green-200 px-4 py-6"
          onPress={googleSignin}>
          <Text>구글 로그인</Text>
        </Pressable>
        <RenderLoginButtonByPlatform isIOS={isIOS} />

        {__DEV__ && (
          <Pressable
            className="mt-4 w-full bg-green-200 px-4 py-6"
            onPress={() => {
              navigation.navigate(signUpNavigation.JOIN_1);
            }}>
            {/*TODO:로그인 로직 구현 완료 이후 버튼 로직 수정  */}
            <Text>Join 화면 진입</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

function RenderLoginButtonByPlatform({ isIOS }: { isIOS: boolean }) {
  return isIOS ? (
    <Pressable className="w-full bg-blue-200 px-4 py-6">
      <Text>IOS</Text>
    </Pressable>
  ) : (
    <Pressable className="w-full bg-green-200 px-4 py-6">
      <Text>Android</Text>
    </Pressable>
  );
}

export default Onboarding;
