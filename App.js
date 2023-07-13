import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalColors } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginbox}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.orange.background.colour,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginbox: {
    flex: 1,
    backgroundColor: globalColors.maincolors.white.colour,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 324,
    marginBottom: 0
  }
});
