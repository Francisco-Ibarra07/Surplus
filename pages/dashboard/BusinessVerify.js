
import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
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
      <View style={styles.container} >
        <View style={styles.containerChild}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Almost done!</Text>
          </View>

          <Image
            source={require('./resources/Verify.jpg')}
            style={styles.VerifyStyle}
          />

          <View style={styles.condition}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: 'white', fontSize: 18 }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  VerifyStyle: {
    height: 450,
    width: 400,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: 'pink',
    margin: 25,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D33B32',
    borderRadius: 10,
    height: 55,
    marginTop: 20,
    // padding: 10,
    width: '100%',
  },
  title: {
    // borderWidth: 1,
    // borderColor: 'blue',
    paddingBottom: 50,
  },
  titleText: {
    // marginBottom: 50,
    fontSize: 35
  },
  condition: {
    fontSize: 10,
    width: '100%',
    paddingTop: 15,
  },
  conditionText: {
    fontSize: 10,
    paddingTop: 10,
  },
  containerChild: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});