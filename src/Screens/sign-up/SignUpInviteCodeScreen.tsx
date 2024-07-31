import CustomButton from '@/component/CustomButton';
import SignUpPageHeader from '@/component/sign-up-screen/SignUpPageHeader';
import {SafeAreaView, Text, View} from 'react-native';

function SignUpInviteCodeScreen() {
  return (
    <SafeAreaView>
      <View className="flex h-full flex-col justify-between px-10 pb-8">
        <View>
          <SignUpPageHeader currentStep={3} />
          <View className="flex h-[60%] flex-col items-center justify-center bg-red-200">
            <Text>로고</Text>
            <Text>가은님! 가족에게 초대장 코드를 보내보세요!</Text>
            <Text>초대장 보내기</Text>
            <Text>or</Text>
            <Text>나의 코드 복사</Text>
            <Text>A2SDK3</Text>
          </View>
        </View>
        <CustomButton>시작하기</CustomButton>
      </View>
    </SafeAreaView>
  );
}
export default SignUpInviteCodeScreen;
