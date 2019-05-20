//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { robots, robotFaces, IRobotFace, IRobot } from "./robotImages";
import { IReducers } from "../../redux/store";
import { IRobotEmotion } from "./robotImages";
import { getRobot, getRobotFace } from "./logic/index";
import { connect } from "react-redux";
import { RobotFace } from "./RobotFace";
import { IRobotAnswerType } from "./robotImages_new";
import { ImageFlipper } from "../ImageFlipper/ImageFlipper";
//Interface

interface IRobotProps {
    currentEmotion: IRobotEmotion;
    clickedEmotion: IRobotEmotion
    intensity: 0 | 1 | 2;
    robotAnswerType: IRobotAnswerType;
    startAnimation: boolean;
}

// TODO: modify getRobot so that it has separate "correct" | "incorrect" | "neutral" versions of robot.

// TODO In the morning: Make individual versions of each robot frame with the right emotion colors
const _Robot: React.StatelessComponent<IRobotProps> = (props: IRobotProps) => {
    const {
        currentEmotion,
        clickedEmotion,
        intensity,
        robotAnswerType,
        startAnimation
    } = props;

    return (
        <View style={styles.imageContainer}>
            {/* <Text style={styles.levelTitle}> WORD HERE</Text> */}
            <ImageFlipper
                imageStyle={styles.image}
                source={getRobot(clickedEmotion, currentEmotion, robotAnswerType)}
                startAnimation={startAnimation}
                loop={false}
            />
        </View>
    );
};

const mapStateToProps = (state: IReducers) => {
    return {
        currentEmotion: state.robotGameReducer.currentEmotion,
        clickedEmotion: state.robotGameReducer.clickedEmotion,
        robotAnswerType: state.robotGameReducer.robotAnswerType,
        startAnimation: state.robotGameReducer.startAnimation,
        intensity: state.robotGameReducer.intensity
    };
};

export const Robot = connect(mapStateToProps)(_Robot);

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        // height: 420,
        flex: 3,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 20
    },
    levelTitle: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "papayawhip",
        borderRadius: 5,
        overflow: "hidden"
    },
    image: {
        height: "90%",
        width: "90%"
    }
});
