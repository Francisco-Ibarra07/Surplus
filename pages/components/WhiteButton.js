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
    const style = {};
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[this.state.style, styles.button]} onPress={this.props.onPress}>
          <Text style={{ color: '#505050' }}>{this.props.buttonText}</Text>
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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#656565',
    height: 45,
    justifyContent: 'center',
  },
});