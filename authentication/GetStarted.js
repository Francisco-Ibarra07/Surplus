import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

export default class GetStarted extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Save BIG on</Text>
        <Text style={styles.title}>your next meal!</Text>
        <Image style={styles.image} source={require('./GetStartedLogo.jpg')} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('WhoAreYou')}>
          <Text style={{ color: 'white' }}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('WhoAreYou')}>
          <Text style={{ color: 'white' }}>Browse as Guest</Text>
        </TouchableOpacity>
        <Button title="Already have an account?" onPress={() => this.props.navigation.navigate('Signin')} />
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
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  image: {
    height: 200,
    resizeMode: 'contain'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '85%',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    width: '85%',
    marginBottom: 15,
  }
});