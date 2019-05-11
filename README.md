# Surplus

Surplus is an application that prevents restaurants from losing money due to food waste and focuses on high food insecurity rates amongst college students 

![Surplus](https://im3.ezgif.com/tmp/ezgif-3-d718fad228dc.gif)

(Surplus: Get Started Screen)

## Inspiration

Surplus is an application that prevents restaurants from losing money due to food waste and focuses on high Food insecurity rates amongst college students. Restaurants post leftovers on our application that would otherwise be thrown away at a discounted price. Students are notified that a local restaurant is offering a special deal and have the opportunity to pay a lesser price for a meal while restaurants can make extra money. Restaurants are able to make some of their money back, students can grab a discounted meal — food doesn’t end up in the trash and students have the opportunity to have a meal.

LinkedIn: https://www.linkedin.com/company/surplusfoods/

## Backlog

| ID | Requirements                                                                                                                                | Priority  | Complete |
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

## Prerequisites
- Mac Mojave installed
- Xcode 10.0 or above installed

NOTE: Before installing, be sure to delete all previous clones of this repository. To delete old Surplus folders via terminal, run this command:

```bash
rm -rf Surplus
```

Or you can find the old Surplus folder in 'Finder' and delete it that way.
## Installation

To install the project, clone this repository onto the home directory and run the installation bash script. To do this, open a terminal and run these commands:

```bash
cd ~
git clone https://github.com/Francisco-Ibarra07/Surplus.git
cd Surplus
sh set_project_dependencies.sh
```
Accept any installation prompts that the terminal gives you by pressing the [ENTER] key.

Once the script is finished, it should have installed all the necessary dependencies needed for this project (As of Feb 9, 2019), and opened up the 'Surplus.xcworkspace' file in Xcode. 

The next step is to set the **Xcode command line tools**. This can be found in the XCode preferences menu. 
- Go to Xcode -> preferences -> locations and set the Xcode command line tools to 'Xcode 10.1'


The final step is to choose which iOS device to run the project on and hit the 'Play' button at the top left of the screen

## Contributing
Make sure you are always developing on the correct branch. To check which branch you are on you can do this command:
```bash
git branch
```
To switch between branches do:
```bash
git checkout [NAMEOFBRANCH]
```

Commit often and be sure the project builds on Xcode before pushing back to the repository!
