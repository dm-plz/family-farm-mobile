import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import StepHeader from '@/components/sign-up/StepHeader';
import { colors, routeNames } from '@/constants';
import SelectableText from '@/entities/common/SelectableText';
import { TextBold, TextRegular } from '@/entities/fonts';
import RoleSelector from '@/entities/RoleSelector';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';

type Join3ScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof routeNames.JOIN3
>;

function Join3({ navigation }: Join3ScreenProps) {
  const isHost = false;

  const [selectedRole, setSelectedRole] = useState<string>('아빠');
  const [isFirstInFamily, setIsFirstInFamily] = useState<boolean>(false);

  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      leftButton={{
        onPress: () => navigation.goBack(),
        icon: (
          <Image
            source={require('@/assets/img/icon-arrow-left.png')}
            resizeMode="contain"
            className="h-5 w-5"
            tintColor={colors.primary[100]}
          />
        ),
      }}>
      <View className="h-full px-5">
        <View className="mt-2">
          <TextBold className="text-h1">나의 정보를</TextBold>
          <TextBold className="text-h1">입력해 주세요.</TextBold>
          <TextRegular className="mt-2 text-gray-400">
            가족에서 어떤 역할을 담당하고 계신가요?
          </TextRegular>
        </View>
        <RoleSelector
          className="mt-10"
          roles={['아빠', '엄마', '딸', '아들']}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
        <SelectableText
          text="제가 가족 중 처음이에요"
          isSelected={isFirstInFamily}
          onPress={() => setIsFirstInFamily(!isFirstInFamily)}
        />
        <Pressable
          className="my-2 flex-row items-center justify-center rounded-xl bg-primary-100 px-9 py-3"
          onPress={() => navigation.navigate(routeNames.JOIN4)}>
          <TextBold className="text-white text-h4">입력 완료</TextBold>
        </Pressable>
      </View>
      <View className="flex h-full flex-col justify-between px-10 pb-8">
        <StepHeader currentStep={3} />
        <View className="flex h-[40%] flex-col items-center justify-around">
          <View className="bg-slate-200 flex h-20 w-60 items-center justify-center">
            <Text className="text-center">로고</Text>
          </View>
          {isHost ? (
            <>
              <View>
                <Text className="text-center font-bold">{`가은님,
      가족에게 초대장 코드를 보내보세요!`}</Text>
              </View>
              <View className="bg-green-300 flex h-20 w-60 items-center justify-center">
                <Text className="text-center">초대장 보내기</Text>
              </View>
              <View className="flex items-center justify-center">
                <Text>or</Text>
                <Text>나의 코드 복사</Text>
                <Text className="text-xl font-bold underline">A2SDK3</Text>
              </View>
            </>
          ) : (
            <View className="items-center justify-center">
              <Text className="font-bold">{`가은님,`}</Text>
              <Text className="font-bold">{`가족과 소중한 추억 쌓으러 가볼까요?`}</Text>
            </View>
          )}
        </View>
        {/* TODO: Oauth 구현 이후, 이 시작하기 버튼을 누르면, UseAuth의 isLogin이 True로 바뀌어야 함. */}
        <CustomButton>시작하기</CustomButton>
      </View>
    </SafeScreenWithHeader>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default Join3;
