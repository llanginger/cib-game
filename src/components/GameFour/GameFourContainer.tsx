//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { Robot } from "../Robot/Robot";
import { RobotFaces } from "../Robot/RobotFaces";
import { SampleAnimation } from "./SampleAnimation";
import { RobotGameWord } from "../Robot/RobotGameWord";
import { IRobotEmotion } from "../Robot/robotImages";

//Interfaces
interface IRobotGameContainerProps {
    dispatch?: any;
    navigator: any;
    currentEmotion: IRobotEmotion;
}

interface IRobotGameContainerState {}

const initState: IRobotGameContainerState = {};
export class _GameFourContainer extends React.Component<
    IRobotGameContainerProps,
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
                {/* <SampleAnimation /> */}
                <RobotGameWord
                    word={this.props.currentEmotion}
                    correct={true}
                />
                <Robot />
                <RobotFaces currentEmotion={this.props.currentEmotion} />
            </View>
        );
    }
}

const mapStateToProps = (store: IReducers) => {
    return {
        currentEmotion: store.robotGameReducer.currentEmotion
    };
};

export const GameFourContainer = connect(mapStateToProps)(_GameFourContainer);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    levelTitle: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "papayawhip",
        borderRadius: 5,
        overflow: "hidden"
    }
});
