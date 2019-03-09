import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class BusinessVerify extends Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
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
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BusinessHome')}>
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