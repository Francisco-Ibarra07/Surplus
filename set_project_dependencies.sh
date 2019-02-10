#!/bin/sh

# Be sure to clone the repo first! (https://github.com/Francisco-Ibarra07/Surplus.git)

# Install CocoaPods
cd
sudo gem install cocoapods

# Download Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install React Native
brew install node
brew install watchman
brew install wget
brew install yarn
npm install -g react-native-cli

# Install Surplus
cd ~/Surplus
npm install

# Open XCode
open ~/Surplus/ios/Surplus.xcworkspace

# Install Splash Screen dependencies
#yarn add react-native-splash-screen@3.0.6
#react-native link react-native-splash-screen

# Install Firebase Dependencies
#npm install --save react-native-firebase
