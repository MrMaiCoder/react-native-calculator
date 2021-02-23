import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Display from './Display'
import CalculatorButtons from './CalculatorButtons'
import CalculatorColors from './CalculatorColors'

export default class App extends Component {

  state = {
    display: '0',
    result: ''
  }

  pressedEqual = false

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '0',
        result: ''
      })
    }
    else if (operation === '=') {
      this.pressedEqual = true;
      this.setState({
        display: this.state.result === '' ? this.state.display : this.state.result,
        result: '',
      });
    } else {
      let display;
      const operators = ['×', '÷', '+', '-'];

      if (this.state.display === '0' && !operators.includes(operation)) {
        display = operation;
      } else if (this.pressedEqual && !operators.includes(operation)) {
        display = operation;
        this.pressedEqual = false;
      } else if (this.pressedEqual && operators.includes(operation)) {
        display = this.state.display + operation;
        this.pressedEqual = false;
      } else {
        display = this.state.display + operation;
      }

      let unFixedResult = this.state.result;
      let result;
      try {

        let fixedOperation = display.split('×').join('*');
        fixedOperation = fixedOperation.split('÷').join('/');
        fixedOperation = fixedOperation.split('.').join('.');

        unFixedResult = String(eval(fixedOperation)).toString();
        result = parseFloat(unFixedResult).toFixed(4);

      } catch (e) {
      }
      this.setState({
        display,
        result,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <CalculatorButtons operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'stretch',
    backgroundColor: CalculatorColors.darker,
    width:'100%',
    borderRadius: 40,
  },
});
