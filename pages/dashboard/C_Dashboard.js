import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

export default class C_Dashboard extends Component {
  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular Now</Text>
          <Text style={{ color: '#D33B32', fontSize: 10 }}>See All</Text>
        </View>

        {/* <FoodItem /> */}
        <View style={styles.foodContainer}>
          <View style={styles.foodItem}>
            <View style={styles.foodImage}>
              <Image style={styles.foodImageChild} source={require('./DashboardResources/pizza.jpg')} />
            </View>
            <View style={styles.foodDescription}>
              <View style={styles.foodTitle}>
                <Text>Combo Pizza</Text>
                <Text>Pick-up 1AM - 3AM</Text>
              </View>
              <View style={styles.foodStock}>
                <Text>Sammy G's • 0.3mi</Text>
                <View style={styles.foodStock2}>
                  <Text>8 left {" "}</Text>
                  <Text>2 claimed</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
    margin: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },

  // Food List
  foodContainer: {
    // borderWidth: 1,
  },
  foodItem: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 125,
    margin: 15,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  foodImage: {
    // borderWidth: 1,
    height: '100%',
    width: '40%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  foodImageChild: {
    height: '100%',
    width: '100%'
  },
  foodDescription: {
    height: '100%',
    // borderWidth: 1,
    paddingLeft: 10,
    width: '60%',
    flex: 1,
    justifyContent: 'space-between',
  },
  foodStock2: {
    flexDirection: 'row',
  },
});