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
import { IDuoGameCard } from "../../../redux/reducers/index"
import { DuoCard } from "./DuoCard"

interface IDuoGameCardProps {
    cards: IDuoGameCard[]
    dispatch?: any
}

const _DuoCardContainer = (props: IDuoGameCardProps) => {
    const { cards, dispatch } = props

    // Create rows of 2 cards per row
    const mapDuoCards = () => {
        const cardsPerRow: number = 2
        return cards.map((card, i) => {
            return (
                <DuoCard
                    selected={card.selected}
                    correctAnswer={card.correctAnswer}
                    id={card.id}
                    image={card.image}
                    key={i}
                    onPress={() => dispatch({ type: "_DUO_SELECT_CARD", payload: { id: card.id } })}
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
            <View style={styles.textContainer}>
                <Text style={styles.text}>Choose the picture of a "HOT" thought</Text>
            </View>
            {mapDuoCards()}
        </View>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        cards: state.duoGameReducer.cards
    }
}

export const DuoCardContainer = connect(mapStateToProps)(_DuoCardContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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