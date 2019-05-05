
import React, { Component } from 'react';
import {
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RedButton from '../components/RedButton';
import CartItem from './components/CartItem';
import firebase from 'react-native-firebase'

export default class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAnonymousUser: false,
      emptyTextView: false,
      cartItemComponents: [],
      individualCartItemsArray: [],
      tax: 0,
      total: 0,
      convenienceFee: 0,
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  populateShoppingCart = () => {
    if (firebase.auth().currentUser === null) {
      this.setState({ isAnonymousUser: true })
      return
    }
    const userId = firebase.auth().currentUser.uid;
    const refToShoppingCart = firebase.database().ref('/customers/users/' + userId + '/shoppingcart')
    const activity = this
    refToShoppingCart.on('value', function (snapshot) {

      // If shopping cart is empty, display message and return
      if (snapshot._childKeys.length === 0) {
        activity.setState({
          emptyTextView: true,
          convenienceFee: 0,
          tax: 0,
          total: 0,
          cartItemComponents: []
        });
      }
      else {
        activity.setState({ emptyTextView: false });
        const snap = snapshot.val()

        let keys = []
        for (let item in snap) {
          keys.push(item)
        }

        let individualCartItems = []
        for (let i = 0; i < keys.length; i++) {
          individualCartItems.push(snap[keys[i]])
        }

        let cartItemComponents = []
        let currentItem = undefined
        let sumOfAllPrices = 0

        for (let i = 0; i < individualCartItems.length; i++) {
          currentItem = individualCartItems[i]

          // sum = sum + (price * quantity)
          sumOfAllPrices = Math.round((sumOfAllPrices + (parseInt(currentItem.item_price) * parseInt(currentItem.item_quantity_desired))) * 100) / 100

          // name, quantity, price
          cartItemComponents.push(
            <CartItem
              key={i}
              name={currentItem.item_name}
              quantity={currentItem.item_quantity_desired}
              price={currentItem.item_price}
              imageURL={currentItem.item_image}
              refToShoppingCart={refToShoppingCart}
              navigation={activity.props.navigation}
            />
          )
        }

        const salesTax = 0.095

        const taxAmount = Math.round((sumOfAllPrices * salesTax) * 100) / 100
        const totalAmountDue = Math.round((sumOfAllPrices + taxAmount) * 100) / 100

        activity.setState({
          cartItemComponents: cartItemComponents,
          total: totalAmountDue,
          tax: taxAmount,
          individualCartItemsArray: individualCartItems
        })
      } // end of 'else'
    }) // end of 'on'
  }

  handleReservation = () => {

    if (this.state.isAnonymousUser) {
      alert('create an account to reserve food')
      return
    }
    let shoppingCartItems = this.state.individualCartItemsArray

    let quantityDesired;
    let originalQuantity;
    let quantityLeft;
    let currentStoreName;
    let currentItem;

    let refToRestaurantOnlineFolder;
    let storeOwnerId;

    for (let i = 0; i < shoppingCartItems.length; i++) {
      console.log(shoppingCartItems[i])
      currentItem = shoppingCartItems[i]

      originalQuantity = parseInt(currentItem.item_quantity_original)
      quantityDesired = currentItem.item_quantity_desired
      currentStoreName = currentItem.store_name

      console.log("From store:", currentStoreName)
      refToRestaurantOnlineFolder = firebase.database().ref('/online/' + currentStoreName)

      refToRestaurantOnlineFolder.on('value', function (snapshot) {
        const snap = snapshot.val()
        storeOwnerId = snap['store_owner_id']
        console.log("snap:", snap)
        console.log("this food item: ", snap.items[currentItem.item_name])
      })
    }

    // this.props.navigation.navigate('ConfirmationPage')
  }

  componentDidMount() {
    this.populateShoppingCart()
  }

  render() {
    const { isAnonymousUser } = this.state
    return (
      <ScrollView style={styles.container}>

        {/* Top part: Text and Tree Image only shows if user is not anonymous*/}
        {!isAnonymousUser && (<View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.h1}>Yum! Enjoy your meal!</Text>
            <Text style={styles.h2}>Order Summary</Text>
          </View>
          <Image style={styles.topImage}
            source={require('./resources/tree.jpg')}
          />
        </View>)}

        {/* This shows if the cart is empty */}
        {this.state.emptyTextView && (<Text> You currently have no items in your shopping cart </Text>)}

        {/* This shows if the shopping cart folder is not empty */}
        {!this.state.emptyTextView && this.state.cartItemComponents}

        {!isAnonymousUser && (<View style={styles.totalBox}>
          {/* <Text style={styles.total}>Convenience Fee: ${this.state.convenienceFee}</Text> */}
          <Text style={styles.total}>Tax: ${this.state.tax}</Text>
          <Text style={styles.total}>Total: ${this.state.total}</Text>
        </View>)}

        {!isAnonymousUser && (<RedButton style={{ marginBottom: 16 }} onPress={this.handleReservation} buttonText='Reserve' />)}

        {isAnonymousUser && (<Button title="Create an account to view a shopping cart!" onPress={() => this.props.navigation.navigate('GetStarted')}></Button>)}
      </ScrollView >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },

  // TOP SECTION
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  h1: {
    color: '#D33B32',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  h2: {
    color: 'gray',
    fontSize: 12,
  },
  topImage: {
    position: 'relative',
    top: 1,
    resizeMode: 'contain',
    height: 80,
    width: 70,
  },

  // CART SECTION
  cart: {
    borderWidth: .50,
    borderColor: 'red',
    borderRadius: 10,
    height: 150,
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 16,
    flexDirection: 'row',
  },
  cartPreview: {
    // borderWidth: 1,
    // borderColor: 'orange',
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodImage: {
    // borderWidth: 1,
    // borderColor: 'blue',
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  description: {
    width: '50%',
    padding: 15,
  },
  totalBox: {
    marginBottom: 16,
  },
  total: {
    textAlign: 'right',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginBottom: 5,
  },
  descriptionText: {
    marginBottom: 5,
  },

  // SUMMARY SECTION
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: .5,
    borderColor: '#D33B32',
  },
  summaryText: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  itemText: {
    fontSize: 12,
  },
  convenienceFee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  feeText: {
    fontSize: 12,
  },
  tax: {
    borderBottomWidth: .5,
    borderColor: '#D33B32',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  taxText: {
    marginBottom: 5,
    fontSize: 12,
  },
  totalCost: {
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'right',
    fontSize: 12,
  },

  // // SAVINGS SECTION
  // cartSaving: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: 5,
  // },
  // pointsImage: {
  //   resizeMode: 'contain',
  //   height: 100,
  //   width: 100,
  // },
  // savings: {
  //   width: '50%',
  // },
  // savingsText: {
  //   fontSize: 12,
  // },
  // totalSavings: {
  //   fontSize: 12,
  //   textAlign: 'right',
  // },
})
