//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { robotFaces, IRobotEmotion, IRobot } from "../Robot/robotImages";
import { emojis } from "./emojis";
import {
    robotGameChooseFace,
    robotGameNewFace
} from "../../redux/actions/index";
import { IEmojiLevel } from "./emojiLevels";
import { connect } from "react-redux";
import { InteractableItem } from "../Interactable/InteractableItem";
import {
    animateEmojiGameImageAction,
    newEmojiAction
} from "../../redux/actions/index";
import { IReducers } from "../../redux/store";
//Interface

interface snapPoint {
    x: number;
    y: number;
    damping?: number;
    tension?: number;
    id?: string;
}
interface IEmojiContainerProps {
    currentEmotion: IRobotEmotion;
    currentEmoji: IEmojiLevel;
    animateEmojiGameImageAction;
    newEmojiAction;
    lastLevel: boolean;
}

interface IEmojiContainerState {
    snapPoints: snapPoint[];
    reset: boolean;
}

// create a component
class _EmojiContainer extends React.Component<
    IEmojiContainerProps,
    IEmojiContainerState
> {
    private interactableFaces: any[];

    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }],
            reset: false
        };
        this._makeEmojis = this._makeEmojis.bind(this);
        this._onDrag = this._onDrag.bind(this);
        this._getCustomCoordinates = this._getCustomCoordinates.bind(this);
    }

    // _generateSnapPoint(e) {

    // }

    // TODO: Do math to figure out the offset needed so that each head can use "head" as a snapPoint

    _onDrag(e) {
        const { fadeIn } = this.props.currentEmoji;
        console.log("Dragging: ", e.nativeEvent);
        console.log("Dragging: ", this.props.currentEmoji);
        if (
            e.nativeEvent.state === "end" &&
            e.nativeEvent.targetSnapPointId !== "init"
        ) {
            this.props.animateEmojiGameImageAction();
            if (!this.props.lastLevel) {
                setTimeout(
                    () =>
                        this.setState({ reset: true }, () => {
                            this.setState({ reset: false }, () => {
                                console.log("Fadein: ", fadeIn);
                                this.props.newEmojiAction(fadeIn ? 1000 : 500);
                            });
                        }),
                    2000
                );
            } else {
                setTimeout(
                    () =>
                        this.setState({ reset: true }, () => {
                            this.setState({ reset: false }, () => {});
                        }),
                    2000
                );
            }
            // setTimeout(() => this.setState({ reset: false }), 501);
        }
    }

    _getCustomCoordinates(i: number, emotion: IRobotEmotion) {
        if (i < 3) {
            if (i === 0) {
                return { x: 214.5, y: -112.5, id: `Snap point ${i}` };
            } else if (i === 1) {
                return { x: 89, y: -112.5, id: `Snap point ${i}` };
            } else {
                return { x: -35.5, y: -112.5, id: `Snap point ${i}` };
            }
        } else {
            if (i === 3) {
                return { x: 214.5, y: -218.5, id: `Snap point ${i}` };
            } else if (i === 4) {
                return { x: 89, y: -218.5, id: `Snap point ${i}` };
            } else {
                return { x: -35.5, y: -218.5, id: `Snap point ${i}` };
            }
        }
    }

    _makeEmojis() {
        return emojis.map((emoji, i) => {
            return (
                <InteractableItem
                    key={i}
                    // onSnap={this.props.animateEmoji}
                    onSnap={() => console.log("Snap")}
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, emoji.emotion)
                    ]}
                    reset={this.state.reset}
                    onReset={() => console.log("On reset")}
                    onDrag={this._onDrag}
                    onPress={() => console.log("Nothing here")}
                    image={emoji.image}
                    imageStyle={{ height: 85 }}
                />
            );
        });
    }

    render() {
        return <View style={styles.container}>{this._makeEmojis()}</View>;
    }
}

const mapDispatchToProps = {
    animateEmojiGameImageAction,
    newEmojiAction
};

const mapStateToProps = (store: IReducers) => {
    return {
        lastLevel:
            store.emojiGameReducer.currentLevel >
            store.emojiGameReducer.emojiLevels.length - 2,
        currentEmoji:
            store.emojiGameReducer.emojiLevels[
                store.emojiGameReducer.currentLevel
            ]
    };
};

export const EmojiContainer: any = connect(mapStateToProps, mapDispatchToProps)(
    _EmojiContainer
);
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingVertical: 20,
        paddingBottom: 75,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
