import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

export default class WhoAreYou extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Are you a</Text>
          <Text style={styles.subtitle}>Customer or a Business Owner?</Text>
        </View>

        {/* Buttons */}
        <View style={styles.containerButton}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('C_Signup')}>
              <Image
                source={require('./AuthResources/customer.jpg')}
                style={styles.ImageIconStyle}
              />
              {/* <View style={styles.SeparatorLine} /> */}
              <Text style={styles.TextStyle}> Customer </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('B_Signup')}>
              <Image
                source={require('./AuthResources/business.jpg')}
                style={styles.ImageIconStyle}
              />
              {/* <View style={styles.SeparatorLine} /> */}
              <Text style={styles.TextStyle}> Business Owner </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 30
    // borderWidth: 1,
    // borderColor: 'blue',
    margin: 25,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: 25,
  },
  TextStyle: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: '#D33B32',

  },
  button: {
    // margin: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E7E8EC',
    overflow: 'hidden',
    width: '100%',
    // height: '100%',
    // borderColor: 'red',
    resizeMode: 'contain',
  },
  ImageIconStyle: {
    padding: 10,
    // margin: 10,
    height: 150,
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
    resizeMode: 'contain',
  },
  containerButton: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
  },
  containerTitle: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
  },
});