import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import firebase from 'react-native-firebase';

export default class RestaurantFoods extends Component {


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New page</Text>
        </View>

      </ScrollView>
    );
  }


}