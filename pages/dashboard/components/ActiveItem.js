import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

export default class ActiveItem extends Component {

  constructor(props) {
    super(props);
  }

  // This method deletes the active item that was clicked on from the database 
  handleDelete = () => {
    const key = this.props.indexInList;
    const activeItemsRef = this.props.onlineItemsRef;
    console.log('ref:', activeItemsRef);
    console.log('key val:', key);
    console.log('item name:', this.props.itemName);
    activeItemsRef.child(this.props.itemName).remove();
  }

  render() {
    return (
      <View style={styles.activeItemContainer}>
        <Text style={styles.title}>{this.props.itemName}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.text}>Active Orders: {this.props.activeOrders}</Text>
          <Text style={styles.text}>Quantity Left: {this.props.quantityLeft}</Text>
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