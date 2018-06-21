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

interface IFruitContentsState {
    snapPoints: ISnapPoint[];
    reset: boolean;
}

const eyes: IFruitTab = {
    source: require("../../images/laia/fruit-activity/tabs/eyes-tab.png"),
    name: "eyes",
    contentSource: [
        require("../../images/laia/fruit-activity/eyes/eyes-1.png"),
        require("../../images/laia/fruit-activity/eyes/eyes-2.png"),
        require("../../images/laia/fruit-activity/eyes/eyes-3.png"),
        require("../../images/laia/fruit-activity/eyes/eyes-4.png"),
        require("../../images/laia/fruit-activity/eyes/eyes-5.png"),
        require("../../images/laia/fruit-activity/eyes/eyes-6.png")
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
            reset: false
        };
    }

    _onDrag = e => {
        console.log("Dragging: ", e.nativeEvent);
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
        return eyes.contentSource.map((eye, i) => {
            return (
                <InteractableItem
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, "eyes")
                    ]}
                    key={i}
                    onSnap={() => console.log("Mouth onSnap")}
                    onReset={() => console.log("Mouth onReset")}
                    onDrag={this._onDrag}
                    onPress={() => console.log("Mouth onPress")}
                    image={eye}
                    imageStyle={{ height: 60, width: 60 }}
                    reset={false}
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
