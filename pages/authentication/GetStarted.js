import React, { Component } from 'react';
import {
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

export default class GetStarted extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Save BIG on</Text>
        <Text style={styles.title}>your next meal!</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/gij49Cq.png' }}
        />

        {/* Red Button */}
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => this.props.navigation.navigate('WhoAreYou')} >

          <Text style={{ color: '#fff' }}> Get Started </Text>
        </TouchableOpacity>

        {/* White Button */}
        <TouchableOpacity
          style={styles.whiteButton}
          onPress={() => this.props.navigation.navigate('DummySignUp')}
        >

          <Text style={{ color: '#000000' }}> Browse as guest </Text>
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
    paddingTop: 150
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  image: {
    marginBottom: 50,
    width: 300,
    height: 200
  },
  redButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#ff2700',
    height: 45,
    justifyContent: 'center',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  whiteButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    height: 45,
    justifyContent: 'center',
    marginRight: 25,
    marginLeft: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#777777',
    marginBottom: 15
  }
});