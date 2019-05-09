import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import firebase from 'react-native-firebase';
import RedButton from '../components/RedButton';
import ImagePicker from 'react-native-image-picker'

export default class BusinessEditFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      foodDescription: '',
      category: '',
      quantity: '',
      price: '',
      photoURL: null,
      updatedItemName: '',
      updatedDescription: '',
      updatedCategory: '',
      updatedQuantity: '',
      updatedPrice: '',
      updatedPhotoURL: null,
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  updateFoodInfo = () => {
    const { updatedItemName, updatedDescription, updatedCategory, updatedQuantity, updatedPrice, updatedPhotoURL } = this.state;

    // Make sure there were changes that were actually made. Return if there weren't any changes
    if (updatedItemName === '' && updatedDescription === '' && updatedCategory === '' && updatedQuantity === '' && updatedPrice === '' && updatedPhotoURL === null) {
      alert('Make a change to save changes!');
      return
    }

    let refPath = this.props.navigation.state.params.refToFoodItem

    // If the name of the item was renamed, we need to change the folder name
    if (updatedItemName !== '') {
      alert("You cannot change the item name. If you wish to do so, delete this item and create a new one with the corrected name")
      return
    }

    // Get a reference to the folder of this food item
    const refToFoodItem = firebase.database().ref(refPath)
    console.log("Result:", refToFoodItem)

    // If the name was updated, update the whole folder as well because the previous folder was deleted
    if (updatedItemName !== '') {
      refToFoodItem.update({
        'item_name': updatedItemName,
        'item_description': this.state.foodDescription,
        'item_category': this.state.category,
        'item_quantity': this.state.quantity,
        'item_price': this.state.price,
        'item_image': this.state.photoURL
      })
      this.setState({ itemName: updatedItemName, updatedItemName: '' })
    }
    if (updatedDescription !== '') {
      refToFoodItem.update({ 'item_description': updatedDescription })
      this.setState({ foodDescription: updatedDescription, updatedDescription: '' })
    }
    if (updatedCategory !== '') {
      refToFoodItem.update({ 'item_category': updatedCategory })
      this.setState({ category: updatedCategory, updatedCategory: '' })
    }
    if (updatedQuantity !== '') {
      refToFoodItem.update({ 'item_quantity': updatedQuantity })
      this.setState({ quantity: updatedQuantity, updatedQuantity: '' })
    }
    if (updatedPrice !== '') {
      refToFoodItem.update({ 'item_price': updatedPrice })
      this.setState({ price: updatedPrice, updatedPrice: '' })
    }
    if (updatedPhotoURL !== '') {
      refToFoodItem.update({ 'item_image': updatedPhotoURL })
      this.setState({ photoURL: updatedPhotoURL, updatedPhotoURL: '' })
    }

    alert('Information was updated!');
    this.props.navigation.navigate('BusinessHome')
  }

  handlePhotoUpload = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log("Response:", response);
      if (response.uri) {

        const user_id = firebase.auth().currentUser.uid;
        const storage = firebase.storage();
        const sessionId = new Date().getTime();
        const imageFolderRef = storage.ref('images/' + user_id).child(`${sessionId}`);

        imageFolderRef.putFile(response.uri)
          .then((msg) => {

            alert('Photo successfully uploaded!');
            this.setState({ updatedPhotoURL: msg.downloadURL, photoURL: msg.downloadURL });
          })
          .catch((error) => {
            console.log("error:", error);
            alert("Failed to upload image");
            return;
          })
      }
    });
  }

  populateFoodInfo = () => {
    const str = this.props.navigation.state.params.refToFoodItem // String path to the active item
    const ref = firebase.database().ref(str);
    const activity = this;

    ref.on('value', function (snapshot) {

      const snap = snapshot.val()
      if (snap === null) { return } // Means item was already deleted
      console.log("snap:", snap)
      activity.setState({
        itemName: snap['item_name'],
        foodDescription: snap['item_description'],
        category: snap['item_category'],
        quantity: snap['item_quantity'],
        price: snap['item_price'],
        photoURL: snap['item_image']
      })
    });
  }

  componentDidMount() {
    this.populateFoodInfo();
  }

  render() {
    const { photoURL } = this.state;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Add New Item</Text> */}
        {/* Form */}
        <View style={styles.form}>
          <View style={styles.form1}>
            <View style={styles.form1a}>
              {(photoURL !== null) && (<Image source={{ uri: photoURL }} style={{ width: 65, height: 65 }} />)}
            </View>
            <View style={styles.form1b}>
              <Text>Item Name</Text>
              <TextInput style={styles.input}
                placeholder={this.state.itemName}
                autoCorrect={false}
                onChangeText={
                  updatedItemName => this.setState({ updatedItemName })
                } />
            </View>
          </View>

          <View style={styles.form2}>
            <Text style={styles.form2description}>Description</Text>
            <TextInput style={styles.input2}
              placeholder={this.state.foodDescription}
              multiline={true}
              editable={true}
              maxLength={200}
              autoCorrect={false}
              onChangeText={
                updatedDescription => this.setState({ updatedDescription })
              }
            />
          </View>

          <TextInput style={styles.input}
            placeholder={this.state.category}
            autoCorrect={false}
            onChangeText={
              updatedCategory => this.setState({ updatedCategory })
            }
          />
          <TextInput style={styles.input}
            placeholder={this.state.quantity}
            autoCorrect={false}
            keyboardType="number-pad"
            onChangeText={
              updatedQuantity => this.setState({ updatedQuantity })
            }
          />
          <TextInput style={styles.input}
            placeholder={this.state.price}
            autoCorrect={false}
            keyboardType="decimal-pad"
            onChangeText={
              updatedPrice => this.setState({ updatedPrice })
            }
          />

          <View style={{
            borderWidth: 1,
            borderColor: '#147efb',
            borderRadius: 5,
            marginBottom: 10,
          }}>
            <Button title="Upload New Photo" onPress={this.handlePhotoUpload} />
          </View>
          <RedButton onPress={this.updateFoodInfo} buttonText='Save Changes' />
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
    width: '20%',
  },
  form1b: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '80%',
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
    marginBottom: 10,
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
    marginBottom: 10,
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
