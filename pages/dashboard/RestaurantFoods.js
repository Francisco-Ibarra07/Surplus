import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FoodItem from './components/FoodItem';

export default class RestaurantFoods extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodItemsView: [],
      currentStoreName: this.props.navigation.state.params.storeChosen,
    }
    this.populateFoodItemsList = this.populateFoodItemsList.bind(this);
  }

  /**
   * This method is to make sure the 'this.state' variable is mounted correctly before altering it later
   */
  componentDidMount() {
    const foodList = this.props.navigation.state.params.storeItemsList;
    this.populateFoodItemsList(foodList);
  }


  /**
   * Iterates through a given food list array and turns the elements into 'FoodItem's so they can be displayed in View
   */
  populateFoodItemsList = (foodList) => {

    // Grab all the food items given by the input
    var foodItems = [];
    for (food in foodList) {
      foodItems.push(foodList[food]);
    }

    // Populate an array of 'FoodItem's 
    var listView = [];
    for (var i = 0; i < foodItems.length; i++) {
      listView.push(
        <FoodItem
          key={i}
          navigation={this.props.navigation}
          foodItemName={foodItems[i].item_name}
          foodItemDescription={foodItems[i].item_description}
          foodItemImage={foodItems[i].item_image}
          foodItemQuantity={foodItems[i].item_quantity}
          foodItemPrice={foodItems[i].item_price}
          foodItemCategory={foodItems[i].item_category}
        />
      );
    }

    // Given populated array to 'foodItemsView' so we can see the output when it is rendered
    this.setState({ foodItemsView: listView });
  }

  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text>Available Foods by {this.state.currentStoreName} </Text>
        </View>

        {this.state.foodItemsView}
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
    margin: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
});