
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
import RedButton from '../components/RedButton';

export default class ShoppingCart extends Component {
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

        {/* Shopping Cart Main Section */}
        <View style={styles.cart}>

          {/* Top Part of Section */}
          <View style={styles.cartPreview}>
            <Image style={styles.foodImage}
              source={require('./resources/burrito.jpg')}
            />
            <View style={styles.pickUp}>
              <Text style={styles.pickUpText}>Pick-up by:</Text>
              <Text style={styles.pickUpTime}>8:00PM</Text>
            </View>
          </View>

          {/* Middle Section: Order Summary to Total */}
          <View style={styles.cartList}>
            <View style={styles.summary}>
              <Text style={styles.summaryText}>Order Summary</Text>
              <Text style={styles.summaryText}>For: Jane Doe</Text>
            </View>

            {/* Items List */}
            <View style={styles.items}>
              <Text style={styles.itemText}>Burrito (Qnty: 1)</Text>
              <Text style={styles.itemText}>$4.00</Text>
            </View>

            <View style={styles.items}>
              <Text style={styles.itemText}>Chicken Pad Thai (Qnty: 2)</Text>
              <Text style={styles.itemText}>$9.00</Text>
            </View>

            {/* Convenience Fee */}
            <View style={styles.convenienceFee}>
              <Text style={styles.feeText}>Convenience Fee</Text>
              <Text style={styles.feeText}>$0.50</Text>
            </View>

            {/* Tax */}
            <View style={styles.tax}>
              <Text style={styles.taxText}>Tax (9.25%)</Text>
              <Text style={styles.taxText}>$1.20</Text>
            </View>

            {/* Total */}
            <View style={styles.total}>
              <Text style={styles.totalCost}> <Text style={{ fontWeight: 'bold' }}>Total: </Text> $14.20</Text>
            </View>
          </View>

          {/* Bottom */}
          <View style={styles.cartSaving}>
            <Image style={styles.pointsImage}
              source={require('./resources/points.jpg')}
            />
            <View style={styles.savings}>
              <Text style={styles.savingsText}><Text style={{ fontWeight: 'bold' }}>Today's Savings:</Text> $14.00</Text>
              <Text style={styles.savingsText}>5 more points until your next reward!</Text>
            </View>
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

  // TOP SECTION
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

  // CART SECTION
  cart: {
    borderWidth: .50,
    borderColor: 'red',
    borderRadius: 10,
    height: 450,
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

  // Pick Up
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

  // SUMMARY SECTION
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: .5,
    borderColor: '#D33B32',
  },
  summaryText: {
    // fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  itemText: {
    fontSize: 12,
  },
  convenienceFee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  feeText: {
    fontSize: 12,
  },
  tax: {
    borderBottomWidth: .5,
    borderColor: '#D33B32',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  taxText: {
    marginBottom: 5,
    fontSize: 12,
  },
  totalCost: {
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'right',
    fontSize: 12,
  },

  // SAVINGS SECTION
  cartSaving: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  pointsImage: {
    resizeMode: 'contain',
    height: 100,
    width: 100,
  },
  savings: {
    width: '50%',
    // borderWidth: 1,
    // borderColor: 'blue',
    // paddingTop: 15,
  },
  savingsText: {
    fontSize: 12,
  },
  totalSavings: {
    fontSize: 12,
    textAlign: 'right',
  },
})