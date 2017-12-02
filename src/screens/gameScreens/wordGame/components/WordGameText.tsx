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

import { WordFillBlank } from "./WordFillBlank"

interface IHeaderTextProps {
    text: string
}

export const WordGameText = (props: IHeaderTextProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <WordFillBlank correct={false} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 15,
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }
    },
    text: {
        fontSize: 16,
    }

})