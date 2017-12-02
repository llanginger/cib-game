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
import { IReducers, } from "../../../redux/store";
import { IWordGameLevel, IWordGameWord } from "../../../redux/reducers/index";

import { WordContainer } from "./components/WordContainer"
import { WordFillBlank } from "./components/WordFillBlank"
import { SubmitButton } from "../components/SubmitButton"

import { getTextGameLevel } from "./components/wordLevels"
import { ImageCard } from "../components/imageCard/ImageCard"
import { WordGameText } from "./components/WordGameText"
import { ScoreContainer } from "../../../components/score/ScoreContainer"

import { wordGameNewLevel, wordGameSubmitWord } from "../../../redux/actions/index"

interface IDuoTextGameContainerProps {
    dispatch?: any;
    textGameLevel: IWordGameLevel;
    currentSelectedWord: IWordGameWord
    wordSelected: boolean;
    seenLevels: number[]
    showAnswer: boolean
}

export const _WordGameContainer = (props: IDuoTextGameContainerProps) => {

    const { textGameLevel, wordSelected, showAnswer, currentSelectedWord, seenLevels } = props


    const chooseButton = () => {
        if (!props.showAnswer) {
            return (
                <SubmitButton
                    active={props.wordSelected}
                    activeText="Check!"
                    inactiveText="Pick a word!"
                    dispatchAction={wordGameSubmitWord(currentSelectedWord.correct)}
                />
            )
        } else {
            return (
                <SubmitButton
                    active={true}
                    activeText="Next puzzle!"
                    dispatchAction={wordGameNewLevel(getTextGameLevel(seenLevels), "card")}
                />
            )
        }
    }
    return (
        <View style={styles.container}>
            <ImageCard
                image={props.showAnswer ? props.textGameLevel.answerImage : props.textGameLevel.image}
                id={1}
                correctAnswer={true}
                onPress={() => console.log("Pressed")}
                selected={false}
                containerProps={{ width: "60%" }}
                hideRadio
            />
            <WordGameText text={props.textGameLevel.headerText} />
            <WordContainer />
            {chooseButton()}
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        textGameLevel: state.wordGameReducer.textGameLevel,
        currentSelectedWord: state.wordGameReducer.currentSelectedWord,
        wordSelected: state.wordGameReducer.wordSelected,
        showAnswer: state.wordGameReducer.showAnswer,
        seenLevels: state.wordGameReducer.seenLevels
    }
}

export const WordGameContainer = connect(mapStateToProps)(_WordGameContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf6fa"
    },
    text: {
        fontSize: 16,
    }

})