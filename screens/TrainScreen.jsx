import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TrainScreen() {
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.text}>Train Screen</Text>
    </View>
  );
}
const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});