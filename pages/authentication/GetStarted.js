import React, { Component } from 'react';
import {
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';

export default class GetStarted extends Component {

  render() {
    return (
      <View style={styles.container}>
      
        <Text style={styles.title}>Save BIG on</Text>
        <Text style={styles.title}>your next meal!</Text>
        <Image 
          style={{width: 300, height: 200}}
          source={{uri: 'https://i.imgur.com/gij49Cq.png'}} 
        />
        {/* <Button title="Get Started" onPress={() => this.props.navigation.navigate('WhoAreYou')} /> */}
        <Button title="Browse as Guest" />


        <TouchableOpacity
         style={styles.button}
         onPress={() => this.props.navigation.navigate('WhoAreYou')} >

         <Text style={{color: '#fff'}}> Get Started </Text>
       </TouchableOpacity>

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
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#ff2700',
    color: '#fff',
    height: 45,
    justifyContent: 'center',
    marginRight: 25,
    marginLeft: 25,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  }
});