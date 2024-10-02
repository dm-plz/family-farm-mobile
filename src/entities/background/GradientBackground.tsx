import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientBackground({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundColorLayer}>
        <LinearGradient
          colors={['rgba(232, 234, 232, 1)', 'rgba(232, 232, 232, 0.2)']}
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
    backgroundColor: 'rgba(60, 179, 113, 0.6)',
  },
  gradient: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    backgroundColor: '#FFFFFFca',
  },
});
