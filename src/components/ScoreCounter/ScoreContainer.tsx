import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ViewStyle,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { IScoreReducer } from "../../redux/reducers/index";

import { ScoreCounters } from "./ScoreCounter";

import { MenuButton } from "../MenuButton/MenuButton";
import { RobotScoreCounter } from "./RobotScoreCounter";
import { StarScoreCounter } from "./StarScoreCounter";

interface IScoreContainerProps {
    hideScore?: boolean;
    children?: any;
    score?: IScoreReducer;
    dispatch?: any;
    containerProps?: ViewStyle;
    menuPress?: any;
}

export const _ScoreContainer = (props: IScoreContainerProps) => {
    const robot = require("../../images/laia/robot.png");
    const { containerProps = {} } = props;

    return (
        <View style={[styles.container, props.containerProps]}>
            <StatusBar hidden />
            <MenuButton onPress={props.menuPress} />
            {props.hideScore ? null : <StarScoreCounter />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        height: 40,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    scoreContainer: {
        flexDirection: "row"
    }
});

const mapStateToProps = (state: IReducers) => {
    return {
        score: state.scoreReducer
    };
};

interface IScoreContainerReduxProps {
    menuPress?: any;
    score: any;
}

interface IScoreContainerParentProps {
    containerProps?: {};
    hideScore?: boolean;
    menuPress: any;
}

const mapDispatchToProps = {};

export const ScoreContainer = connect<
    IScoreContainerReduxProps,
    any,
    IScoreContainerParentProps
>(mapStateToProps)(_ScoreContainer);
