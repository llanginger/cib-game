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
import { IDuoTextGameWord } from "../../../../redux/reducers/index"

interface IWordPuzzleContainerProps {
    currentSelectedWord: IDuoTextGameWord;
    bodyText: [string, string];
    showAnswer: boolean;
    correct: boolean
}

const _WordPuzzleContainer = (props: IWordPuzzleContainerProps) => {
    const { word } = props.currentSelectedWord
    console.log("Current selected word: ", word)

    const underlineColor = () => {
        if (!props.showAnswer) {
            return { color: "black" }
        } else {
            if (props.correct) {
                return { color: "green" }
            } else {
                return { color: "orangered" }
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.bodyText[0]} <Text style={[styles.underlineText, underlineColor()]}>{word.length > 0 ? word : "_____"}</Text> {props.bodyText[1]}
            </Text>
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        bodyText: state.duoTextGameReducer.textGameLevel.bodyText,
        currentSelectedWord: state.duoTextGameReducer.textGameLevel.currentSelectedWord
    }
}

export const WordPuzzleContainer = connect(mapStateToProps)(_WordPuzzleContainer)

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "white",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,

        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }
        // marginBottom: 30
    },
    text: {
        fontSize: 16
    },
    underlineText: {
        fontSize: 18,
        textDecorationLine: "underline",
        color: "orangered"
    }
})