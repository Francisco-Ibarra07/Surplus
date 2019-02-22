import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class WhoAreYou extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Are you a</Text>
        <Text style={styles.subtitle}>Customer or a Business Owner?</Text>
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
  },
  subtitle: {
    fontSize: 15,
  }
});