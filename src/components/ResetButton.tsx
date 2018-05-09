import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import RNRestart from "react-native-restart";

export const ResetButton = () => {
    return (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => RNRestart.Restart()}
        >
            <Text style={styles.text}>RESTART</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        marginVertical: 5,
        paddingVertical: 20,
        backgroundColor: "palevioletred"
    },
    text: {
        textAlign: "center",
        color: "white",
        fontSize: 16
    }
});
