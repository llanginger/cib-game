//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { InteractableItem, ISnapPoint } from "../Interactable/InteractableItem";
import { IFruitTabName } from "./FruitActivity";
import { IFruitTab } from "./FruitTab";
import { IFruitType } from "./IFruitType"

//Interfaces
interface IFruitContentsProps {
    fruit: IFruitType
    reset?: boolean
}

interface IFruitContentsState {
    fadeAnimation: Animated.Value;
    snapPoints: ISnapPoint[];
    reset: boolean;
    eyes: IMouthObject[];
}

interface IMouthObject {
    source: number;
    reset: boolean;
}

const eyes = {
    source: require("../../images/laia/fruit-activity/tabs/eyes-tab.png"),
    name: "eyes",
    contentSource: [
        {
            source: require("../../images/laia/fruit-activity/eyes/eyes-1.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/eyes/eyes-2.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/eyes/eyes-3.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/eyes/eyes-4.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/eyes/eyes-5.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/eyes/eyes-6.png"),
            reset: false
        }
    ]
};
// create a component

export class EyesTab extends React.Component<
    IFruitContentsProps,
    IFruitContentsState
    > {
    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }],
            reset: false,
            eyes: eyes.contentSource,
            fadeAnimation: new Animated.Value(0)
        };
    }

    componentWillReceiveProps(nextProps: IFruitContentsProps) {
        if (nextProps.fruit !== this.props.fruit || nextProps.reset) {
            this._fade();
        }
    }

    _fade = () => {
        const { fadeAnimation } = this.state;
        fadeAnimation.setValue(0);
        Animated.timing(fadeAnimation, {
            toValue: 0.5,
            duration: 500
        }).start(() => {
            this.setState({ eyes: this._resetAll() }, () => {
                fadeAnimation.setValue(0.5);
                Animated.timing(fadeAnimation, {
                    toValue: 1,
                    delay: 200,
                    duration: 500
                }).start();
            });
        });
    };

    _resetAll: () => IMouthObject[] = () => {
        return this.state.eyes.map(mouth => {
            return { ...mouth, reset: true };
        });
    };

    _resetOthers: (draggedEye: IMouthObject) => IMouthObject[] = (
        draggedMouth: IMouthObject
    ) => {
        return this.state.eyes.map(mouth => {
            return { ...mouth, reset: mouth.source !== draggedMouth.source };
        });
    };

    _clearAllResets: () => IMouthObject[] = () => {
        return this.state.eyes.map(mouth => {
            return { ...mouth, reset: false };
        });
    };

    _onDrag = (e, eye: IMouthObject) => {
        this.setState(
            {
                eyes: this._resetOthers(eye)
            },
            () => this.setState({ eyes: this._clearAllResets() })
        );
    };

    _getCustomCoordinates = (i: number, type: IFruitTabName) => {
        const yModifier: () => number = () => {
            switch (type) {
                case "eyes":
                    return 0;
                case "mouths":
                    return -100;
                default:
                    return 0;
            }
        };

        const xModifier: () => number = () => {
            switch (this.props.fruit) {
                case "banana":
                    return 50;
                default:
                    return 0;
            }
        };

        if (i < 3) {
            if (i === 0) {
                return {
                    x: 135 + xModifier(),
                    y: -310 - yModifier(),
                    id: `Snap point ${i}`
                };
            } else if (i === 1) {
                return {
                    x: 0 + xModifier(),
                    y: -310 - yModifier(),
                    id: `Snap point ${i}`
                };
            } else {
                return {
                    x: -135 + xModifier(),
                    y: -310 - yModifier(),
                    id: `Snap point ${i}`
                };
            }
        } else {
            if (i === 3) {
                return {
                    x: 135 + xModifier(),
                    y: -390 - yModifier(),
                    id: `Snap point ${i}`
                };
            } else if (i === 4) {
                return {
                    x: 0 + xModifier(),
                    y: -390 - yModifier(),
                    id: `Snap point ${i}`
                };
            } else {
                return {
                    x: -135 + xModifier(),
                    y: -390 - yModifier(),
                    id: `Snap point ${i}`
                };
            }
        }
    };

    _makeDraggableItems = opacity => {
        return this.state.eyes.map((eye, i) => {
            return (
                <Animated.View
                    style={{
                        flexBasis: "30%",
                        opacity
                    }}
                    key={i}
                >
                    <InteractableItem
                        snapPoints={[
                            ...this.state.snapPoints,
                            this._getCustomCoordinates(i, "eyes")
                        ]}
                        // key={i}
                        onDrag={e => this._onDrag(e, eye)}
                        image={eye.source}
                        imageStyle={{ height: 60, width: 60 }}
                        reset={eye.reset}
                    />
                </Animated.View>
            );
        });
    };

    render() {
        const animatedOpacity = this.state.fadeAnimation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });
        return (
            <View style={[styles.container, { paddingTop: 30 }]}>
                {this._makeDraggableItems(animatedOpacity)}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "80%",
        marginBottom: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
