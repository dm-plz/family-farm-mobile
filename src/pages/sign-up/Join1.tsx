import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

import { kyInstance } from '@/api/ky';
import { AUTH_APIS } from '@/api/routes';
import CustomButton from '@/components/CustomButton';
import StepHeader from '@/components/sign-up/StepHeader';
import { queryKeys, signUpNavigation } from '@/constants';
import { SignUpStackParamList } from '@/navigations/stack/SignUpStackNavigator';

type Join1ScreenProps = NativeStackScreenProps<
  SignUpStackParamList,
  typeof signUpNavigation.JOIN_1
>;

interface ValidateResponse {
  isValidate: boolean;
}

function Join1({ navigation }: Join1ScreenProps) {
  const [activeBorder, setActiveBorder] = useState(false);
  const [familyCode, setFamilyCode] = useState('');

  const { data, isError, isLoading, isSuccess, refetch } = useQuery({
    queryKey: [queryKeys.VALIDATE_INVITE_CODE],
    queryFn: async () => {
      console.log('쿼리 실행!');
      return await kyInstance
        .get(AUTH_APIS.VALIDATE_FAMILY_CODE, {
          searchParams: { familyCode },
        })
        .json<ValidateResponse>();
    },
    enabled: false,
  });

  const handleInputChange = (text: string) => {
    setFamilyCode(text);
  };

  useEffect(() => {
    if (familyCode.length === 8) {
      refetch();
    }
  }, [familyCode, refetch]);

  return (
    <SafeAreaView>
      <View className="h-full justify-between px-10 pb-10">
        <View>
          <StepHeader currentStep={1} />
          <View>
            <Text className="text-2xl font-bold">환영합니다!</Text>
            <Text className="text-2xl font-bold">초대를 받고 오셨나요?</Text>
            <Text className="mt-4 font-bold">
              전달받은 초대 코드를 입력해 주세요.
            </Text>
          </View>
          <TextInput
            className={`mt-4 h-16 w-full rounded-md border-2 bg-white p-4 ${activeBorder ? 'border-violet-300' : 'border-slate-200'}`}
            placeholder="코드 8자리를 입력해 주세요"
            onFocus={() => {
              setActiveBorder(true);
            }}
            onBlur={() => setActiveBorder(false)}
            onChangeText={handleInputChange}
            value={familyCode}
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {data?.isValidate === false && familyCode.length === 8 && (
            <Text className="text-sm text-red-400">
              코드가 조회되지 않습니다. 다시 확인해 주세요.
            </Text>
          )}

          <CustomButton twClass="mt-2">입력완료</CustomButton>
        </View>

        {/* 컴포넌트 변경후, bg-slate-200이 아니라, disable로 변경 예정 */}
        <CustomButton
          twClass={
            data?.isValidate && familyCode.length === 8
              ? 'bg-sky-300'
              : 'bg-slate-200'
          }
          onPress={() => navigation.navigate(signUpNavigation.JOIN_2)}>
          제가 가족중 처음이에요!
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
export default Join1;
