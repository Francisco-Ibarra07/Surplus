import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class B_SignUp extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Claim your business</Text>
        <TextInput style={styles.input}
          placeholder="Store Name"
        />
        <TextInput style={styles.input}
          placeholder="Phone Number"
        />
        <TextInput style={styles.input}
          placeholder="Address"
        />
        <TextInput style={styles.input}
          placeholder="City"
        />
        <View style={styles.container2}>
          <TextInput style={styles.input2}
            placeholder="State"
          />
          <TextInput style={styles.input2}
            placeholder="Zip"
          />
        </View>
        <TextInput style={styles.input}
          placeholder="Pick-up Time"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }} onPress={() => this.props.navigation.navigate('BusinessDash')}>Claim</Text>

        </TouchableOpacity>
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
  container2: {
    flexDirection: 'row'
  },
  input: {
    height: 40,
    width: '85%',
    textAlign: 'right',
    borderBottomWidth: 1
  },
  input2: {
    height: 40,
    textAlign: 'right',
    width: '42.5%',
    borderBottomWidth: 1
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    marginTop: 100,
    padding: 10,
    width: '85%',
  },
  title: {
    marginBottom: 50,
    fontSize: 25
  },
  condition: {
    fontSize: 10,
    width: '85%',
    paddingTop: 15,
  }
});