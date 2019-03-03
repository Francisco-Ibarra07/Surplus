import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

// Auth Screens
import GetStarted from './pages/authentication/GetStarted';
import WhoAreYou from './pages/authentication/WhoAreYou';
import CustomerSignUp from './pages/authentication/CustomerSignUp';
import BusinessSignUp from './pages/authentication/BusinessSignUp';
import SignIn from './pages/authentication/SignIn';
import TermsAndConditions from './pages/authentication/TermsAndConditions';
import PrivacyStatement from './pages/authentication/PrivacyStatement';
import DummySignUp from './pages/authentication/DummySignUp';

// Dash Screens
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import BusinessVerify from './pages/dashboard/BusinessVerify';
import BusinessHome from './pages/dashboard/BusinessHome';
import BusinessMenu from './pages/dashboard/BusinessMenu';
import BusinessQueue from './pages/dashboard/BusinessQueue';
import BusinessWallet from './pages/dashboard/BusinessWallet';

// Customer Drawer Navigation

// Business Tab Navigation

// App Navigation
export const Nav = createAppContainer(
  createStackNavigator({
    // Auth Navigation
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    CustomerSignUp: { screen: CustomerSignUp },
    BusinessSignUp: { screen: BusinessSignUp },
    SignIn: { screen: SignIn },
    TermsAndConditions: { screen: TermsAndConditions },
    PrivacyStatement: { screen: PrivacyStatement },
    DummySignUp: { screen: DummySignUp },

    // Customer Navigation
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

    // Business Navigation
    BusinessVerify: { screen: BusinessVerify },
    BusinessHome: { screen: BusinessHome },
    BusinessMenu: { screen: BusinessMenu },
    BusinessQueue: { screen: BusinessQueue },
    BusinessWallet: { screen: BusinessWallet },
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
