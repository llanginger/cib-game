//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserAvatar } from "../../components/UserAvatar"
import { AccountScreenSection } from "./accountScreenComponents/AccountScreenSection"
import { AccountScreenAvatar } from "./accountScreenComponents/AccountScreenAvatar"

//Interfaces
interface IAccountScreenProps {
    navigator: any
}

interface IAccountScreenState {

}

// create a component

export class AccountScreen extends React.Component<IAccountScreenProps, IAccountScreenState> {

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                console.log("Dismiss modal")
                this.props.navigator.dismissModal();
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <AccountScreenAvatar />
                <AccountScreenSection />
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#daf6fa",
    },
});
