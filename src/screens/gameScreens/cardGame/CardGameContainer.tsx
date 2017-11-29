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
import { ICardGameCard } from "../../../redux/reducers/index"
import { DuoCard } from "../components/imageCard/ImageCard"
import { ScoreContainer } from "../../../components/score/ScoreContainer"
import { DuoCardHeaderText } from "./components/CardHeaderText"
import { DuoCardButton } from "./components/CardButton"
import { getDuoCards } from "./components/cardLevels"

import { cardGameSubmitWord, cardGameNewLevel } from "../../../redux/actions/index"

interface IDuoGameCardProps {
    level: {
        headerText: string;
        cards: ICardGameCard[]
    }
    showAnswer: boolean;
    dispatch?: any
    cardSelected: boolean
}

const _DuoCardContainer = (props: IDuoGameCardProps) => {
    console.log("Duo imageCard containe props: ", props)
    const { level, dispatch } = props
    const { headerText, cards } = level
    const arr = [1, 2, 3]

    const chooseButton = () => {
        if (!props.showAnswer) {
            return (
                <DuoCardButton
                    active={props.cardSelected}
                    activeText="Check!"
                    inactiveText="Pick a card"
                    dispatchAction={cardGameSubmitWord()}
                />
            )
        } else {
            return (
                <DuoCardButton
                    active={true}
                    activeText="Next puzzle!"
                    dispatchAction={cardGameNewLevel(getDuoCards(), "card")}
                />
            )
        }
    }

    // Create rows of 2 cards per row
    const mapDuoCards = () => {
        const cardsPerRow: number = 2
        return cards.map((card, i) => {
            return (
                <DuoCard
                    selected={card.selected}
                    showAnswer={props.showAnswer}
                    correctAnswer={card.correctAnswer}
                    id={card.id}
                    image={card.image}
                    key={i}
                    onPress={() => dispatch({ type: "_DUO_SELECT_CARD", payload: { id: card.id, correctAnswer: card.correctAnswer } })}
                />
            )
        }).reduce((prevValue: any[], element, index) => {
            if (index % cardsPerRow === 0) {
                prevValue.push([])
            }
            prevValue[prevValue.length - 1].push(element)
            return prevValue
        }, []).map((row, i) => {
            return <View style={styles.subContainer} key={i}>{row}</View>
        })
    }

    return (
        <View style={styles.container}>
            <ScoreContainer containerProps={{ alignSelf: "flex-end" }} />
            <DuoCardHeaderText text={headerText} />
            {mapDuoCards()}
            {chooseButton()}
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        level: state.cardGameReducer.level,
        cardSelected: state.cardGameReducer.cardSelected,
        showAnswer: state.cardGameReducer.showAnswer
    }
}

export const DuoCardContainer = connect(mapStateToProps)(_DuoCardContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf6fa"
    },
    subContainer: {
        flexDirection: "row",
        marginVertical: 5
    },
    textContainer: {
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "85%",
        borderRadius: 15,
        backgroundColor: "white",
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }
    },
    text: {
        fontSize: 16,
    }
})