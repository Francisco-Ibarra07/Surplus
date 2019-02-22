import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Auth Screens
import GetStarted from './authentication/GetStarted'
import WhoAreYou from './authentication/WhoAreYou'
import C_Signup from './authentication/C_Signup'
import B_Signup from './authentication/B_Signup'
import Signin from './authentication/Signin'

export const Auth = createAppContainer(
  createStackNavigator({
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    C_Signup: { screen: C_Signup },
    B_Signup: { screen: B_Signup },
    Signin: { screen: Signin },
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