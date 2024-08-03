import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import MainHeader from '@/components/my/MainHeader';

export default function Main() {
  return (
    <SafeAreaView className="bg-green-100">
      <View className="h-full">
        <MainHeader iconText="Bell Icon" />
        <View className="mx-8 flex items-center justify-center">
          <View className="flex h-32 w-52 items-center justify-center bg-slate-200">
            <Text className="text-center">Character</Text>
          </View>
        </View>
        <View className="mx-8 mb-4 mt-auto">
          <View className="flex h-40 w-full bg-green-400 py-4">
            <Text className="mb-8 text-center">오늘의 질문</Text>
            <Text className="mb-1 text-center font-bold">지금 이 순간</Text>
            <Text className="text-center font-bold">
              제일 듣고 싶은 단어는?
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
