# Surplus

Surplus is an application that prevents restaurants from losing money due to food waste and focuses on high Food Insecurity rates amongst college students. Restaurants post leftovers on our application that would otherwise be thrown away at a discounted price. Students are notified that a local restaurant is offering a special deal and have the opportunity to pay a lesser price for a meal while restaurants can make extra money. Restaurants are able to make some of their money back, students can grab a discounted meal — food doesn’t end up in the trash and students have the opportunity to have a meal.

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

