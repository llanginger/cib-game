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
import { IReducers } from "../../../redux/store";
import { IScoreReducer } from "../../../redux/reducers/index";

import { ScoreCounters } from "./ScoreCounter";

import { UserAvatar } from "../UserAvatar";
import { RobotScoreCounter } from "./RobotScoreCounter";

interface IScoreContainerProps {
    children?: any;
    score?: IScoreReducer;
    dispatch?: any;
    containerProps?: {};
    menuPress?: any;
}

export const _ScoreContainer = (props: IScoreContainerProps) => {
    const hotImage = require("../../../images/hot.png");
    const coolImage = require("../../../images/cool.png");
    const robot = require("../../../images/laia/robot.png");
    const { containerProps = {} } = props;

    return (
        <View style={[styles.container, props.containerProps]}>
            <UserAvatar menuPress={props.menuPress} />
            {/* <ScoreCounters
                hotImage={hotImage}
                coolImage={coolImage}
                score={props.score}
            /> */}
            <RobotScoreCounter image={robot} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
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
    menuPress: any;
}

const mapDispatchToProps = {};

export const ScoreContainer = connect<
    IScoreContainerReduxProps,
    any,
    IScoreContainerParentProps
>(mapStateToProps)(_ScoreContainer);
