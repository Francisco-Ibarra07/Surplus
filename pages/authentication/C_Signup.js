import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class WhoAreYou extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('./Logo.jpg')} />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input} secureTextEntry={true}
          placeholder="Minimum 8 Characters"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Continue with Google</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '85%',
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
});