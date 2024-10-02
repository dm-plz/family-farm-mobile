import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MainHeader, { type MainHeaderProps } from '@/components/my/MainHeader';
import { ClassNameProps } from '@/types/props';

type SafeDisplayViewWithHeader = PropsWithChildren &
  ClassNameProps &
  MainHeaderProps;

export default function SafeDisplayViewWithHeader({
  children,
  className,
  title,
  leftButton,
  rightButton,
  ...props
}: SafeDisplayViewWithHeader) {
  return (
    <SafeAreaView {...props} className={className}>
      <MainHeader
        title={title}
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
