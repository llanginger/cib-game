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
import DeviceInfo from 'react-native-device-info'

interface IWordProps {
    dispatch?: any;
    word: IWordGameWord;
    showAnswer: boolean;
    deviceType: string
    currentlySelectedWord: IWordGameWord
}

const _Word = (props: IWordProps) => {


    const { word, dispatch, currentlySelectedWord, showAnswer, deviceType } = props

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


    const getUnderline: any = () => {
        return {
            textDecorationLine: word.word === currentlySelectedWord.word ? "underline" : "none"
        }
    }

    const iPadStyles = () => {

        return props.deviceType === "iPad" ? {
            margin: 15,
            fontSize: 24
        } : {}
    }


    return (
        <TouchableOpacity
            disabled={props.showAnswer}
            style={styles.container}
            onPress={() => dispatch({
                type: "WORDGAME_SELECT_WORD",
                payload: {
                    word
                }
            })}
        >
            <Text style={[styles.wordStyle, {
                ...getWordColor(),
                ...getUnderline(),
                ...iPadStyles()
            }]} >
                {word.word}
            </Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        showAnswer: state.wordGameReducer.showAnswer,
        currentlySelectedWord: state.wordGameReducer.currentSelectedWord,
        deviceType: state.deviceTypeReducer.deviceType
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