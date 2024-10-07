import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MainHeader, { type MainHeaderProps } from '@/entities/MainHeader';

type SafeScreenWithHeader = PropsWithChildren &
  MainHeaderProps & {
    safeAreaStyle?: StyleProp<ViewStyle>;
    scrollViewStyle?: StyleProp<ViewStyle>;
  };

export default function SafeScreenWithHeader({
  children,
  title,
  left,
  right,
  safeAreaStyle,
  scrollViewStyle,
  ...props
}: SafeScreenWithHeader) {
  return (
    <SafeAreaView {...props} style={safeAreaStyle}>
      <MainHeader title={title} left={left} right={right} />
      <ScrollView contentContainerStyle={scrollViewStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
