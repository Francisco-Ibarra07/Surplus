import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

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
    this.props.navigation.navigate('BusinessEditFood', { refToFoodItem: ref });
  }

  render() {
    return (
      <View style={styles.activeItemContainer}>
        <Text style={styles.title}>{this.props.itemName}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.text}>Active Order #{this.props.activeOrderNumber}</Text>
          <Text style={styles.text}>Quantity Left: {this.props.quantityLeft}</Text>
          <Button title="Edit" onPress={this.handleEdit} />
          <Button title="Delete" onPress={this.handleDelete} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeItemContainer: {
    // borderWidth: 1,
    // height: 75,
    marginBottom: 5,
  },
  flexRow: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    flex: 1,
    flexDirection: 'row',
    fontSize: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    marginRight: 8,
    marginTop: 5,
    marginBottom: 5,
  }
});