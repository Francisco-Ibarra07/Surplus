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
      userId: '',
      isAnonymousUser: '',
      userFolderRef: '',
      onlineOwnersRefList: [],
      globalArray: [],
    }
    this.checkIfAnonymousUser = this.checkIfAnonymousUser.bind(this);
    this.populateRestaurantList = this.populateRestaurantList.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  checkIfAnonymousUser = () => {
    // Check if there was an anonymous flag that was set
    const isAnonymous = props.navigation.state.params.anonymousFlag;
    if (!isAnonymous) {
      this.setState({ isAnonymous: false });
      this.setState({ userId: firebase.auth().currentUser.uid });
      this.setState({ userFolderRef: firebase.database().ref('customers/users/' + this.state.userId) });

      console.log("NOT ANONYMOUS");
    }
    else {
      this.setState({ isAnonymous: true });
      console.log("Browsing as guest");
    }
  }

  // Reads the 'online' folder and populates an array with all the ID's of owners that have food for sale
  populateRestaurantList = () => {

    // Grab reference to 'online' folder
    const ref = firebase.database().ref('/online');
    const activity = this;
    var tempArray = [];
    ref.on('value', function (snapshot) {

      // Once we have all the names of available restaurants, look up each owner's id inside the '/business/owners/' folder
      let ownersFolderRef = '';
      const innerRef = snapshot.val();
      for (ownerId in innerRef) {

        // Grab reference to the current owner's ID folder and store in array
        ownersFolderRef = firebase.database().ref('/business/owners/' + ownerId);
        tempArray.push(ownersFolderRef);
      }

      return tempArray;
    });
  }

  signOut = () => {
    // Firebase log off
    firebase.auth().signOut();
    this.props.navigation.navigate('GetStarted');
  }

  render() {
    // const items = [];
    // for (var i = 0; i < 20; i++) {
    //   items.push(<FoodItem key={i} itemName={i + ' food'} />);
    // }
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular Now</Text>
          <Text style={{ color: '#D33B32', fontSize: 10 }}>See All</Text>
          <Button title="Log off" onPress={this.signOut} />
        </View>

        {/* {items} */}

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