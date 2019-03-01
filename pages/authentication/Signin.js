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
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('./resources/surplus.jpg')} />
        <TextInput style={styles.input}
          placeholder="Email"
        />
        <TextInput style={styles.input} secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('C_Dashboard')}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('Signin')}>Forgot Password?</Text>
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
    textAlign: 'right',
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
  textButton: {
    color: '#0645AD',
    marginTop: 10,
  },
});