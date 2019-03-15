
import React, { Component } from 'react';
import {
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class BusinessHome extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text>Active Items</Text>
        </View>

        <View style={styles.itemList}>

        </View>

        <Button title="Log off" onPress={() => {
          // Firebase log off
          firebase.auth().signOut();
          this.props.navigation.navigate('GetStarted');
        }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'orange',
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    borderBottomWidth: 1,
    // borderWidth: 1,
    // borderColor: 'orange',
    borderColor: 'lightgray',
    paddingTop: 8,
    paddingBottom: 8,
  },
})