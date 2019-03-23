import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class FoodItem extends Component {

  constructor(props) {
    super(props);
  }

  handleFoodItemPress = () => {

  }

  render() {
    return (

      <View style={styles.foodItemContainer}>
        <TouchableOpacity style={styles.foodItem}>

          <Text>{this.props.foodItemName}</Text>
          <View style={styles.foodItemImage}>
            <Image style={styles.foodItemImageChild} source={{ uri: this.props.foodItemImage }} />
          </View>

          <View style={styles.foodItemDescription}>
            <View style={styles.foodTitle}>
              <Text>Description: {this.props.foodItemDescription}</Text>
              <Text>Quantity: {this.props.foodItemQuantity}</Text>
            </View>
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    color: 'blue',
  },
  foodItemContainer: {
    //borderWidth: 1,
    height: 75,
    marginBottom: 20,
  },
  foodItem: {
    borderColor: 'black',
    borderWidth: 1,

    marginLeft: 25,
    marginRight: 25,
    // marginBottom: 20,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  foodItemImage: {
    // borderWidth: 1,
    height: '100%',
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  foodItemImageChild: {
    height: '100%',
    width: '100%'
  },
  foodItemDescription: {
    height: '100%',
    // borderWidth: 1,
    paddingLeft: 10,
    width: '60%',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  foodItemStock2: {
    flexDirection: 'row',
  },
});