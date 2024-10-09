import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { authRouteNames, colors } from '@/constants';
import { TextBold, TextRegular } from '@/entities/fonts';
import RoleSelector from '@/entities/RoleSelector';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AuthStackParams } from '@/navigations/stack/AuthStackNavigator';
import useNavigationStore from '@/store/stores/navigationStore';
import useSignupStore from '@/store/stores/signupStore';
import { FamilyRole } from '@/types';

type Join3ScreenProps = NativeStackScreenProps<
  AuthStackParams,
  typeof authRouteNames.JOIN3
>;

function Join3Screen({ navigation }: Join3ScreenProps) {
  const { navigate, goBack } = useNavigationStore();
  const { setFamilyRole, familyRole } = useSignupStore();

  const [selectedRole, setSelectedRole] = useState<FamilyRole | undefined>(
    familyRole,
  );

  function handleJoin3(inputRole: FamilyRole) {
    setFamilyRole(inputRole);
    navigate(navigation, authRouteNames.JOIN4);
  }

  return (
    <SafeScreenWithHeader
      safeAreaStyle={[styles.safeArea]}
      scrollViewStyle={[styles.scrollView]}
      left={{
        onPress: () => goBack(navigation),
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
          <TextBold className="text-h1 leading-9">나의 정보를</TextBold>
          <TextBold className="text-h1 leading-9">입력해 주세요.</TextBold>
          <TextRegular className="mt-2 leading-4 text-gray-400">
            가족에서 어떤 역할을 담당하고 계신가요?
          </TextRegular>
        </View>
        <RoleSelector
          className="mt-10"
          roles={['아빠', '엄마', '딸', '아들']}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
        <Pressable
          className={`mb-2 mt-auto flex-row items-center justify-center rounded-xl px-9 py-3 ${selectedRole ? 'bg-primary-100' : 'bg-gray-300'}`}
          disabled={!selectedRole}
          onPress={() => selectedRole && handleJoin3(selectedRole)}>
          <TextBold className="text-h4 text-white">입력 완료</TextBold>
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

export default Join3Screen;
