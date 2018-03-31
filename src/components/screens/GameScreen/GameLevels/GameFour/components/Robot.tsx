//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { robots, robotFaces, IRobotFace, IRobot } from "./robotImages";
import { IReducers } from "../../../../../../redux/store";
import { IRobotEmotion } from "../../../../../../redux/reducers/index";
import { connect } from "react-redux";
//Interface

const RobotFace = ({ image }) => {
    console.log("Robot face image: ", image);
    if (image) {
        return (
            <View style={styles.faceContainer}>
                <Image
                    source={image}
                    style={styles.robotFace}
                    resizeMode="contain"
                />
            </View>
        );
    }
    return null;
};

interface IRobotProps {
    currentEmotion: IRobotEmotion;
    intensity: 0 | 1 | 2;
}

const _Robot: React.StatelessComponent<IRobotProps> = (props: IRobotProps) => {
    const { currentEmotion, intensity } = props;

    const getFaceImage: () => IRobotFace = () => {
        return robotFaces.filter(face => {
            return face.emotion === props.currentEmotion;
        })[0];
    };

    const getRobot = () => {
        switch (currentEmotion) {
            case "happy":
                return robots.yellow[intensity];
            case "rage":
                return robots.red[intensity];
            case "disgust":
                return robots.green[intensity];
            case "sad":
                return robots.blue[intensity];
            case "calm":
                return robots.pink[intensity];
            case "fear":
                return robots.purple[intensity];
            default:
                return robots.grey[0];
        }
    };

    const getRobotIntensity = () => {
        switch (props.intensity) {
            case 0:
                return robots.blue[0];
            case 1:
                return robots.green[1];
            case 2:
                return robots.purple[1];
            default:
                return robots.red[2];
        }
    };

    return (
        <View style={styles.imageContainer}>
            <Text style={styles.levelTitle}> WORD HERE</Text>
            <Image
                style={styles.image}
                source={getRobot()}
                resizeMode="contain"
            />
            <RobotFace image={getFaceImage().source} />
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
    },
    robotFace: {
        height: 50,
        width: 100
    },
    faceContainer: {
        position: "absolute",
        left: 15,
        right: 0,
        top: 70,
        justifyContent: "center",
        alignItems: "center"
    }
});
