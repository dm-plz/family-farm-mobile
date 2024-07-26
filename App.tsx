import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.text}>Hellow World!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  text: {
    color: 'orange',
  },
});

export default App;
