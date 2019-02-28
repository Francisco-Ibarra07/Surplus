import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import firebase from 'react-native-firebase';


export default class DummySignUp extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errorMessage: null,
    };
  }

  render() {


    function validateSignUp(){
      firebase.auth().createUserWithEmailAndPassword('Francisco@email.com', '123456')
      .then()
      .catch()
    }

    return (
      <View style={styles.container}>

        <TextInput style={styles.input} 
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        />
        <TextInput style={styles.input} 
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        />


        <Button title="Submit" color="#841584" onPress={validateSignUp}/>

        <Text> {this.state.username} </Text>
        <Text> {this.state.password} </Text>
        <Text> {this.state.errorMessage} </Text>
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
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
  }
});