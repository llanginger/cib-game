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
    const hotImage = require("../../images/hot.png");
    const coolImage = require("../../images/cool.png");
    return (
        <View style={styles.container}>
            <ScoreCounter imagePath={hotImage} />
            <ScoreCounter imagePath={coolImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        marginTop: 70,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20
    }
});
