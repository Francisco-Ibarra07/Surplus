import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Auth Screens
import GetStarted from './pages/authentication/GetStarted';
import WhoAreYou from './pages/authentication/WhoAreYou';
import C_Signup from './pages/authentication/C_Signup';
import B_Signup from './pages/authentication/B_Signup';
import Signin from './pages/authentication/Signin';
import TermsAndConditions from './pages/authentication/TermsAndConditions';
import PrivacyStatement from './pages/authentication/PrivacyStatement';
import DummySignUp from './pages/authentication/DummySignUp';
import BusinessDash from './pages/dashboard/BusinessDash';

// Dash Screens
import C_Dashboard from './pages/dashboard/C_Dashboard';

// Customer Dash Nav Style

// App Navigation
export const Nav = createAppContainer(
  createStackNavigator({
    // Auth Nav
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    C_Signup: { screen: C_Signup },
    B_Signup: { screen: B_Signup },
    Signin: { screen: Signin },
    TermsAndConditions: { screen: TermsAndConditions },
    PrivacyStatement: { screen: PrivacyStatement },
    DummySignUp: { screen: DummySignUp },  
    BusinessDash: { screen: BusinessDash },

    // Dash Nav
    C_Dashboard: {
      screen: C_Dashboard,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.hamburgerLogo} source={require('./pages/dashboard/resources/logo.jpg')} />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.rightLogos} source={require('./pages/dashboard/resources/shoppingcart.png')} />
          </TouchableOpacity>
        )
      })
    },
  }),
)

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Nav />
    );
  }
}

const styles = StyleSheet.create({
  hamburgerLogo: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    // borderWidth: 1,
    // borderColor: 'blue',
    marginLeft: 25,
  },
  rightLogos: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    // borderWidth: 1,
    // borderColor: 'blue',
    marginRight: 25,
  },
});
