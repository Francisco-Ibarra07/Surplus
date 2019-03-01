import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class FoodItem extends Component {
  render() {
    return (
      <View style={styles.foodContainer}>
        <View style={styles.foodItem}>
          <View style={styles.foodImage}>
            <Image style={styles.foodImageChild} source={require('../resources/pizza.jpg')} />
          </View>
          <View style={styles.foodDescription}>
            <View style={styles.foodTitle}>
              <Text>{this.props.itemName}</Text>
              <Text>Pick-up 1AM - 3AM</Text>
            </View>
            <View style={styles.foodStock}>
              <Text>Sammy G's • 0.3mi</Text>
              <View style={styles.foodStock2}>
                <Text>8 left {" "}</Text>
                <Text>2 claimed</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    color: 'blue',
  },
  foodContainer: {
    // borderWidth: 1,
  },
  foodItem: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 125,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  foodImage: {
    // borderWidth: 1,
    height: '100%',
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  foodImageChild: {
    height: '100%',
    width: '100%'
  },
  foodDescription: {
    height: '100%',
    // borderWidth: 1,
    paddingLeft: 10,
    width: '60%',
    flex: 1,
    justifyContent: 'space-between',
  },
  foodStock2: {
    flexDirection: 'row',
  },
});