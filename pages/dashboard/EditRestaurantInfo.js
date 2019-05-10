import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import RedButton from '../components/RedButton';
import firebase from 'react-native-firebase'
import ImagePicker from 'react-native-image-picker'

export default class EditRestaurantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: '',
      address: '',
      phone: '',
      zipcode: '',
      city: '',
      state: '',
      logoURL: null,
      updatedStoreName: '',
      updatedAddress: '',
      updatedPhone: '',
      updatedZipcode: '',
      updatedCity: '',
      updatedState: '',
      updatedLogoURL: null,
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  populateUserInfo = () => {

    const user_id = firebase.auth().currentUser.uid;
    const refToRestaurantInfo = firebase.database().ref('/business/owners/' + user_id + '/restaurant');
    const activity = this

    refToRestaurantInfo.on('value', function (snapshot) {
      const snap = snapshot.val();

      activity.setState({
        storeName: snap['store_name'],
        address: snap['address'],
        phone: snap['store_phone'],
        zipcode: snap['zipcode'],
        state: snap['state'],
        city: snap['city'],
        logoURL: snap['image']
      })

      console.log("city:", snap['city'])
      console.log(snap)
      console.log(snapshot)


    });
  }

  componentDidMount() {
    this.populateUserInfo();
  }

  updateUserInfo = () => {

    const { updatedStoreName, updatedAddress, updatedPhone, updatedZipcode, updatedState, updatedCity, updatedLogoURL } = this.state;
    const user_id = firebase.auth().currentUser.uid;
    const refToRestaurantInfo = firebase.database().ref('/business/owners/' + user_id + '/restaurant');

    if (updatedStoreName === '' && updatedAddress === '' && updatedPhone === '' && updatedZipcode === '' && updatedState === '' && updatedCity === '' && updatedLogoURL === null) {
      alert('Make a change to save changes!');
      return;
    }

    let name = updatedStoreName

    if (name !== '') {
      // Remove any illegal characters before updating
      name = name.replace(".", "")
      name = name.replace("#", "")
      name = name.replace("$", "")
      name = name.replace("[", "")
      name = name.replace("]", "")

      refToRestaurantInfo.update({
        'store_name': name
      })
      this.setState({ storeName: name, updatedStoreName: '' });
    }

    if (updatedAddress !== '') {
      console.log("new address", updatedAddress)
      refToRestaurantInfo.update({
        'address': updatedAddress
      })
      this.setState({ address: updatedAddress, updatedAddress: '' });
    }

    if (updatedPhone !== '') {
      refToRestaurantInfo.update({
        'store_phone': updatedPhone
      })
      this.setState({ phone: updatedPhone, updatedPhone: '' });
    }

    if (updatedZipcode !== '') {
      refToRestaurantInfo.update({
        'zipcode': updatedZipcode
      })
      this.setState({ zipcode: updatedZipcode, updatedZipcode: '' });
    }

    if (updatedState !== '') {
      refToRestaurantInfo.update({
        'state': updatedState
      })
      this.setState({ state: updatedState, updatedState: '' });
    }

    if (updatedCity !== '') {
      refToRestaurantInfo.update({
        'city': updatedCity
      })
      this.setState({ city: updatedCity, updatedCity: '' });
    }

    console.log(updatedLogoURL)
    if (updatedLogoURL !== null) {
      refToRestaurantInfo.update({
        'image': updatedLogoURL
      })
      this.setState({ logoURL: updatedLogoURL, updatedLogoURL: null });
    }

    alert('Information was updated!');
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
            this.setState({ updatedLogoURL: msg.downloadURL, logoURL: msg.downloadURL });
          })
          .catch((error) => {
            console.log("error:", error);
            alert("Failed to upload image");
            return;
          })
      }
    });
  }

  render() {
    const { logoURL } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Your Business Information</Text>

        <View style={styles.form}>
          <Text style={styles.p}>Store Name</Text>
          <TextInput style={styles.input}
            onChangeText={updatedStoreName => this.setState({ updatedStoreName })}
            placeholder={this.state.storeName}
            autoCorrect={false}
          />

          <Text style={styles.p}>Phone Number</Text>
          <TextInput style={styles.input}
            onChangeText={updatedPhone => this.setState({ updatedPhone })}
            placeholder={this.state.phone}
            keyboardType="number-pad"
            autoCorrect={false}
          />

          <Text style={styles.p}>Address</Text>
          <TextInput style={styles.input}
            onChangeText={updatedAddress => this.setState({ updatedAddress })}
            keyboardType="email-address"
            placeholder={this.state.address}
            autoCorrect={false}
          />

          <Text style={styles.p}>City</Text>
          <TextInput style={styles.input}
            onChangeText={updatedCity => this.setState({ updatedCity })}
            placeholder={this.state.city}
            autoCorrect={false}
          />

          <Text style={styles.p}>Zipcode</Text>
          <TextInput style={styles.input}
            onChangeText={updatedZipcode => this.setState({ updatedZipcode })}
            keyboardType="number-pad"
            placeholder={this.state.zipcode}
            autoCorrect={false}
          />

          {logoURL && (
            <View style={styles.imageBox}>
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: logoURL }} />
            </View>
          )}

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#147efb',
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 5,
          }}>
            <Button title="Upload New Logo" onPress={this.handlePhotoUpload} />
          </View>

          <RedButton
            buttonText='Save Changes'
            onPress={this.updateUserInfo}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  form: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 16,
  },
  p: {
    textAlign: 'left',
    width: '100%',
  },
  h1: {
    fontSize: 20,
    marginBottom: 25,
    marginTop: 10,
  },
  imageBox: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderColor: 'black',
  },
})
