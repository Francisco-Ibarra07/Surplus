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

// Authentication Screens Import ---------------------------------- /
import GetStarted from './pages/authentication_screens/GetStarted';
import WhoAreYou from './pages/authentication_screens/WhoAreYou';
import CustomerSignUp from './pages/authentication_screens/CustomerSignUp';
import BusinessSignUp from './pages/authentication_screens/BusinessSignUp';
import BusinessClaim from './pages/authentication_screens/BusinessClaim';
import BusinessVerify from './pages/authentication_screens/BusinessVerify';
import SignIn from './pages/authentication_screens/SignIn';
import TermsAndConditions from './pages/authentication_screens/TermsAndConditions';
import PrivacyStatement from './pages/authentication_screens/PrivacyStatement';
import ForgotPassword from './pages/authentication_screens/ForgotPassword';

// Dash Screens ----------------------------------------- /
// Customer's
import CustomerDashboard from './pages/customer_screens/CustomerDashboard';
import ShoppingCart from './pages/customer_screens/ShoppingCart';
import RestaurantFoods from './pages/customer_screens/RestaurantFoods';
import EditCustomerInfo from './pages/customer_screens/EditCustomerInfo';
import ConfirmationPage from './pages/customer_screens/ConfirmationPage';

// Business Owner's
import AddFood from './pages/business_screens/AddFood';
import BusinessEditFood from './pages/business_screens/BusinessEditFood'
import BusinessHome from './pages/business_screens/BusinessHome';
import BusinessOrders from './pages/business_screens/BusinessOrder';
import BusinessSettings from './pages/business_screens/BusinessSettings';
import BusinessWallet from './pages/business_screens/BusinessWallet';
import EditRestaurantInfo from './pages/business_screens/EditRestaurantInfo';
import EditOwnersInfo from './pages/business_screens/EditOwnersInfo';

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
  EditCustomerInfo: {
    screen: EditCustomerInfo,
    navigationOptions: () => ({
      title: 'Edit My Info',
    }),
  },
},
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.hamburgerLogo} source={require('./pages/customer_screens/resources/logo.jpg')} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
          <Image style={styles.rightLogos} source={require('./pages/customer_screens/resources/shoppingcart.png')} />
        </TouchableOpacity>
      ),
      title: 'surplus',
      headerTintColor: '#D33B32',
      gesturesEnabled: false,
    }),
    contentComponent: (props) => (
      <View style={{ flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props} />
          <TouchableOpacity onPress={() =>
            Alert.alert(
              'Exit',
              'Do you want to quit?',
              [
                { text: 'Cancel', onPress: () => { return null } },
                {
                  text: 'Confirm', onPress: () => {
                    const user = firebase.auth().currentUser
                    if (user !== null) {
                      firebase.auth().signOut();
                    }
                    props.navigation.navigate('GetStarted')
                  }
                },
              ],
              { cancelable: false }
            )
          }>
            <Text style={{ margin: 15, fontWeight: 'bold' }}>Exit</Text>
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
  BusinessOrders: {
    screen: BusinessOrders,
    navigationOptions: () => ({
      title: 'Orders',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='list-ol' size={20} color={tintColor} />
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
      gesturesEnabled: false,
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
    ForgotPassword: { screen: ForgotPassword },

    // Customer Navigation
    Drawer: CustomerDrawer,
    RestaurantFoods: {
      screen: RestaurantFoods,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Image style={styles.rightLogos} source={require('./pages/customer_screens/resources/shoppingcart.png')} />
          </TouchableOpacity>
        ),
        headerTintColor: '#D33B32',
      }),
    },
    ConfirmationPage: { screen: ConfirmationPage },

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
    BusinessEditFood: {
      screen: BusinessEditFood,
      navigationOptions: () => ({
        headerStyle: {
          borderBottomWidth: 0,
        },
        headerTintColor: '#D33B32',
      }),
    },

    // Business Navigation
    BusinessVerify: { screen: BusinessVerify },
    EditRestaurantInfo: { screen: EditRestaurantInfo },
    EditOwnersInfo: { screen: EditOwnersInfo },
    // BusinessHome: { screen: BusinessHome },
    // BusinessOrders: { screen: BusinessOrders },
    Tab: BusinessTab,
  }),
)

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    console.disableYellowBox = true;
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
