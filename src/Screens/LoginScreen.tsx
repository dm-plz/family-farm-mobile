import React from 'react';
import {Image, Platform, Pressable, Text, View} from 'react-native';

function LoginScreen() {
  const isIOS = Platform.OS === 'ios';

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
    <Pressable className="w-full bg-blue-200 px-4 py-6">
      <Text>IOS</Text>
    </Pressable>
  ) : (
    <Pressable className="w-full bg-green-200 px-4 py-6">
      <Text>Android</Text>
    </Pressable>
  );
}

export default LoginScreen;
