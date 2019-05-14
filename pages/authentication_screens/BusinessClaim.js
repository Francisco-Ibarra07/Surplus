import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker'

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
      isVerified: false,
      businessOwner: props.navigation.state.params.signUpInfo,
      photo: null,
      photoDownloadURL: '',
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  handleBusinessClaim = () => {
    const { store_name, store_phone, address, city, state, zipcode, photo } = this.state;

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
    } else if (photo === null) {
      alert('Please add a photo of your restaurant logo');
      return false;
    }

    // Sign up user
    firebase.auth().createUserWithEmailAndPassword(this.state.businessOwner.email_address, this.state.businessOwner.pwd)
      .then(() => {

        // Get database reference to correct folder
        const user_id = firebase.auth().currentUser.uid;
        const owner = firebase.database().ref('business/owners/' + user_id);
        const restaurant = firebase.database().ref('business/owners/' + user_id + '/restaurant');

        // Update user properties
        owner.update({
          'email': this.state.businessOwner.email_address,
          'first_name': this.state.businessOwner.first_name,
          'last_name': this.state.businessOwner.last_name,
          'phone_number': this.state.businessOwner.phone_number,
          'account_type': this.state.businessOwner.account_type,
        });

        // Update store properties
        restaurant.update({
          'store_name': this.state.store_name,
          'store_phone': this.state.store_phone,
          'address': this.state.address,
          'city': this.state.city,
          'state': this.state.state,
          'zipcode': this.state.zipcode,
          'isVerified': this.state.isVerified,
        })

        // Email notification to admin
        //firebase.auth.sendPasswordResetEmail("koltokaspi@desoz.com");

        this.props.navigation.navigate('BusinessVerify', { photo: photo });
        return true;
      })
      .catch((error) => {
        // Handle error code
        switch (error.code) {
          case "auth/invalid-email":
            alert("Your email is formatted incorrectly");
            break;
          case "auth/weak-password":
            alert("Your password needs to be a minimum of 6 characters");
            break;
          case "auth/email-already-in-use":
            alert("That email already exists");
            break;
          case "auth/network-request-failed":
            alert("No internet connection");
            break;
          default:
            alert("pages/dashboard/BC.js#default");
            console.log(error.code);
            break;
        }

        return false;
      })
  }

  handlePhotoUpload = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
        alert('Photo successfully uploaded!');
      }
    });
  }

  render() {
    const { photo } = this.state;

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
              keyboardType="number-pad"
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
                keyboardType="number-pad"
                placeholder="Zip"
                autoCorrect={false}
                onChangeText={
                  zipcode => this.setState({ zipcode })
                }
              />
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#147efb',
              borderRadius: 5,
              marginTop: 16,
            }}>
            <Button title="Upload Restaurant Logo" onPress={this.handlePhotoUpload} />
          </View>
          {photo && (
            <View style={styles.imageBox}>
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: photo.uri }} />
            </View>
          )}
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
    width: '50%',
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
  imageBox: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
});
