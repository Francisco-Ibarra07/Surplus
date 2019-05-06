import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'

export default class FoodItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItemIsAdded: false,
      isAnonymousUser: this.props.navigation.state.params.anonymousFlag,
      quantityDesired: 0
    }
  }

  checkIfItemIsInCart = () => {

    // If a user is guest browsing, don't check if they have this item in their shopping car
    if (this.state.isAnonymousUser) {
      this.setState({ cartItemIsAdded: false })
      return
    }

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

    // Alert the user to create an account before adding this item to their cart
    if (this.state.isAnonymousUser) {
      alert('Create an account before adding items to your cart!')
      return
    }
    // If the item is already added in the cart, return
    if (this.state.cartItemIsAdded) {
      return
    }
    // If the quantity chose is 0, alert user to choose a quantity
    if (this.state.quantityDesired === 0) {
      alert('Choose a quantity by using the "+" and "-" buttons')
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
      'store_name': this.props.currentStoreName,
      'owner_id': this.props.ownerId
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

                <View style={styles.quantityBox}>
                  <Text style={styles.itemDescription}>Quantity desired:</Text>

                  <TouchableOpacity style={styles.quantityCenter} onPress={this.decrementQuantity}>
                    <Text style={styles.quantity}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.itemDescription}>{this.state.quantityDesired}</Text>

                  <TouchableOpacity style={styles.quantityCenter} onPress={this.incrementQuantity}>
                    <Text style={styles.quantity}>+</Text>
                  </TouchableOpacity>
                </View>
                {cartItemIsAdded && (<Text style={{ color: '#D33B32', fontSize: 16 }} >Added to cart!</Text>)}


                {/* <View style={styles.button}>
                  {!cartItemIsAdded && (<Button title="Add to cart" onPress={this.addItemToCartFolder} />)}
                  {cartItemIsAdded && (<Text style={{ color: '#D33B32', fontSize: 16 }} >Added to cart!</Text>)}
                </View> */}
              </View>
            </View>
          </View>
          <View style={styles.button}>
            {!cartItemIsAdded && <Text style={styles.addToCart} onPress={this.addItemToCartFolder}>Add to cart</Text>}
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
    height: 'auto',
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
    overflow: 'hidden',
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
  quantityCenter: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0078D7',
    backgroundColor: '#0078D7',
    borderRadius: 7.5,
    color: 'white',
  },
  quantity: {
    color: '#D33B32',
    width: 15,
    height: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
    bottom: 2,
  },
  foodItemStock2: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 4,
  },
  addToCart: {
    fontSize: 18,
    // borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 15,
    color: 'white',
    backgroundColor: '#D33B32',
    textAlign: 'center',
  },
  quantityBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
