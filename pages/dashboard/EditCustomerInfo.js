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

export default class EditCustomerInfo extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Your Information</Text>

        <View style={styles.form}>
          <Text style={styles.p}>First Name</Text>
          <TextInput style={styles.input}
            placeholder="Nhat"
            autoCorrect={false}
          // autoCapitalize='none'
          // onChangeText={
          //   f_name => this.setState({ f_name })
          // }
          />

          <Text style={styles.p}>Last Name</Text>
          <TextInput style={styles.input}
            placeholder="Nguyen"
            autoCorrect={false}
          />

          <Text style={styles.p}>Email</Text>
          <TextInput style={styles.input}
            keyboardType="email-address"
            placeholder="n@g.com"
            autoCorrect={false}
          />

          <Text style={styles.p}>Phone</Text>
          <TextInput style={styles.input}
            keyboardType="number-pad"
            placeholder="1234567890"
            autoCorrect={false}
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
