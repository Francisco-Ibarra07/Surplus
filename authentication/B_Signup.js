import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class B_SignUp extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Claim your business</Text>
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <View style={styles.container2}>
          <TextInput style={styles.input2}
            placeholder="Required"
          />
          <TextInput style={styles.input2}
            placeholder="Required"
          />
        </View>
        <TextInput style={styles.input}
          placeholder="Required"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>Claim</Text>
        </TouchableOpacity>
        <Text style={styles.condition}>By tapping the claim button, you agree to our Terms and Conditions and Privacy Statement.</Text>
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
    textAlign: 'left',
    borderBottomWidth: 1
  },
  input2: {
    height: 40,
    textAlign: 'left',
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
    width: '90%',
    padding: 25
  }
});