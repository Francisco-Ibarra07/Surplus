import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
    }
  }

  // This method deletes the cart item that was clicked on from the user's shopping cart folder
  handleDelete = () => {
    const refToShoppingCart = this.props.refToShoppingCart;
    const itemName = this.props.name;
    refToShoppingCart.child(itemName).remove()
  }

  handleEdit = () => {

  }

  render() {
    return (
      <View style={styles.cart}>
        {/* Image */}
        <View style={styles.cartPreview}>
          <Image style={styles.foodImage} source={{ uri: this.props.imageURL }} />
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{this.props.name}</Text>
          <Text style={styles.descriptionText}>Quantity: {this.props.quantity}</Text>
          <Text style={styles.descriptionText}>Price: ${this.props.price}</Text>
          <View style={styles.buttonBox}>
            <Button title="Edit" onPress={this.handleEdit} />
            <Button title="Delete" onPress={this.handleDelete} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },

  // CART SECTION
  cart: {
    borderWidth: .50,
    borderColor: 'red',
    borderRadius: 10,
    height: 'auto',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 16,
    flexDirection: 'row',
  },
  cartPreview: {
    // borderWidth: 1,
    // borderColor: 'orange',
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodImage: {
    // borderWidth: 1,
    // borderColor: 'blue',
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  description: {
    width: '50%',
    padding: 15,
  },
  totalBox: {
    marginBottom: 16,
  },
  total: {
    textAlign: 'right',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginBottom: 5,
  },
  descriptionText: {
    marginBottom: 5,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 21,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  // buttonText: {
  //   color: '#D33B32',
  // },
})
