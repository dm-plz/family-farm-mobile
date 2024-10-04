import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/constants';

export default function GradientEndBackground({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundColorLayer}>
        <View style={styles.gradient}>
          <View style={styles.innerContent}>{children}</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundColorLayer: {
    backgroundColor: colors.gradient.base,
  },
  gradient: {
    backgroundColor: colors.gradient.middleDark,
  },
  innerContent: {
    backgroundColor: colors.gradient.top,
  },
});
