import React from 'react';
import {SafeAreaView} from 'react-native';

import SignUpPageHeader from '@/component/sign-up-page/SignUpPageHeader';

function SignUpPage() {
  return (
    <SafeAreaView>
      <SignUpPageHeader currentStep={1} />
    </SafeAreaView>
  );
}
export default SignUpPage;
