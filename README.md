# Surplus 🍎

Surplus is an application that prevents restaurants from losing money due to food waste and focuses on high food insecurity rates amongst college students 

![Surplus](https://im3.ezgif.com/tmp/ezgif-3-d718fad228dc.gif)

(Surplus: Get Started Screen)


## Inspiration

Surplus is an application that prevents restaurants from losing money due to food waste and focuses on high Food insecurity rates amongst college students. Restaurants post leftovers on our application that would otherwise be thrown away at a discounted price. Students are notified that a local restaurant is offering a special deal and have the opportunity to pay a lesser price for a meal while restaurants can make extra money. Restaurants are able to make some of their money back, students can grab a discounted meal — food doesn’t end up in the trash and students have the opportunity to have a meal.

LinkedIn: https://www.linkedin.com/company/surplusfoods/


## Backlog

| ID | Requirement                                                                                                                                | Priority  | Complete |
|----|---------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| 1  | As an unauthorized customer, I want to create a new account                                                                                 | Essential |     x    |
| 2  | As an authorized customer, I want to retrieve all food options                                                                              | Essential |     x    |
| 3  | As an authorized customer, I want to add food item(s) to the shopping cart and view items that have already been added to the shopping cart | Essential |     x    |
| 4  | As an authorized customer, I want to edit my account information                                                                            | Essential |     x    |
| 5  | As an authorized customer, I want to delete food item(s) from the shopping cart                                                             | Essential |     x    |
| 6  | As an authorized customer, I want to reserve food item(s)                                                                                   | Essential |     x    |
| 7  | As an unauthorized business owner, I want to create a new account and claim my business                                                     | Essential |     x    |
| 8  | As an authorized business owner, I want to post new food item(s) into the menu                                                              | Essential |     x    |
| 9  | As an authorized business owner, I want to edit food item(s) from the menu                                                                  | Essential |     x    |
| 10 | As an authorized business owner, I want to delete food item(s) from the menu                                                                | Essential |     x    |
| 11 | As an authorized business owner, I want to edit my personal information                                                                     | Essential |     x    |
| 12 | As an authorized business owner, I want to edit my restaurant information                                                                   | Essential |     x    |
| 13 | As a authorized customer, I want an email confirmation of my food reservation(s)                                                            | Desirable |          |
| 14 | As a customer, I want to search for food items                                                                                              | Desirable |          |
| 15 | Integrate a payment system (i.e. Paypal or Stripe)                                                                                          | Desirable |          |
| 16 | As an authorized customer, I want to add/edit/remove credit card information                                                                | Desirable |          |
| 17 | As an authorized business owner, I want to retrieve money made                                                                              | Desirable |          |
| 18 | Create an account using Facebook or Google+                                                                                                 | Desirable |          |
| 19 | Browse as guest                                                                                                                             | Desirable |     x    |
| 20 | Include a reward system for loyal customers                                                                                                 | Optional  |          |
| 21 | Add map for each restaurant to show the distance from current location                                                                      | Optional  |          |
| 22 | As an authorized customer, I want to edit the quantity of food item(s) in the shopping cart                                                 | Optional  |          |


## Installation
These are the installation instructions to install the Surplus ios application. 

To do the installation properly, make sure you have the correct dependencies first. The latest version of Mac Mojave MUST be installed. You will also need to have the LATEST version of Xcode. To install React Native and CocoaPods, follow the steps in the 'Pre-requisites' section. 

Once all of these dependencies AND Pre-requisites are done, THEN you may start the 'Installation instructions' section

### Dependencies:
Mac Mojave installed
Xcode 10.1 or above
React Native version 0.58.3
CocoaPods 

### Pre-requisites:
1. Install CocoaPods by typing in to the terminal: 'sudo gem install cocoapods'

2. Install the latest React Native framework using Homebrew. Type these commands, IN ORDER, onto the terminal
    a) /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    b) brew install node
    c) brew install watchman
    d) brew install wget
    e) brew install yarn
    f) brew install -g react-native-cli

### Installation instructions: 
1. Unzip the 'Surplus' folder onto the Desktop
2. Open up a terminal and 'cd' into the unzipped folder:
3. This can be done by typing in 'cd ~/Desktop/Surplus' onto the terminal
4. Once you are inside the Surplus folder, type 'npm install'
5. Open the XCode project file titled 'Surplus.xcworkspace'
6. Its located in 'Surplus/ios/Surplus.xcworkspace'
7. Once XCode opens, open up the XCode Preferences
8. This can be found under 'Xcode' in the menu bar
9. Once the Preferences are opened, Navigate to 'Locations'
10. Under 'Command Line Tools', make sure at least 'Xcode 10.1' or above is selected
11. Close the Preferences
12. Under 'Product' in the Xcode menu bar, select 'Build'
13. Once the project builds successfully, on the top left next to the 'Play' button, choose an iphone simulator
14. Hit the 'Play' button to start the Surplus app


## Acknowledgement
Surplus was developed by 
- [Francisco Ibarra](https://github.com/Francisco-Ibarra07) : Spearheading back-end and Firebase
- [Jasmine Mai](https://github.com/jasminemai97) : Spearheading front-end and deliverable writer 
- [Nhat Nguyen](https://github.com/nguyen-nhat) : Full stack - Bridging front-end and back-end
- [Cong He](https://github.com/IWKUA) : UX and deliverable writer
