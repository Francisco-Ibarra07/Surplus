// General Sign In page
// Both the Business Owner and Customer will use this page to sign in
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
import firebase from 'react-native-firebase';

export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  
  handleSignIn = () => {

    // Get user input variables
    const { email, password } = this.state;

    // Sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('CustomerDashboard'))
      .catch()

  }


  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('./resources/surplus.jpg')} />
        <TextInput style={styles.input}
          placeholder="Email"
          onChangeText={
            email => this.setState({ email })
          }
        />
        <TextInput style={styles.input} secureTextEntry={true}
          placeholder="Password"
          onChangeText={
            password => this.setState({ password })
          }
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('SignIn')}>Forgot Password?</Text>
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
