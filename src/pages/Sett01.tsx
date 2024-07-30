import React from 'react';
import {Alert, Button, SafeAreaView, Text, View} from 'react-native';
import MainHeader from '@/components/MainHeader';

export default function Mymy01() {
  const showAlert = () => {
    Alert.alert(
      '로그아웃 확인',
      '로그아웃하시겠어요?',
      [
        {
          text: '취소',
          onPress: () => {},
        },
        {text: '로그아웃', onPress: () => {}, style: 'destructive'},
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView className="h-full bg-green-100 py-8">
      <MainHeader />
      <View className="px-4">
        <View>
          <Text>뒤로가기 버튼</Text>
        </View>
        <View className="mt-6 px-4">
          <View className="mt-4 space-y-8">
            <Text className="text-xl font-bold">알림 설정</Text>
            <View className="flex flex-row justify-between">
              <Text>PUSH 알림</Text>
              <Text>PUSH 알림 상태 표시</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text>마케팅 정보 알림</Text>
              <Text>마케팅 정보 알림 상태 표시</Text>
            </View>
          </View>
          <View className="mt-4 space-y-8">
            <Text className="text-xl font-bold">문의하기</Text>
            <View className="flex flex-row justify-between">
              <Text>자주 묻는 질문</Text>
              <Text>자주 묻는 질문 이동 버튼</Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text>1:1 문의</Text>
              <Text>1:1 문의 이동 버튼</Text>
            </View>
          </View>
          <View className="mt-4 space-y-8">
            <Text className="text-xl font-bold">개인/보안</Text>
            <View className="flex flex-row justify-between">
              <Text>로그아웃</Text>
              <Button title="로그아웃 이동 버튼" onPress={showAlert} />
            </View>
            <View className="flex flex-row justify-between">
              <Text>탈퇴하기</Text>
              <Text>탈퇴하기 이동 버튼</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
