import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

import RestaurantItem from './components/RestaurantItem';
import firebase from 'react-native-firebase';

export default class CustomerDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      isAnonymousUser: '',
      userObject: '',
      restaurantItemsView: [],
      restaurantObjects: [],
      emptyTextView: false,
    }
    this.checkIfAnonymousUser = this.checkIfAnonymousUser.bind(this);
    this.populateRestaurantList = this.populateRestaurantList.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.checkIfAnonymousUser();
    this.populateRestaurantList();
  }

  /**
   * Checks if a user is browsing as guest
   * If browsing guest, don't attempt to grab the user id and build the user object
   */
  checkIfAnonymousUser = () => {
    // Check if there was an anonymous flag that was set
    const isAnonymous = this.props.navigation.state.params.anonymousFlag;
    if (!isAnonymous) {
      this.setState({ isAnonymous: false });
      this.setState({ userId: firebase.auth().currentUser.uid });
      this.setState({ userObject: firebase.database().ref('customers/users/' + this.state.userId) });

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
      var restaurantItems = [];

      // Check if there are any restaurants offering food besides the _PLACEHOLDER_
      if (snapshot._childKeys.length === 1) {
        activity.setState({ emptyTextView: true }); // If the Placeholder is the only one, there are no available restaurants
      }
      else {
        activity.setState({ emptyTextView: false });
        // Store all the names of the stores in the 'online' folder as keys in an array
        for (store in snapOfOnlineRestaurantList) {
          // Add all store names
          if (store !== '_PLACEHOLDER_') {
            storeNames.push(store); // Contains just a list of strings of store names
          }
        }

        // Populate store name and store information into an array
        // Also populate an array containing all the food items that are up for sale by this store
        var storeObjectList = [];
        var storeItemsList = [];

        for (var i = 0; i < storeNames.length; i++) {
          storeObjectList.push({
            store_name: storeNames[i],
            store_info: snapOfOnlineRestaurantList[storeNames[i]].store_info,
            store_owner_id: snapOfOnlineRestaurantList[storeNames[i]].store_owner_id,
          });

          storeItemsList.push(snapOfOnlineRestaurantList[storeNames[i]].items);
        }

        // Populate RestaurantItem array
        for (var i = 0; i < storeObjectList.length; i++) {
          restaurantItems.push(
            <RestaurantItem
              key={i}
              anonymousFlag={activity.props.navigation.state.params.anonymousFlag}
              navigation={activity.props.navigation}
              storeObject={storeObjectList[i]}
              storeItemsList={storeItemsList[i]}
            />
          );
        }

        // Store restaurant lists in 'state' variable
        activity.setState({ restaurantItemsView: restaurantItems, restaurantObjects: storeObjectList });
      }

    });
  }

  // Firebase log off
  signOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('GetStarted');
  }

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View>
        <ScrollView>
          <SearchBar
            platform="ios"
            placeholder="What to eat, what to eat?"
            onChangeText={this.updateSearch}
            value={search}
            lightTheme={true}
            round={true}
            containerStyle={{
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              borderBottomWidth: 0
            }}
            inputStyle={{
              color: 'black'
            }}
            cancelButtonProps={{
              color: '#D33B32'
            }}
          />
          {/* Food Title */}
          <View style={styles.titleContainer}>
            <Text>Online Restaurants</Text>
            {/* <Text style={{ color: '#D33B32', fontSize: 10 }}>See All</Text> */}
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.state.emptyTextView && (<Text> There are currently no restaurants available </Text>)}
          </View>

          {!this.state.emptyTextView && this.state.restaurantItemsView}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Title
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
});
