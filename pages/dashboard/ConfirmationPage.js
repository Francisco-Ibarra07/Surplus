import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ConfirmationPage extends Component {

  constructor(props) {
    super(props);
  }

  handleButtonPress = () => {

    this.props.navigation.navigate('CustomerDashboard')
  }


  render() {
    return (
      <View>
        <Text> Confirmation Page </Text>
        <Text> Pick up your order by: x amount of time </Text>
        <Button title="Got it!" onPress={this.handleButtonPress} />

      </View>
    )
  }
}