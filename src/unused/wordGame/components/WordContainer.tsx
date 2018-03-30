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

import { Word } from "./Word"

interface IWordContainerProps {
    words: IWordGameWord[]
    dispatch?: any
}

const _WordContainer = (props: IWordContainerProps) => {

    const { words } = props
    const makeWords = () => {
        return words.map((word, i) => {
            return <Word key={i} word={word} />
        })
    }
    return (
        <View style={styles.container}>
            {makeWords()}
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        words: state.wordGameReducer.textGameLevel.words
    }
}

export const WordContainer = connect(mapStateToProps)(_WordContainer)

const styles = StyleSheet.create({
    container: {
        width: "80%",
        padding: 5,
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    }
})