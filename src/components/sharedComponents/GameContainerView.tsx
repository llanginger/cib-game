import React, { Component } from "react";
import { StyleSheet, View } from "react-native"

export const GameContainerView: React.StatelessComponent = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 80,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf6fa"
    },
})