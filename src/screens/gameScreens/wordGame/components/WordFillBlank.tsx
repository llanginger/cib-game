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
import { IReducers, IColorsReducer } from "../../../../redux/store";
import { IWordGameWord } from "../../../../redux/reducers/index"

interface IWordPuzzleContainerProps {
    currentSelectedWord: IWordGameWord;
    colors: IColorsReducer;
    bodyText: [string, string];
    showAnswer: boolean;
    deviceType: string;
}

const _WordFillBlank = (props: IWordPuzzleContainerProps) => {
    const { colors } = props
    const { word, correct } = props.currentSelectedWord
    console.log("Current selected word: ", word)

    const wordColor = () => {
        if (!props.showAnswer) {
            return { color: "black" }
        } else {
            if (correct) {
                return { color: colors.COOL }
            } else {
                return { color: colors.HOT }
            }
        }
    }

    const iPadMainTextStyles = () => {
        return props.deviceType === "iPad" ? {
            fontSize: 24
        } : {}
    }

    const iPadSpanStyles = () => {
        return props.deviceType === "iPad" ? {
            fontSize: 30
        } : {}
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.text, { ...iPadMainTextStyles() }]}>
                "
                {props.bodyText[0]} <Text style={
                    [
                        styles.underlineText,
                        wordColor(),
                        iPadSpanStyles()
                    ]
                }>
                    {word.length > 0 ? word : "_____"}</Text> {props.bodyText[1]}
                "
            </Text>
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        bodyText: state.wordGameReducer.textGameLevel.bodyText,
        currentSelectedWord: state.wordGameReducer.currentSelectedWord,
        showAnswer: state.wordGameReducer.showAnswer,
        deviceType: state.deviceTypeReducer.deviceType,
        colors: state.colorsReducer
    }
}

export const WordFillBlank = connect(mapStateToProps)(_WordFillBlank)

const styles = StyleSheet.create({
    container: {
        marginTop: 10
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