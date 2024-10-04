import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

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
          className="mt-auto p-3"
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
    </SafeScreenWithHeader>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
});

export default Join3;
