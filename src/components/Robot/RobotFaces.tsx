//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { robotFaces, IRobotEmotion, IRobot } from "./robotImages";
import {
    robotGameChooseFace,
    robotGameNewFace
} from "../../redux/actions/index";
import { connect } from "react-redux";
import Interactable from "react-native-interactable";
import { InteractableRobotFace } from "./InteractableRobotFace";
//Interface

interface snapPoint {
    x: number;
    y: number;
    damping?: number;
    tension?: number;
    id?: string;
}
interface IRobotFacesProps {
    chooseFace: any;
    newFace: (oldValue: IRobotEmotion) => any;
    currentEmotion: IRobotEmotion;
}

interface IRobotFacesState {
    snapPoints: snapPoint[];
    reset: boolean;
}

// create a component
class _RobotFaces extends React.Component<IRobotFacesProps, IRobotFacesState> {
    private interactableFaces: any[];

    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }],
            reset: false
        };
        this._makeFaceButtons = this._makeFaceButtons.bind(this);
        this._onDrag = this._onDrag.bind(this);
        this._getCustomCoordinates = this._getCustomCoordinates.bind(this);
    }

    // _generateSnapPoint(e) {

    // }

    // TODO: Do math to figure out the offset needed so that each head can use "head" as a snapPoint

    _onDrag(e) {
        console.log("Dragging: ", e.nativeEvent);
        if (
            e.nativeEvent.state === "end" &&
            e.nativeEvent.targetSnapPointId !== "init"
        ) {
            setTimeout(
                () =>
                    this.setState({ reset: true }, () => {
                        this.setState({ reset: false }, () =>
                            this.props.newFace(this.props.currentEmotion)
                        );
                    }),
                1500
            );
            // setTimeout(() => this.setState({ reset: false }), 501);
        }
    }

    _getCustomCoordinates(i: number, emotion: IRobotEmotion) {
        if (emotion !== this.props.currentEmotion) {
            return {};
        }

        if (i < 3) {
            if (i === 0) {
                return { x: 136.5, y: -400.5, id: `Snap point ${i}` };
            } else if (i === 1) {
                return { x: 10, y: -400.5, id: `Snap point ${i}` };
            } else {
                return { x: -121.5, y: -400.5, id: `Snap point ${i}` };
            }
        } else {
            if (i === 3) {
                return { x: 136.5, y: -472.5, id: `Snap point ${i}` };
            } else if (i === 4) {
                return { x: 10, y: -472.5, id: `Snap point ${i}` };
            } else {
                return { x: -121.5, y: -472.5, id: `Snap point ${i}` };
            }
        }
    }

    _makeFaceButtons() {
        return robotFaces.map((face, i) => {
            return (
                <InteractableRobotFace
                    key={i}
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, face.emotion)
                    ]}
                    reset={this.state.reset}
                    onDrag={this._onDrag}
                    onPress={() => console.log("Pressed a face")}
                    emotion={face.emotion}
                    image={face.source}
                />
            );
        });
    }

    render() {
        return <View style={styles.container}>{this._makeFaceButtons()}</View>;
    }
}

const mapDispatchToProps = {
    chooseFace: robotGameChooseFace,
    newFace: robotGameNewFace
};

const mapStateToProps = () => {
    return {};
};

export const RobotFaces: any = connect(mapStateToProps, mapDispatchToProps)(
    _RobotFaces
);
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
