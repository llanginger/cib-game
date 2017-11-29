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
import { IWordGameWord } from "../../../../redux/reducers/index"

interface IWordPuzzleContainerProps {
    currentSelectedWord: IWordGameWord;
    bodyText: [string, string];
    showAnswer: boolean;
    correct: boolean
}

const _WordFillBlank = (props: IWordPuzzleContainerProps) => {
    const { word, correct } = props.currentSelectedWord
    console.log("Current selected word: ", word)

    const wordColor = () => {
        if (!props.showAnswer) {
            return { color: "black" }
        } else {
            if (correct) {
                return { color: "green" }
            } else {
                return { color: "orangered" }
            }
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.bodyText[0]} <Text style={
                    [
                        styles.underlineText,
                        wordColor()
                    ]
                }>{word.length > 0 ? word : "_____"}</Text> {props.bodyText[1]}
            </Text>
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        bodyText: state.wordGameReducer.textGameLevel.bodyText,
        currentSelectedWord: state.wordGameReducer.currentSelectedWord,
        showAnswer: state.wordGameReducer.showAnswer,
    }
}

export const WordFillBlank = connect(mapStateToProps)(_WordFillBlank)

const styles = StyleSheet.create({
    container: {
        marginTop: 10
        // width: "80%",
        // backgroundColor: "white",
        // padding: 15,
        // alignItems: "center",
        // justifyContent: "center",
        // borderRadius: 15,

        // shadowColor: "#888",
        // shadowOpacity: 0.5,
        // shadowOffset: { width: 5, height: 5 }
        // marginBottom: 30
    },
    text: {
        fontSize: 16,
        textAlign: "center"
    },
    underlineText: {
        fontSize: 18,
        textDecorationLine: "underline",
        color: "orangered"
    }
})