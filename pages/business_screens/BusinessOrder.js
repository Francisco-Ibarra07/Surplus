import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
      fulfilledItemsIsEmpty: true,
      checked1: false,
      checked2: false,
    };
  }

  // This function is used specifically for returning the index of a CheckBox element in an array containing CheckBox components
  findIndexOfCheckbox = (targetTitle, listToCheckFrom) => {
    let currentCheckBox
    for (let i = 0; i < listToCheckFrom.length; i++) {
      currentCheckBox = listToCheckFrom[i]

      if (targetTitle === currentCheckBox['props'].title) {
        return i // Return the index of this element from this list
      }
    }

    // Return undefined if the the element was not found
    return undefined
  }


  handleCheckBoxPress = (titleOfComponent, nameOfListThatItCameFrom) => {

    let listOfComponents
    if (nameOfListThatItCameFrom === 'PENDING_ITEMS') {

      // Grab the current list of pending items
      listOfComponents = this.state.pendingItemsComponents

      // Find the index of the pressed checkbox
      const indexOfTarget = this.findIndexOfCheckbox(titleOfComponent, listOfComponents)
      if (indexOfTarget === undefined) {
        console.log("This checkbox is not in this list")
        return
      }

      // Calculate the new index for this CheckBox to be placed in the fulfilled items list
      const newIndex = this.state.fulfilledItemsComponents.length

      // Create the new checkbox element with the updated boolean
      let updatedCheckboxObject = (<CheckBox
        key={newIndex}
        title={titleOfComponent}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={true}
        onPress={() => this.handleCheckBoxPress(titleOfComponent, 'FULFILLED_ITEMS')}
        checkedColor='#D33B32'
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray'
        }}
      />)

      // Remove the element from pending items list
      this.state.pendingItemsComponents.splice(indexOfTarget)

      // Check to see if pending items is empty
      const listIsEmpty = this.state.pendingItemsComponents.length === 0

      // Add the new checkbox into the fulfulled items list
      this.state.fulfilledItemsComponents.push(updatedCheckboxObject)
      this.setState({ fulfilledItemsIsEmpty: false, pendingItemsIsEmpty: listIsEmpty })
    }
    else if (nameOfListThatItCameFrom === 'FULFILLED_ITEMS') {
      // Grab the current list of pending items
      listOfComponents = this.state.fulfilledItemsComponents

      // Find the index of the pressed checkbox
      const indexOfTarget = this.findIndexOfCheckbox(titleOfComponent, listOfComponents)
      if (indexOfTarget === undefined) {
        console.log("This checkbox is not in this list")
        return
      }

      // Calculate the new index for this CheckBox to be placed back into the pending items list
      const newIndex = this.state.pendingItemsComponents.length

      // Create the new checkbox element with the updated boolean
      let updatedCheckboxObject = (<CheckBox
        key={newIndex}
        title={titleOfComponent}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={false}
        onPress={() => this.handleCheckBoxPress(titleOfComponent, 'PENDING_ITEMS')}
        checkedColor='#D33B32'
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray'
        }}
      />)

      // Remove the element from fulfilled items list
      this.state.fulfilledItemsComponents.splice(indexOfTarget)

      // Check to see if fulfilled items list is now empty after the splice
      const listIsEmpty = this.state.fulfilledItemsComponents.length === 0

      // Add the new checkbox back into the pending items list
      this.state.pendingItemsComponents.push(updatedCheckboxObject)
      this.setState({ pendingItemsIsEmpty: false, fulfilledItemsIsEmpty: listIsEmpty })
    }
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

        titleOfComponent = 'Sold Order #' + (i + 1).toString() + ': ' + nameOfPerson

        checkBoxComponents.push(
          <CheckBox
            key={i}
            title={titleOfComponent}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={false}
            onPress={() => activity.handleCheckBoxPress(titleOfComponent, 'PENDING_ITEMS')}
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
          {this.state.pendingItemsIsEmpty && (<Text style={{ textAlign: 'center', marginTop: 14 }}>There are currently no pending items</Text>)}

          {/* Fulfilled Items */}
          <View style={styles.title2}>
            <Text>Fulfilled Items</Text>
          </View>
          {!this.state.fulfilledItemsIsEmpty && this.state.fulfilledItemsComponents}
          {this.state.fulfilledItemsIsEmpty && (<Text style={{ textAlign: 'center', marginTop: 14 }}>There are currently no fulfilled items</Text>)}

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
