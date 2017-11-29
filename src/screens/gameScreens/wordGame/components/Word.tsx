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

interface IWordProps {
    dispatch?: any;
    word: IWordGameWord;
    showAnswer: boolean;
    currentlySelectedWord: IWordGameWord
}

const _Word = (props: IWordProps) => {

    const { word, dispatch, currentlySelectedWord, showAnswer } = props

    const getWordColor = () => {
        if (showAnswer) {
            if (word.correct) {
                return { color: "green" }
            } else {
                return { color: "orangered" }
            }
        } else {
            return { color: "black" }
        }
    }

    const selectedStyles: () => {} = () => {
        if (word.word === currentlySelectedWord.word) {
            return {
                fontSize: 20,
                textDecorationLine: "underline"
            }
        } else {
            return {
                fontSize: 16
            }
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => dispatch({
                type: "TEXTGAME_SELECT_WORD",
                payload: {
                    word
                }
            })}
        >
            <Text style={[styles.wordStyle, {
                ...selectedStyles(),
                ...getWordColor()
            }]} >
                {word.word}
            </Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        showAnswer: state.wordGameReducer.showAnswer,
        currentlySelectedWord: state.wordGameReducer.textGameLevel.currentSelectedWord
    }
}

export const Word = connect(mapStateToProps)(_Word)

const styles = StyleSheet.create({
    container: {
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 3, height: 3 },
        margin: 7,
        backgroundColor: "white",
        borderRadius: 5
    },
    wordStyle: {
        fontSize: 16,
        margin: 7,
        color: "black",
        overflow: "hidden"
    }

})