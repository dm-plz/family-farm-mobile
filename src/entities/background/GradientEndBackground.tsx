import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

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
  container: {
    flex: 1,
  },
  backgroundColorLayer: {
    flex: 1,
    backgroundColor: 'rgba(60, 179, 113, 0.6)',
  },
  gradient: {
    flex: 1,
    backgroundColor: 'rgba(232, 232, 232, 0.2)',
  },
  innerContent: {
    flex: 1,
    backgroundColor: '#FFFFFFca',
  },
});
