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
import ImagePicker from 'react-native-image-picker'
import RedButton from '../components/RedButton';

export default class BusinessEditFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      updatedFirstName: '',
      updatedLastName: '',
      updatedEmail: '',
      updatedPhone: ''
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  updateFoodInfo = () => {

  }

  populateFoodInfo = () => {

  }

  componentDidMount() {
    this.populateFoodInfo();
  }
  render() {
    const { photo } = this.state;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Add New Item</Text> */}
        {/* Form */}
        <View style={styles.form}>
          <View style={styles.form1}>
            <View style={styles.form1a} onPress={this.handlePhotoUpload}>
              {photo && (<Image source={{ uri: photo.uri }} style={{ width: 65, height: 65 }} />)}
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
            keyboardType="number-pad"
            onChangeText={
              quantity => this.setState({ quantity })
            }
          />
          <TextInput style={styles.input}
            placeholder="Price"
            autoCorrect={false}
            keyboardType="decimal-pad"
            onChangeText={
              price => this.setState({ price })
            }
          />

          <Button title="Upload photo" onPress={this.handlePhotoUpload} />
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