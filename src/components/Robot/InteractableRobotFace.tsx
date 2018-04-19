//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { robotFaces, IRobot } from "./robotImages";
import { robotGameChooseFace } from "../../redux/actions/index";
import { connect } from "react-redux";
import Interactable from "react-native-interactable";
import { IRobotEmotion } from "./robotImages";

//Interfaces
interface IInteractableRobotFaceProps {
    key: number;
    snapPoints: any[];
    reset: boolean;
    onDrag: any;
    onPress: any;
    emotion: IRobotEmotion;
    image: number;
}

interface IInteractableRobotFaceState {
    snapPoints: any[];
    reset: boolean;
}

// create a component

export class InteractableRobotFace extends React.Component<
    IInteractableRobotFaceProps,
    IInteractableRobotFaceState
> {
    private faceRef;

    constructor(props) {
        super(props);

        this.state = { snapPoints: [{ x: 0, y: 0, id: "init" }], reset: false };

        this._resetFace = this._resetFace.bind(this);
    }

    componentDidMount() {
        this.setState({ snapPoints: this.props.snapPoints });
    }

    componentWillReceiveProps(nextProps: IInteractableRobotFaceProps) {
        if (nextProps.reset && !this.state.reset) {
            this.setState({ reset: true }, () => this._resetFace());
        }
    }

    _resetFace() {
        this.faceRef.snapTo(this.state.snapPoints[0]);
        this.setState({ reset: false });
    }

    render() {
        const { onDrag, snapPoints, emotion, image, onPress } = this.props;
        return (
            <Interactable.View
                ref={el => (this.faceRef = el)}
                style={styles.faceContainer}
                snapPoints={snapPoints}
                onDrag={onDrag}
            >
                <TouchableOpacity onPress={this._resetFace}>
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
