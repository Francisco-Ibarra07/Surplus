
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
      emptyTextView: false,
      cartItemsList: []
    }
  }

  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    }
  }

  populateShoppingCart = () => {
    const userId = firebase.auth().currentUser.uid;
    const refToShoppingCart = firebase.database().ref('/customers/users/' + userId + '/shoppingcart')
    const activity = this
    refToShoppingCart.on('value', function (snapshot) {

      // If shopping cart is empty, display message and return
      if (snapshot._childKeys.length === 0) {
        activity.setState({ emptyTextView: true });
        console.log("list is empty")
        console.log("list:", snapshot)
        console.log("refToShoppingCart:", refToShoppingCart)
        console.log("id:", userId)
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
        for (let i = 0; i < individualCartItems.length; i++) {
          currentItem = individualCartItems[i]

          // name, quantity, price
          cartItemComponents.push(
            <CartItem
              key={i}
              name={currentItem.item_name}
              quantity={currentItem.item_quantity}
              price={currentItem.item_price}
              imageURL={currentItem.item_image}
            ></CartItem>
          )
        }

        console.log(cartItemComponents)

        activity.setState({ cartItemsList: cartItemComponents })
      } // end of 'else'
    }) // end of 'on'
  }

  componentDidMount() {
    this.populateShoppingCart()
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {/* Top part: Text and Tree Image */}
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.h1}>Yum! Enjoy your meal!</Text>
            <Text style={styles.h2}>Order Summary</Text>
          </View>
          <Image style={styles.topImage}
            source={require('./resources/tree.jpg')}
          />
        </View>

        {this.state.emptyTextView && (<Text> You currently have no items in your shopping cart </Text>)}

        {!this.state.emptyTextView && this.state.cartItemsList}

        <View style={styles.totalBox}>
          <Text style={styles.total}>Convenience Fee: $0.50</Text>
          <Text style={styles.total}>Tax: $1.20</Text>
          <Text style={styles.total}>Total: $7.70</Text>
        </View>

        <RedButton
          style={{ marginBottom: 16 }}
          buttonText='Done'
        />

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
