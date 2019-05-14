import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'react-native-firebase';

export default class BusinessSettings extends Component {
  goToOtherScreen(i) {
    if (i === 0) {
      this.props.navigation.navigate('EditOwnersInfo');
    } else if (i === 1) {
      this.props.navigation.navigate('EditRestaurantInfo');
    } else if (i === 2) {
      // Firebase log off
      Alert.alert(
        'Log Off',
        'Do you want to log off?',
        [
          { text: 'Cancel', onPress: () => { return null } },
          {
            text: 'Confirm', onPress: () => {
              firebase.auth().signOut();
              this.props.navigation.navigate('GetStarted')
            }
          },
        ],
        { cancelable: false }
      )
    }
  }
  render() {

    const list = [
      {
        title: 'Edit Personal Information',
        right: 'chevron-right',
        left: 'portrait'
      },
      {
        title: 'Edit Restaurant Information',
        right: 'chevron-right',
        left: 'store'
      },
      {
        title: 'Log Off',
        right: 'chevron-right',
        left: 'call-end'
      },
    ]

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Settings</Text>
        </View>
        <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                rightIcon={{ name: item.right }}
                leftIcon={{ name: item.left }}
                onPress={() => this.goToOtherScreen(i)}
              />
            ))
          }
        </View>
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
})
