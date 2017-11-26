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
    word: IDuoTextGameWord
}

const _Word = (props: IWordProps) => {

    const { word, dispatch } = props
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => dispatch({
                type: "_DUO_TEXTGAME_SELECT_WORD",
                payload: {
                    word
                }
            })}
        >
            <Text style={[styles.wordStyle]} >
                {word.word}
            </Text>
        </TouchableOpacity>
    )
}

export const Word = connect()(_Word)

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
        fontSize: 20,
        margin: 5,
        color: "black",
        overflow: "hidden"
    }

})