import { PropsWithChildren } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MainHeader, { type MainHeaderProps } from '@/components/my/MainHeader';

type SafeScreenWithHeader = PropsWithChildren &
  MainHeaderProps & {
    safeAreaStyle?: StyleProp<ViewStyle>;
    scrollViewStyle?: StyleProp<ViewStyle>;
  };

export default function SafeScreenWithHeader({
  children,
  title,
  leftButton,
  rightButton,
  safeAreaStyle,
  scrollViewStyle,
  ...props
}: SafeScreenWithHeader) {
  return (
    <SafeAreaView {...props} style={safeAreaStyle}>
      <MainHeader
        title={title}
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <ScrollView contentContainerStyle={scrollViewStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
