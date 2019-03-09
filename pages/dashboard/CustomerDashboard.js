import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';

import FoodItem from './components/FoodItem';
import firebase from 'react-native-firebase';

export default class CustomerDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userFirstName: '',
      isAnonymousUser: true,
    }

    if (!this.state.isAnonymousUser) {

      console.log("INSIDE");
      const user_id = firebase.auth().currentUser.uid;
      const ref = firebase.database().ref('customers/users/' + user_id);
      let userObject = '';

      // With the reference, query firebase to get a snapshot
      // Snapshot object contains structure of user's information
      const activity = this;
      ref.on('value', function (snapshot) {
        userObject = snapshot.val();
        console.log(userObject);
        console.log(userObject.first_name);

        activity.setState({
          userFirstName: userObject.first_name
        });
      });
    }
    else {
      console.log("OUTSIDE");

    }
  }

  signOut = () => {
    // Firebase log off
    firebase.auth().signOut();
    this.props.navigation.navigate('GetStarted');
  }

  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular Now</Text>
          <Text style={{ color: '#D33B32', fontSize: 10 }}>See All</Text>
          <Button title="Log off" onPress={this.signOut} />
        </View>

        <FoodItem itemName={this.state.userFirstName} />
        <FoodItem itemName="Dino Nuggets" />
        <FoodItem itemName="Pho" />
        <FoodItem itemName="Taco" />
        <FoodItem itemName="Burrito" />
        <FoodItem itemName="Fried Rice" />
        <FoodItem itemName="Pizza" />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // Title
  titleContainer: {
    alignItems: 'center',
    //borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
});