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
import BusinessClaim from './pages/authentication/BusinessClaim';
import SignIn from './pages/authentication/SignIn';
import TermsAndConditions from './pages/authentication/TermsAndConditions';
import PrivacyStatement from './pages/authentication/PrivacyStatement';
import DummySignUp from './pages/authentication/DummySignUp';
import ForgotPassword from './pages/authentication/ForgotPassword';

// Dash Screens
// Customer's
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
// Business Owner's
import BusinessVerify from './pages/dashboard/BusinessVerify';
import BusinessHome from './pages/dashboard/BusinessHome';
import BusinessMenu from './pages/dashboard/BusinessMenu';
import BusinessQueue from './pages/dashboard/BusinessQueue';
import BusinessWallet from './pages/dashboard/BusinessWallet';

// Customer Drawer Navigation
const CustomerDrawer = createDrawerNavigator({
  CustomerDashboard: {
    screen: CustomerDashboard,
    navigationOptions: () => ({
      title: 'Dashboard',
    }),
  },
},
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.hamburgerLogo} source={require('./pages/dashboard/resources/logo.jpg')} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity>
          <Image style={styles.rightLogos} source={require('./pages/dashboard/resources/shoppingcart.png')} />
        </TouchableOpacity>
      ),
    }),
  }
)

// Business Tab Navigation
const BusinessTab = createBottomTabNavigator({
  BusinessHome: {
    screen: BusinessHome,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
  BusinessMenu: {
    screen: BusinessMenu,
    navigationOptions: () => ({
      title: 'Menu',
    }),
  },
  BusinessQueue: {
    screen: BusinessQueue,
    navigationOptions: () => ({
      title: 'Queue',
    }),
  },
  BusinessWallet: {
    screen: BusinessWallet,
    navigationOptions: () => ({
      title: 'Wallet',
    }),
  },
}, {
    navigationOptions: () => ({
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerLeft: null,
      title: 'surplus',
      headerTintColor: '#D33B32',
    }),
    tabBarOptions: {
      activeTintColor: '#D33B32',
    }
  })

// App Navigation
export const Nav = createAppContainer(
  createStackNavigator({
    // Auth Navigation
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    CustomerSignUp: { screen: CustomerSignUp },
    BusinessSignUp: { screen: BusinessSignUp },
    BusinessClaim: { screen: BusinessClaim },
    SignIn: { screen: SignIn },
    TermsAndConditions: { screen: TermsAndConditions },
    PrivacyStatement: { screen: PrivacyStatement },
    DummySignUp: { screen: DummySignUp },
    ForgotPassword: { screen: ForgotPassword },

    // Customer Navigation
    Drawer: CustomerDrawer,

    // Business Navigation
    BusinessVerify: { screen: BusinessVerify },
    // BusinessHome: { screen: BusinessHome },
    // BusinessMenu: { screen: BusinessMenu },
    Tab: BusinessTab,
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

