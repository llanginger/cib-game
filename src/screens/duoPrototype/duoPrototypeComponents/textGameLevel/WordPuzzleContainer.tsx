import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../../../redux/store";

export const WordPuzzleContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This will be where the ______ goes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "60%",
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 30
    },
    text: {
        fontSize: 16
    }
})