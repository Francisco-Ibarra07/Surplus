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
      checkBoxComponents: [],
      pendingItemsComponents: [],
      pendingItemsIsEmpty: true,
      fulfilledItemsComponents: [],
      fulfilledItemsIsEmpty: true,
      checked1: false,
      checked2: false,
    };
  }

  handleCheckBoxPress = (index) => {

    console.log("Handle Check box press")
    console.log("All components:", this.state.checkBoxComponents)
    console.log("Index pressed:", index)
    console.log("fulfilled section:", this.state.fulfilledItemsComponents)
    const components = this.state.checkBoxComponents

    let targetComponent = components[index]
    const bool = targetComponent['props'].checked
    const name = targetComponent['props'].title

    console.log("Target:", targetComponent)

    let updatedCheckbox = (<CheckBox
      key={index}
      title={name}
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checked={!bool}
      onPress={() => this.handleCheckBoxPress(index)}
      checkedColor='#D33B32'
      containerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
      }}
    />)

    console.log("Updated:", updatedCheckbox)
    components[index] = updatedCheckbox
    components.push(updatedCheckbox)
    components.push(updatedCheckbox)
    console.log("new array:", components)
    this.setState({ fulfilledItemsComponents: components })
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
            onPress={() => activity.handleCheckBoxPress(i)}
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

      activity.setState({ checkBoxComponents: checkBoxComponents, pendingItemsComponents: checkBoxComponents, pendingItemsIsEmpty: false })
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
          {!this.state.pendingItemsIsEmpty && this.state.checkBoxComponents}
          {this.state.pendingItemsIsEmpty && (<Text>There are currently no pending items</Text>)}

          {/* <CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='Sold Order #81: Pamela McDonald '
            checked={this.state.checked2}
            onPress={() => this.setState({ checked2: !this.state.checked2 })}
            checkedColor='#D33B32'
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray'
            }}
          /> */}

          {/* Fulfilled Items */}
          <View style={styles.title2}>
            <Text>Fulfilled Items</Text>
            {!this.state.fulfilledItemsIsEmpty && this.state.fulfilledItemsComponents}
            {this.state.fulfilledItemsIsEmpty && (<Text style={{ textAlign: 'center' }}>There are currently no fulfilled items</Text>)}
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
