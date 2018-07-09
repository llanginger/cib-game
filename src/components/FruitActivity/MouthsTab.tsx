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
}

interface IMouthObject {
    source: number;
    reset: boolean;
}
interface IFruitContentsState {
    fadeAnimation: Animated.Value;
    snapPoints: ISnapPoint[];
    currentMouth: number;
    mouths: IMouthObject[];
}

const mouths = {
    source: require("../../images/laia/fruit-activity/tabs/mouths-tab.png"),
    name: "mouths",
    contentSource: [
        {
            source: require("../../images/laia/fruit-activity/mouths/mouths-1.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/mouths/mouths-2.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/mouths/mouths-3.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/mouths/mouths-4.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/mouths/mouths-5.png"),
            reset: false
        },
        {
            source: require("../../images/laia/fruit-activity/mouths/mouths-6.png"),
            reset: false
        }
    ]
};

// create a component

export class MouthsTab extends React.Component<
    IFruitContentsProps,
    IFruitContentsState
    > {
    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }],
            currentMouth: null,
            mouths: mouths.contentSource,
            fadeAnimation: new Animated.Value(0)
        };
    }

    componentWillReceiveProps(nextProps: IFruitContentsProps) {
        if (nextProps.fruit !== this.props.fruit) {
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
            this.setState({ mouths: this._resetAll() }, () => {
                fadeAnimation.setValue(0.5);
                Animated.timing(fadeAnimation, {
                    toValue: 1,
                    delay: 200,
                    duration: 500
                }).start();
            });
        });
    };

    _resetOthers: (draggedMouth: IMouthObject) => IMouthObject[] = (
        draggedMouth: IMouthObject
    ) => {
        return this.state.mouths.map(mouth => {
            return { ...mouth, reset: mouth.source !== draggedMouth.source };
        });
    };

    _resetAll: () => IMouthObject[] = () => {
        return this.state.mouths.map(mouth => {
            return { ...mouth, reset: true };
        });
    };

    _clearAllResets: () => IMouthObject[] = () => {
        return this.state.mouths.map(mouth => {
            return { ...mouth, reset: false };
        });
    };

    _onDrag = (e, mouth: IMouthObject) => {
        this.setState(
            {
                mouths: this._resetOthers(mouth)
            },
            () => this.setState({ mouths: this._clearAllResets() })
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
            switch (type) {
                case "eyes":
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
        return this.state.mouths.map((mouth, i) => {
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
                            this._getCustomCoordinates(i, "mouths")
                        ]}
                        key={i}
                        onDrag={e => this._onDrag(e, mouth)}
                        image={mouth.source}
                        imageStyle={{ height: 60, width: 60 }}
                        reset={mouth.reset}
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
