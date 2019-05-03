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
                <Text style={styles.itemName}>Name: {this.props.foodItemName}</Text>
                <Text>Description: {this.props.foodItemDescription}</Text>
                <Text>Quantity Left: {this.props.foodItemQuantity}</Text>
                <Text>Price: ${this.props.foodItemPrice}</Text>
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
    // fontSize: 16,
  },
  foodItemContainer: {
    //borderWidth: 1,
    height: 135,
    marginBottom: 20,
    flex: 1,
  },
  foodItem: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,

    paddingTop: 5,
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
    resizeMode: 'contain',
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
    margin: 5,
  },
  foodItemDescription: {
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingLeft: 15,
    // width: '60%',
    flex: 1,
    // justifyContent: 'center',
  },
  foodItemStock2: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 10,
  },
});
