//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InteractableItem, ISnapPoint } from "../Interactable/InteractableItem";
import { IFruit } from "./FruitActivity";
import { IFruitTab } from "./FruitTab";

//Interfaces
interface IFruitContentsProps {
    // contents: number[];
    // tabType: IFruit;
}

interface IMouthObject {
    source: number;
    reset: boolean;
}
interface IFruitContentsState {
    snapPoints: ISnapPoint[];
    reset: boolean;
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
            reset: false,
            currentMouth: null,
            mouths: mouths.contentSource
        };
    }

    _reset: (draggedMouth: IMouthObject) => IMouthObject[] = (
        draggedMouth: IMouthObject
    ) => {
        return this.state.mouths.map(mouth => {
            return { ...mouth, reset: mouth.source !== draggedMouth.source };
        });
    };

    _clearReset: () => IMouthObject[] = () => {
        return this.state.mouths.map(mouth => {
            return { ...mouth, reset: false };
        });
    };

    _onDrag = (e, mouth: IMouthObject) => {
        console.log("Dragging: ", e.nativeEvent);
        console.log("Mouth #: ", mouth);
        // if (this.state.currentMouth !== mouth.source) {
        //     this.setState({ reset: true }, () => {
        //         this.setState({ currentMouth: mouth.source, reset: false });
        //     });
        // }
        this.setState(
            {
                mouths: this._reset(mouth)
            },
            () => this.setState({ mouths: this._clearReset() })
        );
        if (
            e.nativeEvent.state === "end" &&
            e.nativeEvent.targetSnapPointId !== "init"
        ) {
            console.log("E: ", e);
        } else {
            return null;
        }
    };

    _getCustomCoordinates = (i: number, type: IFruit) => {
        console.log("tab type: ", type);
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

    _makeDraggableItems = () => {
        console.log("Tab Contents from Parent: ", this.props);
        return this.state.mouths.map((mouth, i) => {
            return (
                <InteractableItem
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, "mouths")
                    ]}
                    key={i}
                    onSnap={() => console.log("Mouth onSnap")}
                    onReset={() => console.log("Mouth onReset")}
                    onDrag={e => this._onDrag(e, mouth)}
                    onPress={() => console.log("Mouth onPress")}
                    image={mouth.source}
                    imageStyle={{ height: 60, width: 60 }}
                    reset={mouth.reset}
                />
            );
        });
    };

    render() {
        return (
            <View style={[styles.container, { paddingTop: 30 }]}>
                {this._makeDraggableItems()}
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
