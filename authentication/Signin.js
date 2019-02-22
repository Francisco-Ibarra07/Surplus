import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

export default class Signin extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('./surplus.jpg')} />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
        <Button title="Forgot Password?" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '85%',
    textAlign: 'left',
    borderBottomWidth: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 200,
    marginBottom: 15,
    padding: 10,
    width: '85%',
  },
  image: {
    height: 60,
    resizeMode: 'contain',
    marginTop: 70,
    marginBottom: 50
  },
});