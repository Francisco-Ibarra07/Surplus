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

export default class BusinessMenu extends Component {

  constructor() {
    super();

    this.state = {
      checked1: false,
      checked2: false,
    };
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
          <CheckBox
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='Order #80: Julie Foster'
            // checked={this.state.checked}
            // onPress={() => this.setState({ checked: !this.state.checked })}
            checked={this.state.checked1}
            onPress={() => this.setState({ checked1: !this.state.checked1 })}
            checkedColor='#D33B32'
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgray'
            }}
          />
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
