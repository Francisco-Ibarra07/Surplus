import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import firebase from 'react-native-firebase'

export default class FoodItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItemIsAdded: false,
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
      'item_quantity': this.props.foodItemQuantity,
      'item_price': this.props.foodItemPrice,
    })

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
                <Text style={styles.itemName}>Name: {this.props.foodItemName}</Text>
                <Text>Description: {this.props.foodItemDescription}</Text>
                <Text>Quantity Left: {this.props.foodItemQuantity}</Text>
                <Text>Price: ${this.props.foodItemPrice}</Text>
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
