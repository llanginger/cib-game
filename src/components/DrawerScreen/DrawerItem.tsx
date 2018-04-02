import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface IDrawerItemProps {
    navigator: any;
    text: any;
    backgroundColor: string;
    navTo: string;
}

export const DrawerItem = (props: IDrawerItemProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.menuItem,
                { backgroundColor: props.backgroundColor }
            ]}
            onPress={() => {
                props.navigator.toggleDrawer({
                    side: "left",
                    animated: true,
                    to: "closed"
                });
                props.navigator.showModal({
                    screen: props.navTo,
                    title: "Modal",
                    passProps: {},
                    navigatorStyle: {},
                    animationType: "slide-up",
                    navigatorButtons: {
                        leftButtons: [
                            {
                                title: "menu",
                                id: "menu",
                                buttonColor: "orangered"
                            }
                        ]
                    }
                });
            }}
        >
            <Text style={styles.menuItemText}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        marginVertical: 5,
        paddingVertical: 20,
        backgroundColor: "palevioletred"
    },
    menuItemText: {
        textAlign: "center",
        color: "white",
        fontSize: 16
    }
});
