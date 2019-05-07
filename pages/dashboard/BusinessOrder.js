import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import firebase from 'react-native-firebase'
export default class BusinessMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      solidItems: [],
      pendingItemsComponents: [],
      pendingItemsIsEmpty: true,
      fulfilledItemsComponents: [],
      checked1: false,
      checked2: false,
    };
  }

  populateItems = () => {

    const ownerID = firebase.auth().currentUser.uid

    const refToSoldFolder = firebase.database().ref('/business/owners/' + ownerID + '/sold')
    const activity = this
    refToSoldFolder.on('value', function (snapshot) {

      const snap = snapshot.val()

      if (snap === null || snap === undefined) {
        console.log("No items sold")
        activity.setState({ pendingItemsIsEmpty: true })
        return
      }

      console.log("Snap of sold:", snap)

      let soldItemTags = []
      for (let tag in snap) {
        soldItemTags.push(tag)
      }

      let checkBoxComponents = []
      let currentSoldItem = undefined
      let nameOfPerson = ''
      let titleOfComponent = ''
      for (let i = 0; i < soldItemTags.length; i++) {
        currentSoldItem = snap[soldItemTags[i]]

        nameOfPerson = currentSoldItem.first_name + ' ' + currentSoldItem.last_name

        titleOfComponent = 'Order #' + i.toString() + ': ' + nameOfPerson
        console.log(titleOfComponent)

        checkBoxComponents.push(
          <CheckBox
            key={i}
            title={titleOfComponent}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='#D33B32'
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray'
            }}
          />
        )
      }

      console.log(checkBoxComponents)
      activity.setState({ pendingItemsComponents: checkBoxComponents, pendingItemsIsEmpty: false })
    })

  }

  componentDidMount() {
    this.populateItems()
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text onPress={() => this.props.navigation.navigate('AddFood')}>Add Item</Text> */}
        <ScrollView>
          {/* Pending Items */}
          <View style={styles.title}>
            <Text>Pending Items</Text>
          </View>
          {!this.state.pendingItemsIsEmpty && this.state.pendingItemsComponents}
          {this.state.pendingItemsIsEmpty && (<Text>There are currently no pending items</Text>)}

          <CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='Order #81: Pamela McDonald '
            // checked={this.state.checked}
            // onPress={() => this.setState({ checked: !this.state.checked })}
            checked={this.state.checked2}
            onPress={() => this.setState({ checked2: !this.state.checked2 })}
            checkedColor='#D33B32'
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray'
            }}
          />

          {/* Fulfilled Items */}
          <View style={styles.title2}>
            <Text>Fulfilled Items</Text>
          </View>

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
    // marginBottom: 8,
  },
  title2: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 16,
  },
})
