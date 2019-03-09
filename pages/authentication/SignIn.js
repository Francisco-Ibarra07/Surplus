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
      .then(() => {

        let user_id = firebase.auth().currentUser.uid;
        let customerRef = firebase.database().ref('customers/users/' + user_id);
        let userObject = '';


        // With the reference, query firebase to get a snapshot
        // Snapshot object contains structure of user's information
        const activity = this;
        customerRef.on('value', function (snapshot) {
          userObject = snapshot.val();

          // If userObject is null that means the user_id that we are looking for is NOT in the customer folder
          if (userObject != null) {

            // If the user_id matches an ID in the customer folder, the user is a customer
            if (userObject.account_type == 'CUSTOMER') {
              activity.props.navigation.navigate('CustomerDashboard', { anonymousFlag: false, });
            }
            else {
              console.log("CUSTOMER ACCOUNT TYPE INVALID");
            }
          }
          else {

            // Change reference to business folder
            let businessRef = firebase.database().ref('business/owners/' + user_id);

            // Get a snapshot of the business folder
            businessRef.on('value', function (snapshot) {
              userObject = snapshot.val();

              // If userObject is not null, then the user is a business account user
              if (userObject != null) {
                // Take user to business home page
                if (userObject.account_type == 'BUSINESS') {
                  activity.props.navigation.navigate('BusinessHome');
                }
                else {
                  console.log("BUSINESS ACCOUNT TYPE INVALID");
                }
              }
            });
          }
        });

        return true;
      })
      .catch((error) => {

        switch (error.code) {
          case "auth/invalid-email":
            alert("Your email or password is incorrect");
            break;
          default:
            alert("Unhandled error");
            console.log(error.code);
            break;
        }
      })
  }

  render() {
    return (
      <View style={styles.container} >

        <View style={styles.containerA}>
          <Image style={styles.image} source={require('./resources/surplus.jpg')} />
        </View>

        <View style={styles.form}>
          <TextInput style={styles.input} onChangeText={email => this.setState({ email })} placeholder="Email" autoCorrect={false} autoCapitalize='none'
          />
          <TextInput style={styles.input} secureTextEntry={true} onChangeText={password => this.setState({ password })} placeholder="Password" autoCorrect={false} autoCapitalize='none'
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.handleSignIn} style={styles.button} >
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.textButton} onPress={() => this.props.navigation.navigate('SignIn')}>Forgot Password?</Text>
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
    textAlign: 'left',
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