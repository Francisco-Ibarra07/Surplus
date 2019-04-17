import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class BusinessQueue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Active Orders</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'orange',
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    borderBottomWidth: 1,
    // borderWidth: 1,
    // borderColor: 'orange',
    borderColor: 'lightgray',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 8,
  },
})
