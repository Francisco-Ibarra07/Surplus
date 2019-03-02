import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class CustomerSignUp extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      email: '',
      phone: '',
      password: '',
    }
  }

  /*  
  TODO:
  Today:
    Put customer in correct group



    1) Put stuff in catch() method 
    2) Validate input. Figure out how to call a function from inside a function
    [DONE] 3)  Attempt login
    4) Sign out button/functionality
    5) When the user opens up the app, if they were signed in before, take them to the home page
  */
  // Create an account: Validates user input and if correct, sends info to Firebase
  handleSignUp = () => {

    // Get user input variables
    const { f_name, l_name, email, phone, password } = this.state;

    // Sends user input to Firebase. If successful, routes user to customer home page
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('CustomerDashboard');
        user_id = firebase.auth().currentUser.uid;

        // Get database reference to correct foler
        const ref = firebase.database().ref('customers/users/' + user_id);
        ref.update({
          'email': email,
          'first_name': f_name,
          'last_name': l_name,
          'phone_number': phone,
        });
      })
      .catch((error) => {
        console.log('error ', error)
      })
  }

  // Validate credentials
  validate = () => {
    const { f_name, l_name, email, phone, password } = this.state;
    if (f_name == "") {
      alert('Please fill in your first name.')
      return false;
    } else if (l_name == "") {
      alert('Please fill in your last name.')
      return false;
    } else if (email == "") {
      alert('Please fill in your email.')
      return false;
    } else if (phone == "") {
      alert('Please fill in your phone.')
      return false;
    } else if (password == "") {
      alert('Please fill in your password.')
      return false;
    }

    // Return true if everthing was filled properly
    return true;
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.containerA}>
          {/* Logo */}
          <View style={styles.logo}>
            <Image style={styles.image} source={require('./resources/Logo.jpg')} />
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Inputs */}
            <TextInput style={styles.input}
              placeholder="First Name"
              onChangeText={
                f_name => this.setState({ f_name })
              }
            />
            <TextInput style={styles.input}
              placeholder="Last Name"
              onChangeText={
                l_name => this.setState({ l_name })
              }
            />
            <TextInput style={styles.input}
              placeholder="Email"
              onChangeText={
                email => this.setState({ email })
              }
            />
            <TextInput style={styles.input}
              placeholder="Phone"
              onChangeText={
                phone => this.setState({ phone })
              }
            />
            <TextInput style={styles.input} secureTextEntry={true}
              placeholder="Password"
              onChangeText={
                password => this.setState({ password })
              }
            />
          </View>
        </View>

        <View style={styles.containerB}>
          {/* Buttons */}
          <View style={styles.buttons} >
            {/* Sign Up */}
            <TouchableOpacity onPress={this.handleSignUp}
              style={styles.button}
            >
              <Text style={{ color: 'white' }}>Sign Up</Text>
            </TouchableOpacity>

            {/* Sign up with FB */}
            <TouchableOpacity style={styles.whiteButton}>
              <Image
                source={require('./resources/facebooklogo.png')}
                style={styles.ImageIconStyle}
              />
              <Text style={{ color: '#D33B32' }}>Continue with Facebook</Text>
            </TouchableOpacity>

            {/* Sign up with G+ */}
            <TouchableOpacity style={styles.whiteButton}>
              <Image
                source={require('./resources/googlelogo.png')}
                style={styles.ImageIconStyle}
              />
              <Text style={{ color: '#D33B32' }}>Continue with Google</Text>
            </TouchableOpacity>
          </View>

          {/* Condition Statement */}
          <View style={styles.condition}>
            <Text style={styles.conditionText}>By tapping the Facebook icon, Google icon, or Signup button, you agree to our{" "}
              <Text onPress={() => this.props.navigation.navigate('TermsAndConditions')} style={{ color: '#3366BB' }}>
                Terms and Conditions
          </Text>
              {" "}and
          <Text onPress={() => this.props.navigation.navigate('PrivacyStatement')} style={{ color: '#3366BB' }}>
                {" "}Privacy Statement
          </Text>
              .
        </Text>
          </View>
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
    // height: '100%',
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  containerA: {
    width: '100%',

  },
  containerB: {
    width: '100%',

  },
  input: {
    // width: '100%',
    textAlign: 'left',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 8,
    // borderWidth: 1,
    // borderColor: 'blue',
    width: '100%',
    // height: 45,
  },
  buttons: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 10,
    // padding: 10,
    height: 45,
    width: '100%',
  },
  whiteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    // padding: 10,
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: '#777777',
  },
  image: {
    height: 80,
    resizeMode: 'contain',
    // borderWidth: 1,
    // borderColor: 'orange',
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
    width: '100%',
    paddingTop: 10,
    // borderWidth: 1,
    // borderColor: '#777777',
  },
  conditionText: {
    fontSize: 10,
  },

  form: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    alignItems: 'center',
  },
});