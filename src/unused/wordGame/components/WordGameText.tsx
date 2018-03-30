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

import { WordFillBlank } from "./WordFillBlank"

interface IHeaderTextProps {
    text: string
    deviceType: string
}

export const _WordGameText = (props: IHeaderTextProps) => {

    const iPadTextStyles = () => {
        return props.deviceType === "iPad" ? {
            fontSize: 24
        } : {}
    }
    const iPadContainerStyles = () => {
        console.log("Device type in word game text: ", props.deviceType)
        return props.deviceType === "iPad" ? {
            marginHorizontal: 30
        } : {}
    }

    return (
        <View style={[styles.container, { ...iPadContainerStyles() }]}>
            <Text style={[styles.text, { ...iPadTextStyles() }]}>{props.text}</Text>
            <WordFillBlank />
        </View>

    )
}

const mapStateToProps = (state: IReducers) => {
    return {
        deviceType: state.deviceTypeReducer.deviceType
    }
}

export const WordGameText = connect(mapStateToProps)(_WordGameText)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 15,
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }
    },
    text: {
        fontSize: 16,
    }

})