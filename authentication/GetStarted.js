import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class GetStarted extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Save BIG on</Text>
        <Text style={styles.title}>your next meal!</Text>
        <Button title="Get Started" onPress={() => this.props.navigation.navigate('WhoAreYou')} />
        <Button title="Browse as Guest" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  }
});