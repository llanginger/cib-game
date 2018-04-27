//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { GameFiveImageContainer } from "./GameFiveImageContainer";
import { EmojiContainer } from "./EmojiContainer";
import { RobotGameWord } from "../Robot/RobotGameWord";
import { DragHere } from "./DragHere";
import { IRobotEmotion } from "../Robot/robotImages";

//Interfaces
interface IGameFiveContainerProps {
    dispatch?: any;
    navigator: any;
    currentEmotion: IRobotEmotion;
}

interface IGameFiveContainerState {}

const initState: IGameFiveContainerState = {};
export class _GameFiveContainer extends React.Component<
    IGameFiveContainerProps,
    any
> {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <GameFiveImageContainer />
                <DragHere />
                <EmojiContainer />
            </View>
        );
    }
}

const mapStateToProps = (store: IReducers) => {
    return {};
};

export const GameFiveContainer: any = connect(mapStateToProps)(
    _GameFiveContainer
);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
