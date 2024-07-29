import React from 'react';
import {Image, Platform, Pressable, Text, View} from 'react-native';

import Config from 'react-native-config';

function LoginPage() {
  const isIOS = Platform.OS === 'ios';

  console.log(Config.TEST_URL);

  return (
    <View className="h-full">
      <Text>{Config.TEST_URL ? 'good' : 'null'}</Text>
      <View className="flex flex-row items-center justify-center basis-2/3">
        <Image
          source={require('../assets/img/orange.png')}
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-col px-10 basis-1/3">
        <Pressable
          className="w-full px-4 py-6 mb-4 bg-yellow-200"
          onPress={() => {
            console.log('KAKAO Clicked!');
          }}>
          <Text>카카오 로그인</Text>
        </Pressable>
        <RenderLoginButtonByPlatform isIOS={isIOS} />
      </View>
    </View>
  );
}

function RenderLoginButtonByPlatform({isIOS}: {isIOS: boolean}) {
  return isIOS ? (
    <Pressable className="w-full px-4 py-6 bg-blue-200">
      <Text>IOS</Text>
    </Pressable>
  ) : (
    <Pressable className="w-full px-4 py-6 bg-green-200">
      <Text>Android</Text>
    </Pressable>
  );
}

export default LoginPage;
