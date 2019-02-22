import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Auth Screens
import GetStarted from './pages/authentication/GetStarted'
import WhoAreYou from './pages/authentication/WhoAreYou'
import C_Signup from './pages/authentication/C_Signup'
import B_Signup from './pages/authentication/B_Signup'
import Signin from './pages/authentication/Signin'
import DummySignUp from './pages/authentication/DummySignUp'

export const Auth = createAppContainer(
  createStackNavigator({
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    C_Signup: { screen: C_Signup },
    B_Signup: { screen: B_Signup },
    Signin: { screen: Signin },
    DummySignUp: { screen: DummySignUp },
  }, {
      navigationOptions: {
        header: null
      }
    }
  ),
)

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <Auth />
    );
  }
}