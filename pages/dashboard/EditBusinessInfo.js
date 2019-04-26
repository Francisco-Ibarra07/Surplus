import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import RedButton from '../components/RedButton';

export default class EditBusinessInfo extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Your Business Information</Text>

        <View style={styles.form}>
          <Text style={styles.p}>Store Name</Text>
          <TextInput style={styles.input}
            placeholder="McDonalds"
            autoCorrect={false}
          // autoCapitalize='none'
          // onChangeText={
          //   f_name => this.setState({ f_name })
          // }
          />

          <Text style={styles.p}>Phone Number</Text>
          <TextInput style={styles.input}
            keyboardType="number-pad"
            placeholder="1234567890"
            autoCorrect={false}
          />

          <Text style={styles.p}>Adress</Text>
          <TextInput style={styles.input}
            placeholder="123 abc"
            autoCorrect={false}
          />

          <Text style={styles.p}>City</Text>
          <TextInput style={styles.input}
            placeholder="San Jose"
            autoCorrect={false}
          />

          <Text style={styles.p}>State</Text>
          <TextInput style={styles.input}
            placeholder="CA"
            autoCorrect={false}
          />

          <Text style={styles.p}>Zip</Text>
          <TextInput style={styles.input}
            keyboardType="number-pad"
            placeholder="12345"
            autoCorrect={false}
          />

          <RedButton
            style={{ marginBottom: 16 }}
            buttonText='Upload New Logo'
          />

          <RedButton
            buttonText='Save Changes'
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  form: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 16,
  },
  p: {
    textAlign: 'left',
    width: '100%',
  },
  h1: {
    fontSize: 20,
    marginBottom: 25,
    marginTop: 10,
  },
})
