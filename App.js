import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Auth Screens
import GetStarted from './pages/authentication/GetStarted';
import WhoAreYou from './pages/authentication/WhoAreYou';
import CustomerSignUp from './pages/authentication/CustomerSignUp';
import BusinessSignUp from './pages/authentication/BusinessSignUp';
import SignIn from './pages/authentication/SignIn';
import TermsAndConditions from './pages/authentication/TermsAndConditions';
import PrivacyStatement from './pages/authentication/PrivacyStatement';
import DummySignUp from './pages/authentication/DummySignUp';
import BusinessDash from './pages/dashboard/BusinessDash';

// Dash Screens
import CustomerDashboard from './pages/dashboard/CustomerDashboard';

// Customer Dash Nav Style

// App Navigation
export const Nav = createAppContainer(
  createStackNavigator({
    // Auth Nav
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    CustomerSignUp: { screen: CustomerSignUp },
    BusinessSignUp: { screen: BusinessSignUp },
    SignIn: { screen: SignIn },
    TermsAndConditions: { screen: TermsAndConditions },
    PrivacyStatement: { screen: PrivacyStatement },
    DummySignUp: { screen: DummySignUp },  
    BusinessDash: { screen: BusinessDash },

    // Dash Nav
    CustomerDashboard: {
      screen: CustomerDashboard,
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
