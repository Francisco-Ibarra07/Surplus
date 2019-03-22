import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';

import RestaurantItem from './components/RestaurantItem';
import firebase from 'react-native-firebase';

export default class CustomerDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      isAnonymousUser: '',
      userFolderRef: '',
      itemsView: [],
      restaurantObjects: [],
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
      var storeObjectList = [];
      var restaurantItems = [];

      // Store all the names of the stores in the 'online' folder as keys in an array
      for (store in snapOfOnlineRestaurantList) {
        // Contains just a list of strings of store names
        storeNames.push(store);
      }

      // Populate store name and store information into an array
      for (var i = 0; i < storeNames.length; i++) {
        storeObjectList.push({
          name: storeNames[i],
          storeInfo: snapOfOnlineRestaurantList[storeNames[i]].store_info,
          // items: snapOfOnlineRestaurantList[storeNames[i]].items,  // <-- can store a list of available items
        })
      }

      let storeName;
      let storeImage;
      // Populate RestaurantItem array
      for (var i = 0; i < storeObjectList.length; i++) {
        storeName = storeObjectList[i].name;
        storeImage = storeObjectList[i].storeInfo.image;

        restaurantItems.push(<RestaurantItem key={i} storeName={storeName} imageLink={storeImage} />);
      }

      // Store restaurant lists in 'state' variable
      activity.setState({ itemsView: restaurantItems, restaurantObjects: storeObjectList });
      // console.log(activity.state.itemsView);
      // console.log("Store objects", activity.state.restaurantObjects);
    });
  }

  // Firebase log off
  signOut = () => {
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
          {/* <Button title="Test" onPress={this.populateRestaurantList} /> */}

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