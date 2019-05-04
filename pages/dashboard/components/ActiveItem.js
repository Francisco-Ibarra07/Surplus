import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import firebase from 'react-native-firebase';
import Swipeout from 'react-native-swipeout';

export default class ActiveItem extends Component {

  constructor(props) {
    super(props);
  }

  // This method deletes the active item that was clicked on from the database
  handleDelete = () => {
    const activeItemsRef = this.props.onlineItemsRef;
    activeItemsRef.child(this.props.itemName).remove();
  }

  // Takes the user back to that "Food Item" page where he first added an item. The information on that page will be filled out with was previously there similar to the "Edit personal info" on the business settings page
  handleEdit = () => {
    const ref = this.props.onlineItemsRef.path + '/' + this.props.itemName
    const activeItemsRef = this.props.onlineItemsRef;
    const originalItemName = this.props.itemName;

    this.props.navigation.navigate('BusinessEditFood', { refToFoodItem: ref, activeItemsRef: activeItemsRef, originalItemName: originalItemName });
  }

  render() {

    // Buttons
    var swipeoutBtns = [
      {
        text: 'Edit',
        backgroundColor: '#0078D7',
        onPress: () => { this.handleEdit() }
      },
      {
        text: 'Delete',
        backgroundColor: '#D33B32',
        onPress: () => { this.handleDelete() },
      }
    ]

    return (
      <View style={styles.activeItemContainer}>
        <Swipeout right={swipeoutBtns}>
          <View style={styles.list}>
            <Text style={styles.title}>{this.props.itemName}</Text>
            <View style={styles.flexRow}>
              <Text style={styles.text}>Active Order #{this.props.activeOrderNumber}</Text>
              <Text style={styles.text}>Quantity Left: {this.props.quantityLeft}</Text>
            </View>
          </View>
        </Swipeout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeItemContainer: {
    // borderWidth: 1,
    height: 60,
    paddingBottom: 8,
    justifyContent: 'center',
  },
  flexRow: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    flex: 1,
    flexDirection: 'row',
    fontSize: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    marginRight: 8,
    marginTop: 5,
    // marginBottom: 5,
  },
  list: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: .5,
    borderColor: 'lightgray',
  },
});
