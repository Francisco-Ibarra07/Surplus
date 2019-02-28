import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
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

// Dash Screens
import C_Dashboard from './pages/dashboard/C_Dashboard';

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

    // Dash Nav
    C_Dashboard: { screen: C_Dashboard },
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