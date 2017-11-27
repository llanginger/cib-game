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

interface IWordProps {
    dispatch?: any;
    word: IDuoTextGameWord;
    showAnswer: boolean
}

const _Word = (props: IWordProps) => {

    const { word, dispatch, showAnswer } = props

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
            <Text style={[styles.wordStyle, getWordColor()]} >
                {word.word}
            </Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        showAnswer: state.duoTextGameReducer.showAnswer,
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