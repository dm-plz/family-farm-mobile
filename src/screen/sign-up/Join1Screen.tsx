import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { authRouteNames, colors } from '@/constants';
import CustomInput from '@/entities/CustomInput';
import { TextBold, TextRegular } from '@/entities/fonts';
import SafeScreenWithHeader from '@/entities/safeScreen/SafeScreenWithHeader';
import { AuthStackParams } from '@/navigations/stack/AuthStackNavigator';
import { useValidateInviteCode } from '@/store/queries/useAuthQuery';
import useNavigationStore from '@/store/stores/navigationStore';
import useSignupStore from '@/store/stores/signupStore';

type Join1ScreenProps = NativeStackScreenProps<
  AuthStackParams,
  typeof authRouteNames.JOIN1
>;

function Join1Screen({ navigation }: Join1ScreenProps) {
  const { navigate, goBack } = useNavigationStore();
  const { setInviteCode, inviteCode } = useSignupStore();

  const [_inviteCode, _setInviteCode] = useState(inviteCode ?? '');

  const isValidate = useValidateInviteCode(_inviteCode ?? '').data?.isValidate;

  //TODO: inviteCode가 null이 아닌 경우 코드가 존재하는지 확인해야 함
  async function handleJoin1(inputCode: string | null) {
    setInviteCode(inputCode);
    navigate(navigation, authRouteNames.JOIN2);
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
      <View className="h-full flex-1 px-5">
        <View className="mt-2">
          <TextBold className="text-h1 leading-9">환영합니다!</TextBold>
          <TextBold className="text-h1 leading-9">
            초대를 받고 오셨나요?
          </TextBold>
          <TextRegular className="mt-2 text-gray-400">
            전달받은 초대 코드를 입력해 주세요.
          </TextRegular>
        </View>
        <View className="mt-10">
          <TextRegular className="leading-4 text-gray-400">
            초대 코드 (8자리)
          </TextRegular>
          <CustomInput
            className="mt-3"
            error={false}
            placeholder="초대 코드 8자리를 입력해 주세요"
            errorMessage="코드가 조회되지 않습니다. 다시 확인해 주세요."
            value={_inviteCode}
            onChangeText={_setInviteCode}
            maxLength={8}
          />
          <Pressable
            className={`mt-5 rounded-xl px-9 py-3 ${isValidate ? 'bg-primary-100' : 'bg-gray-300'}`}
            disabled={!isValidate}
            onPress={() => handleJoin1(_inviteCode)}>
            <TextBold className="text-center text-h4 text-white">
              입력 완료
            </TextBold>
          </Pressable>
        </View>
        <Pressable
          className="my-2 mb-2 mt-auto flex-row items-center justify-center rounded-xl bg-primary-100 px-9 py-[14]"
          onPress={() => handleJoin1(null)}>
          <Image
            source={require('@/assets/img/icon-check-circle.png')}
            resizeMode="contain"
            className="mr-2 h-5 w-5"
            tintColor={colors.white}
          />
          <TextBold className="text-white">제가 가족 중 처음이에요</TextBold>
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

export default Join1Screen;
