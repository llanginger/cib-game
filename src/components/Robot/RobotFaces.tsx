//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
    Easing,
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
    robotGameStartAnimation: ({ answerType: boolean, clickedEmotion: IRobotEmotion }) => void;
}

interface IRobotFacesState {
    snapPoints: snapPoint[];
    reset: boolean;
    pressedButton: IRobotEmotion | null
    buttonOpacity: Animated.Value
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
            reset: false,
            pressedButton: null,
            buttonOpacity: new Animated.Value(0)
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
                                this.props.robotGameStartAnimation({ answerType: true, clickedEmotion: this.props.currentEmotion })
                            );
                        }),
                    1500
                );
            } else {
                setTimeout(
                    () =>
                        this.setState({ reset: true }, () => {
                            this.setState({ reset: false }, () =>
                                this.props.robotGameStartAnimation({ answerType: false, clickedEmotion: this.props.currentEmotion })
                            );
                        }),
                    1500
                );
            }
            this._nextGame()
        }
    }

    _onPress = (emotion: IRobotEmotion) => {
        console.log("TCL: _onPress -> emotion", emotion)

        console.log("TCL: _onPress -> currentEmotion", this.props.currentEmotion)
        this.setState({ pressedButton: emotion }, () => this._fadeOut())
        if (emotion === this.props.currentEmotion) {
            this.setState({ reset: true }, () => {
                this.setState({ reset: false }, () =>
                    this.props.robotGameStartAnimation({ answerType: true, clickedEmotion: emotion })
                );
            })
        } else {
            this.setState({ reset: true }, () => {
                this.setState({ reset: false }, () =>
                    this.props.robotGameStartAnimation({ answerType: false, clickedEmotion: emotion })
                );
            })
        }
        this._nextGame()
    }

    _nextGame = () => {
        setTimeout(
            () => {
                this._fadeIn()
                // this.setState({ pressedButton: null })
                this.props.robotGameNewFace(this.props.currentEmotion)
            },
            4000
        );
    }

    _fadeOut = () => {
        const { buttonOpacity } = this.state
        buttonOpacity.setValue(0)
        Animated.timing(
            buttonOpacity,
            {
                toValue: 1,
                duration: 100,
                easing: Easing.linear
            }
        ).start()
    }

    _fadeIn = () => {
        const { buttonOpacity } = this.state
        buttonOpacity.setValue(1)
        Animated.timing(
            buttonOpacity,
            {
                toValue: 2,
                duration: 100,
                easing: Easing.linear
            }
        ).start()
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
        const { pressedButton, buttonOpacity } = this.state
        const opacity = buttonOpacity.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, 0, 1]
        })
        return robotFaces.map((face, i) => {
            return (
                <InteractableItem
                    key={i}
                    animatedStyle={{
                        opacity: face.emotion === pressedButton ? opacity : 1
                    }}
                    dragEnabled={false}
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, face.emotion)
                    ]}
                    animate={face.emotion === this.props.currentEmotion}
                    onSnap={() => console.log("Snapped")}
                    reset={this.state.reset}
                    onDrag={this._onDrag}
                    onPress={() => this._onPress(face.emotion)}
                    image={face.source}
                />
            );
        });
    }

    render() {
        // console.log("Window: ", windowDimensions);
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
