import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class RestaurantItem extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * When an item in the list is pressed, we pass in the food list for this specific restaurant that was clicked on onto the next screen
   */
  handleItemPress = () => {
    const list = this.props.storeItemsList;
    this.props.navigation.navigate('RestaurantFoods', { storeItemsList: list });
  }

  render() {
    return (
      <View style={styles.restaurantContainer}>
        {/* FIXED: Using navigation inside a functional component https://github.com/react-navigation/react-navigation/issues/2115 */}
        <TouchableOpacity style={styles.restaurantItem} onPress={this.handleItemPress}>
          <View style={styles.restaurantImage}>
            <Image style={styles.restaurantImageChild} source={{ uri: this.props.storeObject.store_info.image }} />
          </View>

          <View style={styles.foodDescription}>
            <View style={styles.foodTitle}>
              <Text>{this.props.storeObject.store_info.store_name}</Text>
              <Text>{this.props.storeObject.store_info.address}</Text>
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
    height: 100,
    marginBottom: 20,
  },
  restaurantItem: {
    borderColor: 'black',
    borderRadius: 10,
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
    height: 100,
    // marginLeft: 5,
    resizeMode: 'contain',
    width: '100%',
  },
  foodDescription: {
    height: '100%',
    // borderWidth: 1,
    paddingLeft: 15,
    width: '60%',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantStock2: {
    flexDirection: 'row',
  },
});