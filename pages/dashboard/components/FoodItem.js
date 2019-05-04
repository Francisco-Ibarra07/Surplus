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
        <View style={styles.foodItem}>
          {/*
          <View style={styles.foodName}>
            <Text style={styles.itemName}>{this.props.foodItemName}</Text>
          </View> */}

          <View style={styles.desciption}>
            <View style={styles.foodItemImage}>
              <Image style={styles.foodItemImageChild} source={{ uri: this.props.foodItemImage }} />
            </View>

            <View style={styles.foodItemDescription}>
              <View style={styles.foodTitle}>
                <Text style={styles.itemName}>{this.props.foodItemName}</Text>
                <Text style={styles.itemDescription1}>{this.props.foodItemDescription}</Text>
                <Text style={styles.itemDescription}>Quantity Left: {this.props.foodItemQuantity}</Text>
                <Text style={styles.itemDescription}>Price: ${this.props.foodItemPrice}</Text>
                <View style={styles.button}>
                  <Text style={{ color: '#D33B32', fontSize: 16 }} onPress={() => alert('Add')}>Add</Text>
                </View>
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
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  foodItemContainer: {
    //borderWidth: 1,
    height: 150,
    marginBottom: 20,
    flex: 1,
  },
  foodItem: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 0.5,
    marginLeft: 25,
    marginRight: 25,
    // marginBottom: 20,
    flex: 1,
    flexDirection: 'column',
  },
  foodItemImage: {
    // borderWidth: 1,
    height: '100%',
    width: '40%',
    // borderRadius: 10,
  },
  foodItemImageChild: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'red',
    // borderRadius: 10,
    // marginLeft: 5,
    overflow: 'hidden',
    borderRadius: 5,
  },
  desciption: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  foodItemDescription: {
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingLeft: 10,
    paddingRight: 10,
    // width: '60%',
    flex: 1,
    justifyContent: 'center',
  },
  itemDescription1: {
    fontSize: 12,
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 12,
    marginBottom: 2,
  },
  foodItemStock2: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 4,
  },
});
