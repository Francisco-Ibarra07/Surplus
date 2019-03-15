import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class BusinessMenu extends Component {
  render() {
    return (
      <View>
        <Text>Menu</Text>
        <Text onPress={() => this.props.navigation.navigate('AddFood')}> Add Item </Text>
      </View>
    );
  }
}
