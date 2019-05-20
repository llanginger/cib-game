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
import { screenObjects } from "../../navigation/screenObjects";

//Interfaces
interface IRobotGameContainerProps {
    dispatch?: any;
    navigator: any;
    currentEmotion: IRobotEmotion;
    triggerEndGame: boolean;
}

interface IRobotGameContainerState {
    triggeredEndGame: boolean;
}

const initState: IRobotGameContainerState = {
    triggeredEndGame: false
};
export class _GameFourContainer extends React.Component<
    IRobotGameContainerProps,
    any
    > {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
        this._endGame = this._endGame.bind(this);
    }

    componentWillReceiveProps(nextProps: IRobotGameContainerProps) {
        if (nextProps.triggerEndGame && !this.state.triggeredEndGame) {
            console.log("--==END ROBOT GAME==--");
            this.setState({ triggeredEndGame: true }, this._endGame);
        }
    }

    _endGame() {
        setTimeout(() => {
            this.props.navigator.showModal({
                screen: screenObjects.SCORE_SCREEN.screen
            });
        }, 3000);
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
        currentEmotion: store.robotGameReducer.currentEmotion,
        // triggerEndGame: store.robotGameReducer.level > 2 ? true : false
        triggerEndGame: false
    };
};

export const GameContainerRobotGame: any = connect(mapStateToProps)(
    _GameFourContainer
);

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
