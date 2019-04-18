
import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import firebase from 'react-native-firebase';
import ActiveItem from './components/ActiveItem';

export default class BusinessHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      businessOwnerObject: '',
      activeItemsView: [],
    }

    this.initializeUserObjects = this.initializeUserObjects.bind(this);
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  componentDidMount() {
    this.initializeUserObjects();
  }

  initializeUserObjects = () => {
    const id = firebase.auth().currentUser.uid;
    this.setState({ userId: id });

    const userObjectRef = firebase.database().ref('/business/owners/' + id);
    const activity = this;
    userObjectRef.on('value', function (snapshot) {

      const snap = snapshot.val();
      activity.setState({ businessOwnerObject: snap });

      activity.populateActiveItems(activity.state.businessOwnerObject.restaurant.store_name, activity);
    });
  }

  /**
   * This method populates a variable called 'activeItemsView' which is used as the list for the View to use.
   */
  populateActiveItems = (storeName, activity) => {

    // Get reference to correct folder (reference by store name inside the 'online' database folder)
    const onlineItemsRef = firebase.database().ref('/online/' + storeName + '/items');

    onlineItemsRef.on('value', function (snapshot) {
      const snap = snapshot.val();
      console.log("Items:", snap);

      // Get string names of available food items
      var foodNames = [];
      for (food in snap) {
        foodNames.push(food);
      }

      // Grab objects and use the string names as the key
      var individualFoodObjects = [];
      for (var i = 0; i < foodNames.length; i++) {
        individualFoodObjects.push(snap[foodNames[i]]);
      }

      // Create a list of ActiveItem's to be shown by the View
      var activeItems = [];
      var currentFood;
      for (var i = 0; i < individualFoodObjects.length; i++) {
        currentFood = individualFoodObjects[i];

        activeItems.push(
          <ActiveItem
            key={i}
            indexInList={i}
            onlineItemsRef={onlineItemsRef}
            quantityLeft={currentFood.item_quantity}
            itemName={currentFood.item_name}
            activeOrders='8'
          />)
      }

      activity.setState({ activeItemsView: activeItems });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text>Active Items</Text>
        </View>

        {this.state.activeItemsView}
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
    marginBottom: 8,
  },
})