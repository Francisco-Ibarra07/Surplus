import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class RedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[this.state.style, styles.button]} onPress={this.props.onPress}>
          <Text style={{ color: '#ffffff' }}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#D33B32',
    borderColor: '#D33B32',
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    marginBottom: 10,
    justifyContent: 'center',
  },
});