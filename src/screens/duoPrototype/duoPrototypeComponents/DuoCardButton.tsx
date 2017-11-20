import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ViewStyle,
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
import { getDuoCards } from "./DuoLevels"

interface IDuoCardButtonProps {
    active?: boolean;
    dispatch?: any
}

export const _DuoCardButton = (props: IDuoCardButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => props.dispatch({
                type: "_DUO_CONFIRM_SELECTION",
                payload: {
                    levels: getDuoCards()
                }
            })}
            disabled={!props.active}
            style={[styles.container, { backgroundColor: props.active ? "#3F51B5" : "#BDBDBD" }]}
        >
            <Text
                style={[styles.text, { color: props.active ? "white" : "black" }]}
            >
                {
                    props.active ?
                        "Confirm Selection" :
                        "Pick a Card!"
                }
            </Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        active: state.duoGameReducer.cardSelected,
    }
}

export const DuoCardButton = connect(mapStateToProps)(_DuoCardButton)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#3F51B5",
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    }
})