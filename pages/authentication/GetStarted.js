import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class GetStarted extends Component {

  static navigationOptions = {
    header: null
  }

  handleAnonymousSignUp = () => {
    console.log("Start signInAnonmyously()");
    // Call Firebase anonymous sign in
    firebase.auth().signInAnonymously().catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });

    this.props.navigation.navigate('CustomerDashboard', { anonymousFlag: true, });
  }


  render() {
    return (
      <View style={styles.container}>

        {/* Title and Spash Image */}
        <View style={styles.containerTop}>
          <Text style={styles.title}>Save BIG on</Text>
          <Text style={styles.title}>your next meal!</Text>
          <Image style={styles.image} source={{ uri: 'https://i.imgur.com/gij49Cq.png' }} />
        </View>

        {/* All the buttons */}
        <View style={styles.containerBottom}>

          {/* Get Started Button */}
          <TouchableOpacity style={styles.redButton} onPress={() => this.props.navigation.navigate('WhoAreYou')}>
            <Text style={{ color: '#fff' }}> Get Started </Text>
          </TouchableOpacity>

          {/* Browse as Guest Button */}
          <TouchableOpacity style={styles.whiteButton} onPress={this.handleAnonymousSignUp}>
            <Text style={{ color: '#505050' }}> Browse as Guest </Text>
          </TouchableOpacity>

          {/* Already have an account Button */}
          <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('SignIn')}>Already have an account?</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
  },
  containerTop: {
    marginBottom: 50,
  },
  title: {
    color: '#505050',
    fontSize: 25,
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: 300,
  },
  containerBottom: {
    alignItems: 'center',
    bottom: '4%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
  },
  redButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#D33B32',
    borderColor: '#D33B32',
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    marginBottom: 10,
    justifyContent: 'center',
  },
  whiteButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#656565',
    height: 45,
    justifyContent: 'center',
    marginBottom: 15,
  },
  textButton: {
    color: '#3366BB',
  },
});