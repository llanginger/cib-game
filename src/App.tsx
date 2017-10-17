/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView from "react-native-maps";
import { ChatBot } from "./ChatBot";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});

const Menu = props => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
        </View>
    );
};

// Screen section

const registerScreens = () => {
    Navigation.registerComponent("MainScreen", () => ChatBot);
    Navigation.registerComponent("Menu", () => Menu);
};

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: "MainScreen",
        navigatorStyle: {
            navBarTextColor: "red",
            drawUnderNavBar: true,
            navBarTranslucent: true,
            navBarTransparent: true
        }
    },
    drawer: {
        left: {
            screen: "Menu"
        },
        style: {
            // ( iOS only )
            drawerShadow: true, // optional, add this if you want a side menu drawer shadow
            contentOverlayColor: "rgba(0,0,0,0.25)", // optional, add this if you want a overlay color when drawer is open
            leftDrawerWidth: 70 // optional, add this if you want a define left drawer width (50=percent)
        }
    }
});

// Navigation.startTabBasedApp({
//     tabs: [
//         {
//             label: "One",
//             screen: "MainScreen",
//             title: "Main screen",
//             icon: require("./icons/icons8-Home-50.png")
//         },
//         {
//             label: "Two",
//             screen: "MainScreen",
//             title: "Main screen 2",
//             icon: require("./icons/icons8-Map-50.png")
//         },
//         {
//             label: "Map",
//             screen: "MapScreen",
//             title: "Map",
//             icon: require("./icons/icons8-Map-50.png")
//         }
//     ],
//     drawer: {
//         // optional, add this if you want a side menu drawer in your app
//         left: {
//             // optional, define if you want a drawer from the left
//             screen: "Menu" // unique ID registered with Navigation.registerScreen
//         },
//         style: {
//             // ( iOS only )
//             drawerShadow: true, // optional, add this if you want a side menu drawer shadow
//             contentOverlayColor: "rgba(0,0,0,0.25)", // optional, add this if you want a overlay color when drawer is open
//             leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
//             rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
//             shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
//         },
//         type: "MMDrawer", // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
//         animationType: "slide-and-scale", //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
//         // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
//         disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
//     }
// });

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Welcome to React Native!</Text>
//                 <Text style={styles.instructions}>
//                     To get started, edit App.js
//                 </Text>
//                 <Text style={styles.instructions}>{instructions}</Text>
//             </View>
//         );
//     }
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    map: {
        position: "absolute",
        top: 50,
        bottom: 0,
        left: 0,
        right: 0
    },
    Modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orangered"
    }
});
