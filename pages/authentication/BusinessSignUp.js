
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class BusinessSignUp extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
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
          </View>

        </View>

        <View style={styles.condition}>
          <TouchableOpacity style={styles.button}> 
            <Text style={{ color: 'white' }}>Claim </Text>
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
    width: '20%',
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
    fontSize: 25
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