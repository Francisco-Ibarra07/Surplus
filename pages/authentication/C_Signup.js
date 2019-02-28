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

  validate = () => {
    const { f_name, l_name, email, phone, password } = this.state;
    if (f_name == "") {
      alert('Please fill in your first name.')
    } else if (l_name == "") {
      alert('Please fill in your last name.')
    } else if (email == "") {
      alert('Please fill in your email.')
    } else if (phone == "") {
      alert('Please fill in your phone.')
    } else if (password == "") {
      alert('Please fill in your password.')
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('./AuthResources/Logo.jpg')} />
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

        {/* Sign Up */}
        <TouchableOpacity onPress={this.validate}
          style={styles.button}
        >
          <Text style={{ color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>

        {/* Sign up with FB */}
        <TouchableOpacity style={styles.whiteButton}>
          <Image
            source={require('./AuthResources/facebooklogo.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{ color: '#D33B32' }}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Sign up with G+ */}
        <TouchableOpacity style={styles.whiteButton}>
          <Image
            source={require('./AuthResources/googlelogo.png')}
            style={styles.ImageIconStyle}
          />
          <Text style={{ color: '#D33B32' }}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Condition Statement */}
        <Text style={styles.condition}>By tapping the Faebook icon, Google icon, or Signup button, you agree to our{" "}
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