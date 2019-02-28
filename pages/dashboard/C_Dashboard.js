import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import FoodItem from './components/FoodItem';

export default class C_Dashboard extends Component {
  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular Now</Text>
          <Text style={{ color: '#D33B32', fontSize: 10 }}>See All</Text>
        </View>

        <FoodItem itemName="Dino Nuggets" />
        <FoodItem itemName="Pho" />
        <FoodItem itemName="Taco" />
        <FoodItem itemName="Burrito" />
        <FoodItem itemName="Fried Rice" />
        <FoodItem itemName="Pizza" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // Title
  titleContainer: {
    alignItems: 'center',
    //borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
});