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
      itemsView: [],
      listOfOnlineStoreNameKeys: [],
      listOfAvailableMerchants: [],
    }
    this.checkIfAnonymousUser = this.checkIfAnonymousUser.bind(this);
    this.populateRestaurantList = this.populateRestaurantList.bind(this);
    this.signOut = this.signOut.bind(this);

    this.populateRestaurantList();
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

    // Grab all restaurants in the 'online' folder
    ref.on('value', function (snapshot) {
      const snapOfOnlineRestaurantList = snapshot.val();
      var storeNames = [];

      // Store all the names of the stores in the 'online' folder as keys in an array
      for (store in snapOfOnlineRestaurantList) {
        storeNames.push(store);
        // console.log(store);
      }

      activity.setState({ listOfAvailableMerchants: [] });
      for (var i = 0; i < storeNames.length; i++) {
        activity.state.listOfAvailableMerchants.push({
          name: storeNames[i],
          storeInfo: snapOfOnlineRestaurantList[storeNames[0]].store_info,
        })
      }

      console.log(activity.state.listOfAvailableMerchants);
    }).setTim;
  }

  signOut = () => {
    // Firebase log off
    firebase.auth().signOut();
    this.props.navigation.navigate('GetStarted');
  }

  componentDidMount = () => {

    const activity = this;
    setTimeout(function () {

      console.log("before", activity.state.itemsView);

      for (var i = 0; i < 3; i++) {
        activity.state.itemsView.push(<FoodItem key={i} itemName={activity.state.listOfAvailableMerchants[i].name} />);
      }
      console.log("after", activity.state.itemsView);
      console.log("done loop");
      activity.forceUpdate();
    }, 2000);

    console.log("done timeout");

  }

  render() {
    return (
      <ScrollView>
        {/* Food Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular Now</Text>
          <Text style={{ color: '#D33B32', fontSize: 10 }}>See All</Text>
          <Button title="Log off" onPress={this.signOut} />
          <Button title="Test" onPress={this.populateRestaurantList} />

        </View>

        {this.state.itemsView}
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