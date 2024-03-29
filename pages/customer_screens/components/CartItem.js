import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
      quantityDesired: 0,
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
          <Text style={styles.h1}>{this.props.name}</Text>

          <Text style={styles.descriptionText}>Price: ${this.props.price}</Text>

          <View style={styles.quantityBox}>

            <Text style={styles.itemDescription}>Quantity:</Text>

            <TouchableOpacity style={styles.quantityCenter} onPress={this.decrementQuantity}>
              <Text style={styles.quantity}>-</Text>
            </TouchableOpacity>

            <Text style={styles.itemDescription}>{this.props.quantity}</Text>

            <TouchableOpacity style={styles.quantityCenter} onPress={this.incrementQuantity}>
              <Text style={styles.quantity}>+</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.buttonBox}>
            <View style={styles.button}>
              <Button title="Update" onPress={this.handleEdit} />
            </View>
            <View style={styles.button2}>
              <Button title="Delete" onPress={this.handleDelete} />
            </View>
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
  h1: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 21,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  quantityBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  button: {
    borderWidth: 1,
    borderColor: '#147efb',
    borderRadius: 5,
    marginTop: 14,
  },
  button2: {
    borderWidth: 1,
    borderColor: '#147efb',
    marginLeft: 5,
    borderRadius: 5,
    marginTop: 14,
  },
})
