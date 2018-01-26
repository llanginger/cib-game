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

import { PulsingText } from "./PulsingText"


interface IDuoCardButtonProps {
    active?: boolean;
    animate: boolean
    activeText?: string;
    inactiveText?: string;
    dispatch?: any;
    dispatchAction?: {}
}

export const _SubmitButton = (props: IDuoCardButtonProps) => {
    console.log("Rendering button")
    return (
        <TouchableOpacity
            onPress={() => props.dispatch(props.dispatchAction)}
            disabled={!props.active}
            style={[styles.container, { backgroundColor: props.active ? "#3F51B5" : "#BDBDBD" }]}
        >
            <PulsingText
                textStyles={[styles.text, { color: props.active ? "white" : "black" }]}
                animate={props.animate}
                text={
                    props.active ?
                        props.activeText || "Confirm Selection" :
                        props.inactiveText || "Pick a Card!"
                }
            />

        </TouchableOpacity>
    )
}

const mapStateToProps = (state: IReducers) => {
    return {}
}

export const SubmitButton = connect(mapStateToProps)(_SubmitButton)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 60,
        backgroundColor: "#3F51B5",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
})