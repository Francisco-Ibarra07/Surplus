import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class BusinessVerify extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  handleButtonPress = () => {

    // Grab the photo that was passed by the previous page
    const photo = this.props.navigation.state.params.photo;

    // Grab a reference to the restaurant folder
    const user_id = firebase.auth().currentUser.uid;
    const restaurant = firebase.database().ref('business/owners/' + user_id + '/restaurant');

    // Grab a reference to the storage location of where the image will be placed
    const storage = firebase.storage();
    const sessionId = new Date().getTime();
    const imageFolderRef = storage.ref('signup_logos/' + user_id).child(`${sessionId}`);

    // Upload the image to Firebase Storage and store the download URL link of that image onto the restaurant folder in the database
    imageFolderRef.putFile(photo.uri)
      .then((msg) => {
        console.log('Image uploaded:', msg.downloadURL);
        restaurant.update({
          'image': msg.downloadURL
        })
      })
      .catch((error) => {
        console.log("error:", error);
        alert("Failed to upload image");
        return;
      })

    // Take user to their home page
    this.props.navigation.navigate('BusinessHome')
  }

  render() {
    return (
      <View style={styles.container}>

        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>Almost done!</Text>
        </View>

        <View style={styles.content}>
          <Image style={styles.image} source={require('./resources/Verify.png')} />
          <Text style={styles.contentText}>
            In order to make sure all business registered on Surplus are legitimate,
            a representative will be contacting you within the next few days to verify
            your account. In the mean time, your account is yours to customize but is
            not yet visible to the public.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
          <Text style={{ color: 'white' }}>Got it!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'pink',
    margin: 25,
  },
  content: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    width: '100%',
    // height: 300,
    justifyContent: 'center',
    padding: '5%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    marginBottom: 20,
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  contentText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#505050',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    height: 45,
    // marginTop: 20,
    // position: 'absolute',
    // bottom: 0,
    // padding: 10,
    width: '100%',
  },
  title: {
    // borderWidth: 1,
    // borderColor: 'blue',
    marginBottom: 20,
  },
  titleText: {
    // marginBottom: 50,
    fontSize: 35,
    color: '#505050',
  },
});