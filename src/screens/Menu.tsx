import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const menuColors = [
    "#cc0066",
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
            {makeMenuItems()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#daf6fa"
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
