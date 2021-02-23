import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class CalculatorButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30
  }
})

export default CalculatorButton;
