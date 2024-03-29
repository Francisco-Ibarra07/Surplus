import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import RedButton from '../components/RedButton';

export default class ConfirmationPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleButtonPress = () => {
    this.props.navigation.navigate('CustomerDashboard')
  }

  componentDidMount() {

  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.h1}>Yum! Enjoy your meal!</Text>
            <Text style={styles.h2}>Order Summary</Text>
          </View>
          <Image style={styles.topImage}
            source={require('./resources/tree.jpg')}
          />
        </View>

        <View style={styles.summary}>
          <Text style={styles.h3}>Tax: $0.38</Text>
          <Text style={styles.h3}>Total: $4.38</Text>
          <Text style={styles.h3}>Pick up at: 4th St San Carlos, San Jose 95866, CA</Text>
          <Text style={styles.h3}>Confirmation: #1JH56487</Text>
          <Text style={styles.warning}>⚠️ Show this screen when you pick up! ⚠️</Text>
        </View>

        {/* Top part: Text and Tree Image only shows if user is not anonymous*/}

        <RedButton style={{ marginTop: 16 }} buttonText="Got it!" onPress={this.handleButtonPress} />
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  h1: {
    color: '#D33B32',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  h2: {
    color: 'gray',
    fontSize: 12,
  },
  h3: {
    marginBottom: 5,
  },
  topImage: {
    position: 'relative',
    top: 1,
    resizeMode: 'contain',
    height: 80,
    width: 70,
  },
  summary: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    borderWidth: .5,
    borderRadius: 10,
    borderColor: '#D33B32',
    padding: 15,
  },
  warning: {
    marginTop: 20,
    fontSize: 16,
  },
})
