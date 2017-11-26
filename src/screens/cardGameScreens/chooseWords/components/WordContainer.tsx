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

import { Word } from "./Word"

interface IWordContainerProps {
    words: IDuoTextGameWord[]
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
        words: state.duoTextGameReducer.textGameLevel.words
    }
}

export const WordContainer = connect(mapStateToProps)(_WordContainer)

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        // borderRadius: 15,
        width: "80%",
        padding: 5,
        flexWrap: "wrap",
        // paddingVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        // shadowColor: "#888",
        // shadowOpacity: 0.5,
        // shadowOffset: { width: 5, height: 5 }
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