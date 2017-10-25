import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";

import { ScoreCounter } from "./ScoreCounter";

export const ScoreContainer = (props: any) => {
    return (
        <View style={styles.container}>
            <ScoreCounter />
            <ScoreCounter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        marginTop: 70,
        backgroundColor: "orangered",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20
    }
});
