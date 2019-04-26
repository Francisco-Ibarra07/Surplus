import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import RedButton from '../components/RedButton';

export default class BusinessWallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wallet}>
          <View style={styles.date}>
            <Text style={styles.day}>09/23/2356</Text>
          </View>
          <View style={styles.money}>
            <Text style={styles.h1}>Amount Made Today:</Text>
            <Text style={styles.h2}>$978.00</Text>
          </View>
        </View>
        <RedButton buttonText='Finish For Today' />
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
  wallet: {
    borderWidth: 3,
    borderColor: '#D33B32',
    borderRadius: 10,
    height: 300,
    overflow: 'hidden',
    marginBottom: 16,
  },
  date: {
    backgroundColor: '#D33B32',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {
    color: 'white',
    fontSize: 30,
  },
  h1: {
    fontSize: 18,
    padding: 15,
  },
  h2: {
    padding: 15,
    fontSize: 50,
  },
  money: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

