import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ClassNameProps } from '@/types/props';

export default function SafeScreen({
  children,
  className,
  ...props
}: PropsWithChildren & ClassNameProps) {
  return (
    <SafeAreaView {...props} className={className}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
