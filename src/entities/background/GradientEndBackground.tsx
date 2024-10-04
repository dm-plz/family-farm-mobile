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

//TODO: 상수로 변경
const styles = StyleSheet.create({
  container: {},
  backgroundColorLayer: {
    backgroundColor: '#3cb37199',
  },
  gradient: {
    backgroundColor: 'rgba(232, 232, 232, 0.2)',
  },
  innerContent: {
    backgroundColor: '#FFFFFFcf',
  },
});
