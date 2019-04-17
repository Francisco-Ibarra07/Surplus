import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class BusinessMenu extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title='Info'
        color='blue'
      />
    ),
  };
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate('AddFood')}> Add Item </Text>
        <Text>Menu</Text>
      </View>
    );
  }
}
