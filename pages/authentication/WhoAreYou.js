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
        <Text style={styles.title}>Are you a</Text>
        <Text style={styles.subtitle}>Customer or a Business Owner?</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('C_Signup')}>
          <Image
            source={require('./customer.jpg')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Customer </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('B_Signup')}>
          <Image
            source={require('./business.jpg')}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Business Owner </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 15,
    paddingBottom: 15,
  },
  TextStyle: {
    textAlign: 'center',
    paddingBottom: 20,
    color: 'red'
  },
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E7E8EC'
  },
  ImageIconStyle: {
    padding: 10,
    margin: 10,
    height: 150,
    width: 300,
    resizeMode: 'contain',
  }
});