import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors, routeNames } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular, TextSemiBold } from '@/entities/fonts';
import RoleSelector from '@/entities/RoleSelector';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { MyStackParamList } from '@/navigations/stack/MyStackNavigator';

type ProfileScreenProps = NativeStackScreenProps<
  MyStackParamList,
  typeof routeNames.MY_PROFILE
>;
export default function Setting({ navigation }: ProfileScreenProps) {
  const [selectedRole, setSelectedRole] = useState<string>('아빠');

  return (
    <SafeScreenWithHeader
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
      }}
      safeAreaStyle={styles.container}>
      <View className="ml-5 mt-2">
        <TextBold className="text-h1">나의 정보를</TextBold>
        <TextBold className="text-h1">수정해 주세요.</TextBold>
      </View>
      <View className="ml-5 mt-2">
        <TextRegular className="text-gray-400">
          나의 정보를 다시 알려주세요
        </TextRegular>
      </View>
      <View className="relative mx-auto mt-10">
        <Image
          source={require('@/assets/img/default-user-profile.png')}
          resizeMode="contain"
          className="h-[120] w-[120] rounded-full"
        />
        <View className="absolute bottom-0 right-0 rounded-full border border-gray-50 bg-white">
          <Image
            source={require('@/assets/img/icon-camera.png')}
            resizeMode="contain"
            className="h-7 w-7"
          />
        </View>
      </View>
      <View className="mx-4 my-5">
        <TextSemiBold className="mb-3 text-body2 text-gray-300">
          이름 또는 닉네임
        </TextSemiBold>
        <CustomInput
          success={true}
          successMessage="사용 가능한 이름 또는 닉네임 입니다."
        />
      </View>
      <RoleSelector
        className="mx-5"
        roles={['아빠', '엄마', '아들', '딸']}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      <Pressable className="mx-5 my-2 mt-7 h-12 rounded-xl bg-primary-100 px-9 py-[14]">
        <TextBold className="text-h4 text-white">수정 완료</TextBold>
      </Pressable>
    </SafeScreenWithHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: 40,
  },
});
