import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import FoodItem from './components/FoodItem';

export default class RestaurantFoods extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodItemsView: [],
      foodItemsList: [],
    }

    this.populateFoodItemsList = this.populateFoodItemsList.bind(this);
  }

  componentDidMount() {

    const foodList = this.props.navigation.state.params.storeItemsList;
    this.populateFoodItemsList(foodList);
  }

  populateFoodItemsList = (foodList) => {

    var foodItems = [];
    for (food in foodList) {
      foodItems.push(foodList[food]);
    }

    console.log(foodItems);
    var listView = [];
    for (var i = 0; i < foodItems.length; i++) {
      listView.push(
        <FoodItem
          key={i}
          foodItemName={foodItems[i].item_name}
        />
      );
    }

    console.log(listView);
    this.setState({ foodItemsView: listView });
    console.log(this.state.foodItemsView);
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