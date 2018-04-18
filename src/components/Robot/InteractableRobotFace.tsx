//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { robotFaces } from "./robotImages";
import { robotGameChooseFace } from "../../redux/actions/index";
import { connect } from "react-redux";
import Interactable from "react-native-interactable";

//Interfaces
interface IInteractableRobotFaceProps {
    key: number;
    onLayout;
    snapPoints: any[];
    onDrag: any;
    onPress: any;
    emotion: any;
    image: number;
}

interface IInteractableRobotFaceState {}

// create a component

export class InteractableRobotFace extends React.Component<
    IInteractableRobotFaceProps,
    IInteractableRobotFaceState
> {
    private faceRef;

    constructor(props) {
        super(props);
    }

    render() {
        const {
            onDrag,
            onLayout,
            snapPoints,
            emotion,
            image,
            onPress
        } = this.props;
        return (
            <Interactable.View
                ref={el => (this.faceRef = el)}
                style={styles.faceContainer}
                onLayout={onLayout}
                snapPoints={snapPoints}
                onDrag={onDrag}
            >
                <TouchableOpacity
                    onPress={() => {
                        this.faceRef.snapTo(snapPoints[0]);
                    }}
                >
                    <Image
                        style={styles.faceImage}
                        source={image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Interactable.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    faceContainer: {
        flexBasis: "30%",
        padding: 0,
        marginVertical: 10
    },
    faceImage: {
        height: 50,
        alignSelf: "center"
    }
});
