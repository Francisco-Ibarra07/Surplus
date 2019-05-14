import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import RedButton from '../components/RedButton';
import firebase from 'react-native-firebase';

export default class EditCustomerInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAnonymousUser: false,
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

  populateUserInfo = () => {

    // Check if the user is anonymous
    if (firebase.auth().currentUser === null) {
      this.setState({
        isAnonymousUser: true,
        firstName: 'James',
        lastName: 'Smith',
        email: 'James.Smith@mail.com',
        phone: '555-454-9999'
      })
      return
    }

    const user_id = firebase.auth().currentUser.uid;
    const refToCustomersInfo = firebase.database().ref('/customers/users/' + user_id);
    const activity = this

    refToCustomersInfo.on('value', function (snapshot) {
      const snap = snapshot.val()

      activity.setState({
        firstName: snap['first_name'],
        lastName: snap['last_name'],
        email: snap['email'],
        phone: snap['phone_number']
      })
    });
  }

  componentDidMount() {
    this.populateUserInfo();
  }

  updateUserInfo = () => {

    const { updatedFirstName, updatedLastName, updatedEmail, updatedPhone } = this.state;
    const user_id = firebase.auth().currentUser.uid;
    const refToOwnersAccountInfo = firebase.database().ref('/customers/users/' + user_id);

    if (updatedFirstName === '' && updatedLastName === '' && updatedEmail === '' && updatedPhone === '') {
      alert('Make a change to save changes!');
      return;
    }

    if (updatedFirstName !== '') {
      refToOwnersAccountInfo.update({
        'first_name': updatedFirstName
      })

      this.setState({ firstName: updatedFirstName, updatedFirstName: '' });
    }

    if (updatedLastName !== '') {
      refToOwnersAccountInfo.update({
        'last_name': updatedLastName
      })

      this.setState({ lastName: updatedLastName, updatedLastName: '' });
    }

    if (updatedEmail !== '') {
      refToOwnersAccountInfo.update({
        'email': updatedEmail
      })

      this.setState({ email: updatedEmail, updatedEmail: '' });
    }

    if (updatedPhone !== '') {
      refToOwnersAccountInfo.update({
        'phone': updatedPhone
      })

      this.setState({ phone: updatedPhone, updatedPhone: '' });
    }

    alert('Information was updated!');
  }

  render() {
    const { isAnonymousUser } = this.state
    return (
      <View style={styles.container}>
        {!isAnonymousUser && (<Text style={styles.h1}>Your Information</Text>)}
        {isAnonymousUser && (<Text style={styles.h1}>This could be your information... {"\n"}But you need to sign up!</Text>)}

        <View style={styles.form}>
          <Text style={styles.p}>First Name</Text>
          <TextInput style={styles.input}
            onChangeText={updatedFirstName => this.setState({ updatedFirstName })}
            placeholder={this.state.firstName}
            autoCorrect={false}
          />

          <Text style={styles.p}>Last Name</Text>
          <TextInput style={styles.input}
            onChangeText={updatedLastName => this.setState({ updatedLastName })}
            placeholder={this.state.lastName}
            autoCorrect={false}
          />

          <Text style={styles.p}>Email</Text>
          <TextInput style={styles.input}
            onChangeText={updatedEmail => this.setState({ updatedEmail })}
            keyboardType="email-address"
            placeholder={this.state.email}
            autoCorrect={false}
          />

          <Text style={styles.p}>Phone</Text>
          <TextInput style={styles.input}
            onChangeText={updatedPhone => this.setState({ updatedPhone })}
            placeholder={this.state.phone}
            keyboardType="number-pad"
            autoCorrect={false}
          />

          {!isAnonymousUser && (<RedButton buttonText='Save Changes' onPress={this.updateUserInfo} />)}

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
})
