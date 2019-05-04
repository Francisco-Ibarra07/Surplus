import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'

export default class FoodItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItemIsAdded: false,
      quantityDesired: 0
    }
  }

  handleFoodItemPress = () => {

  }

  checkIfItemIsInCart = () => {
    const userId = firebase.auth().currentUser.uid;
    const foodItemName = this.props.foodItemName;
    const refToItemInCart = firebase.database().ref('/customers/users/' + userId + '/shoppingcart/' + foodItemName)
    const activity = this
    refToItemInCart.on('value', function (snapshot) {
      if (snapshot._childKeys.length === 0) {
        activity.setState({ cartItemIsAdded: false })
      }
      else {
        activity.setState({ cartItemIsAdded: true })
      }
    })
  }

  addItemToCartFolder = () => {

    // If the item is already added in the cart, return
    if (this.state.cartItemIsAdded) {
      return
    }

    // Create a folder for this new food item into the user's shopping cart
    const userId = firebase.auth().currentUser.uid;
    const foodItemName = this.props.foodItemName;
    const refToItemInCart = firebase.database().ref('/customers/users/' + userId + '/shoppingcart/' + foodItemName)

    // Mark this item as 'Added'
    this.setState({ cartItemIsAdded: true })

    // Update the properties of this item
    refToItemInCart.update({
      'item_name': foodItemName,
      'item_image': this.props.foodItemImage,
      'item_description': this.props.foodItemDescription,
      'item_category': this.props.foodItemCategory,
      'item_quantity_desired': this.state.quantityDesired,
      'item_quantity_original': this.props.foodItemQuantity,
      'item_price': this.props.foodItemPrice,
    })
  }

  incrementQuantity = () => {
    const max = parseInt(this.props.foodItemQuantity)
    if (this.state.quantityDesired === max) {
      return
    }
    else {
      this.setState({ quantityDesired: this.state.quantityDesired + 1 })
    }
  }

  decrementQuantity = () => {
    if (this.state.quantityDesired === 0) {
      return
    }
    else {
      this.setState({ quantityDesired: this.state.quantityDesired - 1 })
    }
  }

  componentDidMount() {
    this.checkIfItemIsInCart();
  }

  render() {

    const { cartItemIsAdded } = this.state
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

                <TouchableOpacity style={styles.button} onPress={this.incrementQuantity}>
                  <Text style={{ fontSize: 15 }}>+</Text>
                </TouchableOpacity>

                <Text style={{ alignItems: 'center' }}>Quantity desired: {this.state.quantityDesired}</Text>

                <TouchableOpacity style={styles.button} onPress={this.decrementQuantity}>
                  <Text style={{ fontSize: 15 }}>-</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                  {!cartItemIsAdded && (<Button title="Add to cart" onPress={this.addItemToCartFolder} />)}
                  {cartItemIsAdded && (<Text style={{ color: '#D33B32', fontSize: 16 }} >Added to cart!</Text>)}
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
