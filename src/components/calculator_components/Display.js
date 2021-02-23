import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

const CalculatorDisplay = ({ state }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safe}>
      <Text
        style={styles.display}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{state.display}</Text>
      { state.result !== '' &&
      <Text
        style={styles.result}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{state.result}</Text>
      }
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b2836',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  safe: {
    flex: 1,
    justifyContent: 'space-around',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40,
  },
  result: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 30,
  },
})

export default CalculatorDisplay;
