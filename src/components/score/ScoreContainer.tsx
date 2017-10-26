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
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { IScoreReducer } from "../../redux/reducers/index";

import { ScoreCounter } from "./ScoreCounter";

interface IScoreContainerProps {
    score?: IScoreReducer;
    dispatch?: any;
}

export const _ScoreContainer = (props: IScoreContainerProps) => {
    const hotImage = require("../../images/hot.png");
    const coolImage = require("../../images/cool.png");

    console.log("Score Container props: ", props);
    return (
        <View style={styles.container}>
            <ScoreCounter imagePath={hotImage} score={props.score.hotScore} />
            <ScoreCounter imagePath={coolImage} score={props.score.coolScore} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        marginTop: 10,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 20
    }
});

const mapStateToProps = (state: IReducers) => {
    return {
        score: state.scoreReducer
    };
};

const mapDispatchToProps = {};

export const ScoreContainer = connect(mapStateToProps)(_ScoreContainer);
