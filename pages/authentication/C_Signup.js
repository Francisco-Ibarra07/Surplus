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
        <Image style={styles.image} source={require('./AuthResources/Logo.jpg')} />
        <TextInput style={styles.input}
          placeholder="First Name"
        />
        <TextInput style={styles.input}
          placeholder="Last Name"
        />
        <TextInput style={styles.input}
          placeholder="Email"
        />
        <TextInput style={styles.input}
          placeholder="Phone"
        />
        <TextInput style={styles.input} secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton}>
          <Image
            source={require('./AuthResources/facebooklogo.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{ color: '#D33B32' }}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton}>
          <Image
            source={require('./AuthResources/googlelogo.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{ color: '#D33B32' }}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.condition}>By tapping the Faebook icon, Google icon, or Signup button, you agree to our{" "}
          <Text onPress={() => this.props.navigation.navigate('TermsAndConditions')} style={{ color: '#0645AD' }}>
            Terms and Conditions
          </Text>
          {" "}and
          <Text onPress={() => this.props.navigation.navigate('PrivacyStatement')} style={{ color: '#0645AD' }}>
            {" "}Privacy Statement
          </Text>
          .
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '85%',
  },
  whiteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '85%',
    borderWidth: 1,
    borderColor: '#777777',
  },
  image: {
    height: 120,
    resizeMode: 'contain',
  },
  ImageIconStyle: {
    padding: 10,
    marginLeft: 20,
    resizeMode: 'contain',
    width: 5,
    height: 10,
    position: 'absolute',
    left: 2,
  },
  condition: {
    fontSize: 10,
    width: '85%',
    paddingTop: 15,
  },
});