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
      ownersUid: '',
      ownersAccountInfo: '',
      foodItemName: '',
      description: '',
      category: '',
      quantity: '',
      picture: '',
    }
  }

  handleNewFoodItem = () => {

    const { foodItemName, description, category, quantity, picture } = this.state;
    // Check for good inputs
    if (foodItemName == "") {
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

    // Initialize auth variables
    const user_id = firebase.auth().currentUser.uid;
    this.setState({ ownersUid: user_id });
    const refToOwnersAccountInfo = firebase.database().ref('/business/owners/' + user_id);
    const activity = this;

    refToOwnersAccountInfo.on('value', function (snapshot) {
      activity.setState({ ownersAccountInfo: snapshot.val() });
      const storeName = activity.state.ownersAccountInfo.restaurant.store_name;

      // Place in store information folder in correct folder
      const refToPlaceInOnlineFolder = firebase.database().ref('/online/' + storeName);
      refToPlaceInOnlineFolder.update({
        'store_info': activity.state.ownersAccountInfo.restaurant,
        'store_owner_id': user_id,
      });

      // Place new item into 'items' folder
      const refToNewItemFolder = firebase.database().ref('/online/' + storeName + '/items/' + foodItemName);
      refToNewItemFolder.update({
        'item_name': foodItemName,
        'item_description': description,
        'item_category': category,
        'item_quantity': quantity,
        'item_image': picture,
      });

      alert("New food item added");
      activity.props.navigation.navigate('BusinessHome');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Add New Item</Text> */}
        {/* Form */}
        <View style={styles.form}>

          <View style={styles.form1}>
            <View style={styles.form1a}>

            </View>
            <View style={styles.form1b}>
              <Text>Item Name</Text>
              <TextInput style={styles.input}
                placeholder="Required"
                autoCorrect={false}
                onChangeText={
                  foodItemName => this.setState({ foodItemName })
                } />
            </View>
          </View>

          <View style={styles.form2}>
            <Text style={styles.form2description}>Description</Text>
            <TextInput style={styles.input2}
              multiline={true}
              editable={true}
              maxLength={200}
              placeholder="Optional"
              autoCorrect={false}
              onChangeText={
                description => this.setState({ description })
              }
            />
          </View>

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

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'blue',
    // height: '100%',
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25,
  },
  form1: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
  form1a: {
    borderWidth: 1,
    height: '100%',
    width: '18%',
  },
  form1b: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '82%',
    paddingLeft: 10,
  },
  form2: {
    width: '100%',
  },
  form2description: {
    marginTop: 15,
    marginBottom: 5,
  },
  title: {
    color: '#D33B32',
    fontWeight: 'bold',
    paddingBottom: 15,
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
  input2: {
    textAlign: 'left',
    borderWidth: 1,
    padding: 12,
    width: '100%',
    height: 75,
    // textAlignVertical: 'top',
    borderRadius: 10,
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
