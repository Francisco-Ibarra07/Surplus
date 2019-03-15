import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class AddFood extends Component {

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      description: '',
      category: '',
      quantity: '',
      picture: '',
    }
  }

  handleNewFoodItem = () => {

    const { itemName, description, category, quantity, picture } = this.state;
    // Check for good inputs
    if (itemName == "") {
      alert('Please fill in your first name.')
      return false;
    } else if (description == "") {
      alert('Please fill in your last name.')
      return false;
    } else if (category == "") {
      alert('Please fill in your email.')
      return false;
    } else if (quantity == "") {
      alert('Please fill in your phone.')
      return false;
    } else if (picture == "") {
      alert('Please fill in your password.')
      return false;
    }

    // Get user id
    user_id = firebase.auth().currentUser.uid;
    const ref = firebase.database().ref('/business/owners/' + user_id + '/restaurant/foods/' + itemName);

    // Update user properties
    ref.update({
      'description': description,
      'category': category,
      'quantity': quantity,
      'picture': picture,
    });
  }

  render() {
    return (
      <View>
        <TextInput style={styles.input}
          placeholder="Item name"
          autoCorrect={false}
          onChangeText={
            itemName => this.setState({ itemName })
          }
        />
        <TextInput style={styles.input}
          placeholder="Item Description"
          autoCorrect={false}
          onChangeText={
            description => this.setState({ description })
          }
        />
        <TextInput style={styles.input}
          placeholder="Category"
          autoCorrect={false}
          onChangeText={
            category => this.setState({ category })
          }
        />
        <TextInput style={styles.input}
          placeholder="Quantity"
          autoCorrect={false}
          onChangeText={
            quantity => this.setState({ quantity })
          }
        />
        <TextInput style={styles.input}
          placeholder="Picture"
          autoCorrect={false}
          onChangeText={
            picture => this.setState({ picture })
          }
        />

        <Text onPress={this.handleNewFoodItem}> Submit </Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'blue',
    // height: '100%',
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  containerA: {
    width: '100%',

  },
  containerB: {
    width: '100%',

  },
  input: {
    // width: '100%',
    textAlign: 'left',
    borderBottomWidth: 1,
    paddingTop: 12,
    paddingBottom: 8,
    // borderWidth: 1,
    // borderColor: 'blue',
    width: '100%',
    // height: 45,
  },
  buttons: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    // marginTop: 10,
    // padding: 10,
    height: 45,
    width: '100%',
  },
  whiteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    // padding: 10,
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: '#777777',
  },
  image: {
    height: 80,
    resizeMode: 'contain',
    // borderWidth: 1,
    // borderColor: 'orange',
  },
  ImageIconStyle: {
    padding: 10,
    marginLeft: 20,
    resizeMode: 'contain',
    width: 5,
    height: 10,
    position: 'absolute',
    left: 2,
  },
  condition: {
    width: '100%',
    paddingTop: 10,
    // borderWidth: 1,
    // borderColor: '#777777',
  },
  conditionText: {
    fontSize: 10,
  },

  form: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    alignItems: 'center',
  },
});
