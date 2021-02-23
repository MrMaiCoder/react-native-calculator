import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import CalculatorButton from './CalculatorButton'
import CalculatorColors from './CalculatorColors';

class CalculatorButtons extends Component {

  operatorSelected = operation => {
    this.props.operation(operation)
  }

  render() {
    const numbers = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      ['.', '0', '='],
    ]
    const operations = ['C', '÷', '×', '-', '+']
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.numbers}>
          {numbers.map((row, i) =>
            <View key={i} style={styles.row}>
              {row.map(char =>
                <CalculatorButton key={char} char={char} operation={this.operatorSelected} />
              )}
            </View>
          )}
        </SafeAreaView>
        <SafeAreaView style={styles.operations}>
          {operations.map(char =>
            <CalculatorButton key={char} char={char} operation={this.operatorSelected} />
          )}
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: CalculatorColors['blue-darker'] ,
    borderBottomLeftRadius: 30,
  },
  operations: {
    flex: 1,
    backgroundColor: CalculatorColors['blue'],
    borderBottomRightRadius: 30,
  }
})

export default CalculatorButtons;
