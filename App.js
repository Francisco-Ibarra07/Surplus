import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import GetStarted from './authentication/GetStarted'
import WhoAreYou from './authentication/WhoAreYou'

export const Auth = createAppContainer(
  createStackNavigator({
    GetStarted: { screen: GetStarted },
    WhoAreYou: { screen: WhoAreYou },
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