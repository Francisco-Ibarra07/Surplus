import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class GetStarted extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerA}>
          <Text style={styles.title}>Save BIG on</Text>
          <Text style={styles.title}>your next meal!</Text>
          <Image
            style={styles.image}
            source={require('../../resources/dummy_images/pizza_sharing.png')}
          />
        </View>

        <View style={styles.containerB}>
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

            <Text style={{ color: '#000000' }}> Browse as Guest </Text>
          </TouchableOpacity>
          <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('Signin')}>Already have an account?</Text>
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
    // paddingTop: 150,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  containerA: {
    // borderWidth: 1,
    paddingTop: 125,
  },
  containerB: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  image: {
    // marginBottom: 50,
    width: 300,
    height: 200
  },
  redButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#D33B32',
    height: 45,
    justifyContent: 'center',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D33B32'
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
  },
  textButton: {
    color: '#3366BB',
    // marginTop: 10,
  },
});