//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavbuttonBassClass } from "../shared/NavbuttonBaseClass"
import { LoginInput } from "./components/LoginInput"
import { LoginTitle } from "./components/LoginTitle"
import { LoginButton } from "./components/LoginButton"

//Interfaces
interface ILoginScreenProps {
    children: any;
    navigator?: any
}

interface ILoginScreenState {
    showLoginButton: boolean
}

// create a component

export class LoginScreen extends React.Component<ILoginScreenProps, ILoginScreenState> {

    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true
    }

    constructor(props) {
        super(props)

        this.state = { showLoginButton: false }
        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );

        this._login = this._login.bind(this)
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                this.props.navigator.toggleDrawer({
                    side: "left", // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true // does the toggle have transition animation or does it happen immediately (optional)
                });
            }
        }
    }

    _login() {
        console.log("Login attempt")
        this.props.navigator.resetTo({ screen: "HomeScreen" })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <LoginTitle />
                <LoginInput
                    placeholder="Nombre Usuario"
                    onSubmit={() => console.log("Submit username")}
                />
                <LoginInput
                    placeholder="Contraseña"
                    inputProps={{ secureTextEntry: true }}
                    onSubmit={() => this.setState({ showLoginButton: true })}
                />
                <LoginButton
                    show={this.state.showLoginButton}
                    onPress={this._login}
                />
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009ee0',
    },
});
