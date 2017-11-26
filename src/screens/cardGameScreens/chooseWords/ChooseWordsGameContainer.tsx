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
import { IReducers } from "../../../redux/store";
import { IDuoTextGameLevel } from "../../../redux/reducers/index";

import { WordContainer } from "./components/WordContainer"
import { WordPuzzleContainer } from "./components/WordFillBlank"
import { DuoCardButton } from "../chooseCards/components/CardButton"

import { getTextGameLevel } from "./components/wordLevels"
import { DuoCard } from "../components/imageCard/ImageCard"
import { HeaderText } from "./components/WordHeaderText"

interface IDuoTextGameContainerProps {
    dispatch?: any;
    textGameLevel: IDuoTextGameLevel;
    wordSelected: boolean
}

export const _DuoTextGameContainer = (props: IDuoTextGameContainerProps) => {
    return (
        <View style={styles.container}>
            <HeaderText text={props.textGameLevel.headerText} />
            <DuoCard
                image={props.textGameLevel.image}
                id={1}
                correctAnswer={true}
                onPress={() => console.log("Pressed")}
                selected={false}
                containerProps={{ width: "60%" }}
                hideRadio
            />
            <WordPuzzleContainer />
            <WordContainer />
            <DuoCardButton
                active={props.wordSelected}
                dispatchAction={{
                    type: "_DUO_TEXTGAME_SUBMIT_WORD",
                    payload: {
                        textGameLevel: getTextGameLevel()
                    }
                }}
            />
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        textGameLevel: state.duoTextGameReducer.textGameLevel,
        wordSelected: state.duoTextGameReducer.wordSelected
    }
}

export const DuoTextGameContainer = connect(mapStateToProps)(_DuoTextGameContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf6fa"
    },
    text: {
        fontSize: 16,
    }

})