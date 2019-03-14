import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import firebase from 'react-native-firebase';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }
    static navigationOptions = {
        headerStyle: {
            borderBottomWidth: 0,
        }
    }

    handleForgotPassword = () => {

        const { email } = this.state;

        // Send link through email to reset password
        // The link itself handles the password reset
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert("A password reset link was sent to your email");
                this.props.navigation.navigate('SignIn');
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert("Your email is formatted incorrectly");
                        break;
                    case 'auth/user-not-found':
                        alert("That email does not exist");
                        break;
                    default:
                        console.log(error.code);
                        alert("ERROR: FP.js#default");
                        break;
                }
            });
    }

    render() {
        return (
            <View style={styles.container} >

                <View style={styles.containerA}>
                    <Text> Forgot Password? </Text>
                    <Text> Enter your email below </Text>
                </View>

                <View style={styles.form}>
                    <TextInput style={styles.input}
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={this.handleForgotPassword} style={styles.button} >
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 1,
        // borderColor: 'blue',
        margin: 25,
    },
    input: {
        // height: 40,
        paddingTop: 10,
        paddingBottom: 8,
        width: '100%',
        textAlign: 'left',
        borderBottomWidth: 1
    },
    form: {
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'orange',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D33B32',
        borderRadius: 10,
        // marginTop: 200,
        marginBottom: 10,
        // marginTop: 15,
        // padding: 10,
        height: 45,
        width: '100%',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'orange',
    },
    image: {
        height: 60,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        marginTop: 30,
        // marginBottom: 50
    },
    textButton: {
        color: '#0645AD',
        // marginTop: 10,
    },
});
