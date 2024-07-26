import React from 'react';
import {Image, Platform, Pressable, Text, View} from 'react-native';

function LoginPage(): React.JSX.Element {
  const isIOS = Platform.OS === 'ios' ? true : false;

  return (
    <View className="h-full">
      <View className="flex flex-row items-center justify-center basis-2/3">
        <Image
          source={require('../assets/img/orange.png')}
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>
      <View className="basis-1/3 flex flex-col px-10">
        <Pressable
          className="bg-yellow-200 w-full px-4 py-6 mb-4"
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
  console.log(isIOS);
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
