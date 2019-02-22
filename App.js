import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GetStarted from './pages/authentication/GetStarted'
import WhoAreYou from './pages/authentication/WhoAreYou'
import DummySignUp from './pages/authentication/DummySignUp'

export const Auth = createAppContainer(
  createStackNavigator({
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
    DummySignUp: { screen: DummySignUp },
  }),
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