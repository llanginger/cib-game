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

import { GameContainerView } from "../../shared/GameContainerView"

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
        console.log("Choose button called")
        if (!props.showAnswer) {
            return (
                <SubmitButton
                    active={props.wordSelected}
                    animate={false}
                    activeText="Check!"
                    inactiveText="Pick a word!"
                    dispatchAction={wordGameSubmitWord(currentSelectedWord.correct)}
                />
            )
        } else {
            return (
                <SubmitButton
                    active={true}
                    animate={true}
                    activeText="Next Puzzle!"
                    inactiveText=""
                    dispatchAction={wordGameNewLevel(getTextGameLevel(seenLevels), "card")}
                />
            )
        }
    }
    return (
        <View style={{ flex: 1 }} >
            <GameContainerView>
                <ImageCard
                    gameType="word"
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
            </GameContainerView>
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
        paddingTop: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf6fa"
    },
    text: {
        fontSize: 16,
    }

})