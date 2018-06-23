//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InteractableItem, ISnapPoint } from "../Interactable/InteractableItem";
import { IFruitTabName } from "./FruitActivity";

//Interfaces
interface IFruitContentsProps {
    contents: number[];
    tabType: IFruitTabName;
}

interface IFruitContentsState {
    snapPoints: ISnapPoint[];
    reset: boolean;
}

// create a component

export class TabContents extends React.Component<
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

    _getCustomCoordinates = (i: number, type: IFruitTabName) => {
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
        return this.props.contents.map((mouth, i) => {
            return (
                <InteractableItem
                    snapPoints={[
                        ...this.state.snapPoints,
                        this._getCustomCoordinates(i, this.props.tabType)
                    ]}
                    key={i}
                    onSnap={() => console.log("Mouth onSnap")}
                    onReset={() => console.log("Mouth onReset")}
                    onDrag={this._onDrag}
                    onPress={() => console.log("Mouth onPress")}
                    image={mouth}
                    imageStyle={
                        this.props.contents.length > 3
                            ? { height: 60, width: 60 }
                            : { height: 100, width: 100 }
                    }
                    reset={false}
                />
            );
        });
    };

    render() {
        return (
            <View
                style={[
                    styles.container,
                    { paddingTop: this.props.contents.length > 3 ? 30 : 0 }
                ]}
            >
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
