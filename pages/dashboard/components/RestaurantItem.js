import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class RestaurantItem extends Component {

  constructor(props) {
    super(props);
  }

  handleItemPress = () => {

    this.props.navigation.navigate('RestaurantFoods');
  }

  render() {
    return (
      <View style={styles.restaurantContainer}>
        <TouchableOpacity style={styles.restaurantItem} onPress={this.handleItemPress}>
          <View style={styles.restaurantImage}>
            <Image style={styles.restaurantImageChild} source={{ uri: this.props.imageLink }} />
          </View>

          <View style={styles.foodDescription}>
            <View style={styles.foodTitle}>
              <Text>{this.props.storeName}</Text>
              <Text>{this.props.storeAddress}</Text>
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
  restaurantContainer: {
    //borderWidth: 1,
    height: 75,
    marginBottom: 20,
  },
  restaurantItem: {
    borderColor: 'black',
    borderWidth: 1,

    marginLeft: 25,
    marginRight: 25,
    // marginBottom: 20,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  restaurantImage: {
    // borderWidth: 1,
    height: '100%',
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  restaurantImageChild: {
    height: '100%',
    width: '100%'
  },
  foodDescription: {
    height: '100%',
    // borderWidth: 1,
    paddingLeft: 10,
    width: '60%',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantStock2: {
    flexDirection: 'row',
  },
});