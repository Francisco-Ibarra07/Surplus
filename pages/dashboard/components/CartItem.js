import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style,
    }
  }

  handleCartItemPress = () => {

  }

  render() {
    return (
      <View style={styles.cart}>
        {/* Image */}
        <View style={styles.cartPreview}>
          <Image style={styles.foodImage}
            source={require('../../dashboard/resources/burrito.jpg')}
          // source={this.props.source}
          // source={require(this.props.source)}
          />
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{this.props.name}</Text>
          <Text style={styles.descriptionText}>Quantity: {this.props.quantity}</Text>
          <Text style={styles.descriptionText}>Price: ${this.props.price}</Text>
          <View style={styles.buttonBox}>
            <View style={styles.button}>
              <Button onPress={() => alert('Edit')} title='Edit' />
            </View>
            <View style={styles.button}>
              <Button onPress={() => alert('Delete')} title='Delete' />
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
    height: 150,
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
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  button: {
    // borderWidth: 1,
    // borderColor: 'blue',
    margin: 5,
  },
})
