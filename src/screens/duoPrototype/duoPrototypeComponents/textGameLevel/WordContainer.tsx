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

interface IWordContainerProps {
    words: IDuoTextGameWord[]
    dispatch?: any
}

const _WordContainer = (props: IWordContainerProps) => {

    const { words } = props
    const makeWords = () => {
        return words.map((word, i) => {
            return <View key={i}><Text style={[styles.wordStyle, { backgroundColor: word.correct ? "green" : "red" }]} >{word.word}</Text></View>
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
        words: state.duoGameReducer.textGameLevel.level.words
    }
}

export const WordContainer = connect(mapStateToProps)(_WordContainer)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 15,
        width: "60%",
        flexWrap: "wrap",
        paddingVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
    },
    wordStyle: {
        padding: 5,
        fontSize: 20,
        margin: 5,
        backgroundColor: "purple",
        color: "white",
        borderRadius: 5,
        overflow: "hidden"
    }

})