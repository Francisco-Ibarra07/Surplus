import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class ActiveItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.activeItemContainer}>
        <Text style={styles.title}>{this.props.itemName}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.text}>Active Orders: {this.props.activeOrders}</Text>
          <Text style={styles.text}>Quantity Left: {this.props.quantityLeft}</Text>
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