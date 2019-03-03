
import React, { Component } from 'react';
import {
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class BusinessHome extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title="Business Menu" onPress={() => this.props.navigation.navigate('BusinessMenu')} />
        <Button title="Business Queue" onPress={() => this.props.navigation.navigate('BusinessQueue')} />
        <Button title="Business Wallet" onPress={() => this.props.navigation.navigate('BusinessWallet')} />
      </View>
    );
  }
}