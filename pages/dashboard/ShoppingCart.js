
import React, { Component } from 'react';
import {
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import firebase from 'react-native-firebase';
import RedButton from '../components/RedButton';

export default class ShoppingCart extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        {/* Top part: Text and Tree Image */}
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.h1}>Yum! Enjoy your meal!</Text>
            <Text style={styles.h2}>You order helped save 0.8 grams of CO2!</Text>
          </View>
          <Image style={styles.topImage}
            source={require('./resources/tree.jpg')}
          />
        </View>

        {/* Shopping Cart Main */}
        <View style={styles.cart}>
          {/* Top */}
          <View style={styles.cartPreview}>
            <Image style={styles.foodImage}
              source={require('./resources/burrito.jpg')}
            />
            <View style={styles.pickUp}>
              <Text style={styles.pickUpText}>Pick-up by:</Text>
              <Text style={styles.pickUpTime}>8:00PM</Text>
            </View>
          </View>
          {/* Middle */}
          <View style={styles.cartList}>

          </View>
          {/* Bottom */}
          <View style={styles.cartSaving}>
          </View>
          <RedButton buttonText='Done' />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  top: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  h1: {
    color: '#D33B32',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  h2: {
    color: 'gray',
    fontSize: 12,
  },
  topImage: {
    // borderWidth: 1,
    // borderColor: 'red',
    position: 'relative',
    top: 1,
    resizeMode: 'contain',
    height: 80,
    width: 70,
  },
  cart: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    height: 300,
    backgroundColor: 'white',
    padding: 15,
  },
  cartPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  foodImage: {
    resizeMode: 'contain',
    height: 100,
    width: 150,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  pickUp: {
    width: '35%',
  },
  pickUpText: {
    color: 'gray',
    marginBottom: 5,
  },
  pickUpTime: {
    color: '#D33B32',
    fontSize: 24,
    fontWeight: 'bold',
  },
})