import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ViewStyle,
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

interface IDuoCardHeaderTextProps {
    text: string
    containerStyles?: ViewStyle
}

export const DuoCardHeaderText = (props: IDuoCardHeaderTextProps) => {

    return (
        <View style={[styles.textContainer, props.containerStyles]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "85%",
        borderRadius: 15,
        backgroundColor: "white",
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }
    },
    text: {
        fontSize: 14,
    }
})