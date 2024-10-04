import { useFocusEffect } from '@react-navigation/native';
import { PropsWithChildren, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '@/constants';
import { useBackGroundStore } from '@/store/stores';

export default function GradientBackground({ children }: PropsWithChildren) {
  const { setDefaultBackgroundMode, setGradientBackgroundMode } =
    useBackGroundStore();

  useFocusEffect(
    useCallback(() => {
      setGradientBackgroundMode();

      return () => setDefaultBackgroundMode();
    }, [setGradientBackgroundMode, setDefaultBackgroundMode]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.backgroundColorLayer}>
        <LinearGradient
          colors={[colors.gradient.middleLight, colors.gradient.middleDark]}
          locations={[0.6, 1.0]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient}>
          <View style={styles.innerContent}>{children}</View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColorLayer: {
    flex: 1,
    backgroundColor: colors.gradient.base,
  },
  gradient: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    backgroundColor: colors.gradient.top,
  },
});
