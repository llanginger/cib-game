import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const menuColors = [
    "#3333cc",
    "#ffcc33",
    "#339900",
    "#ff9933",
    "#663366"
];

export const Menu = props => {
    const makeMenuItems = () => {
        return menuColors.map((color, i) => {
            return (
                <TouchableOpacity
                    style={[styles.menuItem, { backgroundColor: color }]}
                    key={i}
                >
                    <Text style={styles.menuItemText}>
                        Menu Options {i + 1}
                    </Text>
                </TouchableOpacity>
            );
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../images/cibLogo.png")}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity
                style={[styles.menuItem, { backgroundColor: "#cc0066" }]}
                onPress={() => {
                    props.navigator.toggleDrawer({
                        side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                        animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                        to: 'closed' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
                    });
                    props.navigator.showModal({
                        screen: "CharacterSelect", // unique ID registered with Navigation.registerScreen
                        title: "Modal", // title of the screen as appears in the nav bar (optional)
                        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
                        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                        animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                    })
                }}
            >
                <Text style={styles.menuItemText}>
                    Select Character
                    </Text>
            </TouchableOpacity>
            {makeMenuItems()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "papayawhip"
    },
    logoContainer: {
        height: 100,
        marginBottom: 5,
        backgroundColor: "white",
        justifyContent: "center"
    },
    logo: {
        marginHorizontal: 20,
        height: 50,
        width: undefined
    },
    menuItem: {
        marginVertical: 5,
        paddingVertical: 20,
        backgroundColor: "palevioletred"
    },
    menuItemText: {
        textAlign: "center",
        color: "white"
    }
});
