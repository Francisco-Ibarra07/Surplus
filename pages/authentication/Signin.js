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

        <View style={styles.containerA}>
          <Image style={styles.image} source={require('./AuthResources/surplus.jpg')} />
        </View>

        <View style={styles.form}>
          <TextInput style={styles.input}
            placeholder="Email"
          />
          <TextInput style={styles.input} secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('Signin')}>Forgot Password?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'blue',
    margin: 25,
  },
  input: {
    // height: 40,
    paddingTop: 10,
    paddingBottom: 8,
    width: '100%',
    textAlign: 'right',
    borderBottomWidth: 1
  },
  form: {
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'orange',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    // marginTop: 200,
    marginBottom: 10,
    // marginTop: 15,
    // padding: 10,
    height: 45,
    width: '100%',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'orange',
  },
  image: {
    height: 60,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 30,
    // marginBottom: 50
  },
  textButton: {
    color: '#0645AD',
    // marginTop: 10,
  },
});