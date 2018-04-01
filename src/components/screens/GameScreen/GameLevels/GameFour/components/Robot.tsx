//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { robots, robotFaces, IRobotFace, IRobot } from "./robotImages";
import { IReducers } from "../../../../../../redux/store";
import { IRobotEmotion } from "../../../../../../redux/reducers/index";
import { getRobot, getRobotFace } from "./logic/index";
import { connect } from "react-redux";
import { RobotFace } from "./RobotFace";
//Interface

interface IRobotProps {
    currentEmotion: IRobotEmotion;
    intensity: 0 | 1 | 2;
}

const _Robot: React.StatelessComponent<IRobotProps> = (props: IRobotProps) => {
    const { currentEmotion, intensity } = props;

    return (
        <View style={styles.imageContainer}>
            <Text style={styles.levelTitle}> WORD HERE</Text>
            <Image
                style={styles.image}
                source={getRobot(currentEmotion, intensity)}
                resizeMode="contain"
            />
            <RobotFace image={getRobotFace(currentEmotion)} />
        </View>
    );
};

const mapStateToProps = (state: IReducers) => {
    return {
        currentEmotion: state.robotGameReducer.currentEmotion,
        intensity: state.robotGameReducer.intensity
    };
};

export const Robot = connect(mapStateToProps)(_Robot);

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        height: 400,
        width: "100%",
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
        height: "100%",
        width: "100%"
    }
});
