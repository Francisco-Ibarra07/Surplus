/**
 * ------------------------------------------------------ /
 * The main container for imports and navigation
 * Default page is GetStarted.js
 * ------------------------------------------------------ /
 */

// Main Imports ----------------------------------------- /
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
} from 'react-navigation';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

// Auth Screens Import ---------------------------------- /
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

// Dash Screens ----------------------------------------- /
// Customer's
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import ShoppingCart from './pages/dashboard/ShoppingCart';
import RestaurantFoods from './pages/dashboard/RestaurantFoods';

// Business Owner's
import AddFood from './pages/dashboard/AddFood';
import BusinessVerify from './pages/dashboard/BusinessVerify';
import BusinessHome from './pages/dashboard/BusinessHome';
import BusinessMenu from './pages/dashboard/BusinessMenu';
import BusinessSettings from './pages/dashboard/BusinessSettings';
import BusinessWallet from './pages/dashboard/BusinessWallet';
import EditBusinessInfo from './pages/dashboard/EditBusinessInfo';


// Customer Drawer Navigation --------------------------- /
const CustomerDrawer = createDrawerNavigator({
  CustomerDashboard: {
    screen: CustomerDashboard,
    navigationOptions: () => ({
      title: 'Dashboard',
    }),
  },
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: () => ({
      title: 'Shopping Cart',
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
        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
          <Image style={styles.rightLogos} source={require('./pages/dashboard/resources/shoppingcart.png')} />
        </TouchableOpacity>
      ),
      title: 'surplus',
      headerTintColor: '#D33B32',
    }),
    contentComponent: (props) => (
      <View style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props} />
          <TouchableOpacity onPress={() =>
            Alert.alert(
              'Log Off',
              'Do you want to log off?',
              [
                { text: 'Cancel', onPress: () => { return null } },
                {
                  text: 'Confirm', onPress: () => {
                    firebase.auth().signOut();
                    props.navigation.navigate('GetStarted')
                  }
                },
              ],
              { cancelable: false }
            )
          }>
            <Text style={{ margin: 15, fontWeight: 'bold' }}>Log Off</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    ),
  }
)

// Business Tab Navigation
const BusinessTab = createBottomTabNavigator({
  BusinessHome: {
    screen: BusinessHome,
    navigationOptions: () => ({
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' size={20} color={tintColor} />
      )
    }),
  },
  BusinessMenu: {
    screen: BusinessMenu,
    navigationOptions: () => ({
      title: 'Menu',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='th-large' size={20} color={tintColor} />
      )
    }),
  },
  BusinessWallet: {
    screen: BusinessWallet,
    navigationOptions: () => ({
      title: 'Wallet',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='credit-card' size={20} color={tintColor} />
      )
    }),
  },
  BusinessSettings: {
    screen: BusinessSettings,
    navigationOptions: () => ({
      title: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='cog' size={20} color={tintColor} />
      )
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

// App Navigation --------------------------------------- /
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
    RestaurantFoods: {
      screen: RestaurantFoods,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Image style={styles.rightLogos} source={require('./pages/dashboard/resources/shoppingcart.png')} />
          </TouchableOpacity>
        ),
        headerTintColor: '#D33B32',
      }),
    },

    // Business screens
    AddFood: {
      screen: AddFood,
      navigationOptions: () => ({
        headerStyle: {
          borderBottomWidth: 0,
        },
        title: 'Add New Item',
        headerTintColor: '#D33B32',
      }),
    },

    // Business Navigation
    BusinessVerify: { screen: BusinessVerify },
    EditBusinessInfo: { screen: EditBusinessInfo },
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


// Styles ----------------------------------------------- /
const styles = StyleSheet.create({
  hamburgerLogo: {
    // borderWidth: 1,
    // borderColor: 'blue',
    height: 30,
    resizeMode: 'contain',
    width: 30,
    marginLeft: 25,
  },
  rightLogos: {
    // borderColor: 'blue',
    // borderWidth: 1,
    height: 30,
    marginRight: 25,
    resizeMode: 'contain',
    width: 30,
  },
});

