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
    const mapDuoCards = () => {
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
        })
    }
    return (
        <View style={styles.container}>
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
        flexDirection: "column"
    },
    subContainer: {
        flexDirection: "row",
        marginVertical: 5
    }
})