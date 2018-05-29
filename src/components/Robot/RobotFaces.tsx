//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import { robotFaces, IRobotEmotion, IRobot } from "./robotImages";
import {
    robotGameChooseFace,
    robotGameNewFace,
    robotGameStartAnimation
} from "../../redux/actions/index";
import { IRobotAnswerType } from "./robotImages_new";
import { connect } from "react-redux";
import Interactable from "react-native-interactable";
import { InteractableItem } from "../Interactable/InteractableItem";
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
    robotGameNewFace: (oldValue: IRobotEmotion) => any;
    currentEmotion: IRobotEmotion;
    robotGameStartAnimation: (answerType: boolean) => void;
}

interface IRobotFacesState {
    snapPoints: snapPoint[];
    reset: boolean;
}

const windowDimensions = Dimensions.get("window");
const windowHeight = windowDimensions.height;
const windowWidth = windowDimensions.width;
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
        if (e.nativeEvent.state === "end") {
            if (e.nativeEvent.targetSnapPointId !== "init") {
                setTimeout(
                    () =>
                        this.setState({ reset: true }, () => {
                            this.setState({ reset: false }, () =>
                                this.props.robotGameStartAnimation(true)
                            );
                        }),
                    1500
                );
            } else {
                setTimeout(
                    () =>
                        this.setState({ reset: true }, () => {
                            this.setState({ reset: false }, () =>
                                this.props.robotGameStartAnimation(false)
                            );
                        }),
                    1500
                );
            }
            setTimeout(
                () => this.props.robotGameNewFace(this.props.currentEmotion),
                4000
            );
        }
    }

    _getCustomCoordinates(i: number, emotion: IRobotEmotion) {
        if (emotion !== this.props.currentEmotion) {
            return {};
        }
        if (i < 3) {
            if (i === 0) {
                return {
                    x: windowWidth / 2.9,
                    y: -(windowHeight / 1.76),
                    id: `Snap point ${i}`
                };
            } else if (i === 1) {
                return {
                    x: 0,
                    y: -(windowHeight / 1.76),
                    id: `Snap point ${i}`
                };
            } else {
                return {
                    x: -(windowWidth / 2.9),
                    y: -(windowHeight / 1.76),
                    id: `Snap point ${i}`
                };
            }
        } else {
            if (i === 3) {
                return {
                    x: windowWidth / 2.9,
                    y: -(windowHeight / 1.5),
                    id: `Snap point ${i}`
                };
            } else if (i === 4) {
                return {
                    x: 0,
                    y: -(windowHeight / 1.5),
                    id: `Snap point ${i}`
                };
            } else {
                return {
                    x: -(windowWidth / 2.9),
                    y: -(windowHeight / 1.5),
                    id: `Snap point ${i}`
                };
            }
        }
    }

    _makeFaceButtons() {
        return robotFaces.map((face, i) => {
            return (
                <InteractableItem
                    key={i}
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, face.emotion)
                    ]}
                    animate={face.emotion === this.props.currentEmotion}
                    onSnap={() => console.log("Snapped")}
                    reset={this.state.reset}
                    onDrag={this._onDrag}
                    onPress={() => console.log("Pressed a face")}
                    image={face.source}
                />
            );
        });
    }

    render() {
        console.log("Window: ", windowDimensions);
        return <View style={styles.container}>{this._makeFaceButtons()}</View>;
    }
}

const mapDispatchToProps = {
    chooseFace: robotGameChooseFace,
    robotGameNewFace,
    robotGameStartAnimation
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
