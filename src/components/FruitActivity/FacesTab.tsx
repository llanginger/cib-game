//import liraries
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { InteractableItem, ISnapPoint } from "../Interactable/InteractableItem";
import { IFruitTabName } from "./FruitActivity";
import { IFruitTab } from "./FruitTab";
import { IFruitType } from "./IFruitType"

//Interfaces
interface IFruitContentsProps {
    onChooseFruit: any;
}

interface IFruitContentsState {
    snapPoints: ISnapPoint[];
    reset: boolean;
    faces: { source: number; fruit: IFruitType }[];
}

// create a component

export class FacesTab extends React.Component<
    IFruitContentsProps,
    IFruitContentsState
    > {
    constructor(props) {
        super(props);

        this.state = {
            snapPoints: [{ x: 0, y: 0, id: "init" }],
            reset: false,
            faces: [
                {
                    source: require("../../images/laia/fruit-activity/faces/face-1.png"),
                    fruit: "pear"
                },
                {
                    source: require("../../images/laia/fruit-activity/faces/face-2.png"),
                    fruit: "banana"
                },
                {
                    source: require("../../images/laia/fruit-activity/faces/face-3.png"),
                    fruit: "apple"
                }
            ]
        };
    }

    _makeDraggableItems = () => {
        console.log("Tab Contents from Parent: ", this.props);
        return this.state.faces.map((face, i) => {
            return (
                <TouchableOpacity
                    key={i}
                    onPress={() => this.props.onChooseFruit(face.fruit)}
                >
                    <Image
                        style={styles.image}
                        source={face.source}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            );
        });
    };

    render() {
        return (
            <View style={[styles.container]}>{this._makeDraggableItems()}</View>
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
    },
    image: {
        alignSelf: "center",
        height: 100,
        width: 100
    }
});
