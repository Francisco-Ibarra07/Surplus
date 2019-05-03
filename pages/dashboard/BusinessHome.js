
import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
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
      emptyTextView: false,
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

      // If there are no active items for this restaurant, delete it from the 'online' folder
      if (snap === null) {
        activity.setState({ emptyTextView: true });
        const onlineFolder = firebase.database().ref('/online');
        onlineFolder.child(storeName).remove();
      }
      else {
        activity.setState({ emptyTextView: false });
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
              activeOrderNumber={i + 1}
            />)
        }

        activity.setState({ activeItemsView: activeItems });
      } // End of else
    }); // End of onlineItemsRef.on()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddFood')}>
          <Image style={styles.addButton}
            source={require('./resources/plus.png')}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text>Active Items</Text>
        </View>

        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.state.emptyTextView && (<Text> You currently have no active items </Text>)}
          </View>
          {!this.state.emptyTextView && this.state.activeItemsView}
        </ScrollView>

      </View>
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
  addButton: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black'
  },
})
