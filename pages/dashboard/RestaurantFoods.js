import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import firebase from 'react-native-firebase';

export default class RestaurantFoods extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodItemsView: [],
    }
  }

  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View>
          <Text>Available Foods</Text>
        </View>

        {this.state.foodItemsView}

      </ScrollView>
    );
  }


}