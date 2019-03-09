import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class BusinessClaim extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store_name: '',
      store_phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      businessOwner: props.navigation.state.params.signUpInfo,
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  handleBusinessClaim = () => {
    const { store_name, store_phone, address, city, state, zipcode, businessOwner } = this.state;

    // Make sure all fields are filled in
    if (store_name == "") {
      alert('Please fill the store name.');
      return false;
    } else if (store_phone == "") {
      alert('Please fill in the store phone number.');
      return false;
    } else if (address == "") {
      alert('Please fill in the store address.');
      return false;
    } else if (city == "") {
      alert('Please fill in the city location');
      return false;
    } else if (state == "") {
      alert('Please fill in the state.');
      return false;
    } else if (zipcode == "") {
      alert('Please fill in the zipcode.');
      return false;
    }

    // Email all inputted fields to admin
    console.log(this.state);
    this.props.navigation.navigate('BusinessVerify');
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.containerChild}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Claim your business</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput style={styles.input}
              placeholder="Store Name"
              autoCorrect={false}
              onChangeText={
                store_name => this.setState({ store_name })
              }
            />
            <TextInput style={styles.input}
              placeholder="Phone Number"
              autoCorrect={false}
              onChangeText={
                store_phone => this.setState({ store_phone })
              }
            />
            <TextInput style={styles.input}
              placeholder="Address"
              autoCorrect={false}
              onChangeText={
                address => this.setState({ address })
              }
            />
            <TextInput style={styles.input}
              placeholder="City"
              autoCorrect={false}
              onChangeText={
                city => this.setState({ city })
              }
            />
            <View style={styles.container2}>
              <TextInput style={styles.input2}
                placeholder="State"
                autoCorrect={false}
                onChangeText={
                  state => this.setState({ state })
                }
              />
              <TextInput style={styles.input2}
                placeholder="Zip"
                autoCorrect={false}
                onChangeText={
                  zipcode => this.setState({ zipcode })
                }
              />
            </View>
          </View>

        </View>

        <View style={styles.condition}>
          <TouchableOpacity style={styles.button} onPress={this.handleBusinessClaim}>
            <Text style={{ color: 'white' }}>Claim</Text>
          </TouchableOpacity>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'pink',
    margin: 25,
  },
  container2: {
    flexDirection: 'row'
  },
  input: {
    // height: 40,
    paddingTop: 10,
    paddingBottom: 8,
    width: '100%',
    textAlign: 'left',
    borderBottomWidth: 1
  },
  input2: {
    // height: 40,
    paddingTop: 10,
    paddingBottom: 8,
    textAlign: 'left',
    width: '30%',
    borderBottomWidth: 1
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    height: 45,
    // marginTop: 100,
    // padding: 10,
    width: '100%',
  },
  title: {
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingBottom: 50,
  },
  form: {
    // borderWidth: 1,
    // borderColor: 'orange',
    width: '100%',
  },
  titleText: {
    // marginBottom: 50,
    fontSize: 30
  },
  condition: {
    fontSize: 10,
    width: '100%',
    paddingTop: 15,
  },
  conditionText: {
    fontSize: 10,
    paddingTop: 10,
  },
  containerChild: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});