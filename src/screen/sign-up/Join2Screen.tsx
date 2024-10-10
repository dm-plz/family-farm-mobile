import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { authRouteNames, colors } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AuthStackParams } from '@/navigations/stack/AuthStackNavigator';
import { useValidateNickName } from '@/store/queries/useAuthQuery';
import useNavigationStore from '@/store/stores/navigationStore';
import useSignupStore from '@/store/stores/signupStore';

type Join2ScreenProps = NativeStackScreenProps<
  AuthStackParams,
  typeof authRouteNames.JOIN2
>;

function Join2Screen({ navigation }: Join2ScreenProps) {
  const { navigate, goBack } = useNavigationStore();
  const { setNickName, nickName } = useSignupStore();

  const isValidate = useValidateNickName(nickName).data?.isValidate;

  function handleJoin2() {
    navigate(navigation, authRouteNames.JOIN3);
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
          <TextRegular className="mt-2 text-gray-400">
            이름 또는 닉네임을 알려주세요.
          </TextRegular>
        </View>
        <View className="mt-10">
          <TextRegular className="leading-4 text-gray-400">
            이름 또는 닉네임
          </TextRegular>
          <CustomInput
            className="mt-3"
            placeholder="이름 또는 닉네임을 입력해주세요."
            error={isValidate === false}
            errorMessage="중복된 이름 또는 닉네임 입니다."
            success={isValidate}
            successMessage="사용 가능한 이름 또는 닉네임 입니다."
            value={nickName}
            onChangeText={setNickName}
          />
        </View>
        <Pressable
          className={`my-2 mt-auto flex-row items-center justify-center rounded-xl px-9 py-3 ${isValidate ? 'bg-primary-100' : 'bg-gray-300'}`}
          disabled={!isValidate}
          onPress={() => handleJoin2()}>
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

export default Join2Screen;
