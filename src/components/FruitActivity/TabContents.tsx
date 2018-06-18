//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InteractableItem } from "../Interactable/InteractableItem";

//Interfaces
interface IFruitContentsProps {
    contents: number[];
}

interface IFruitContentsState {}

const mouths = [
    require("../../images/laia/fruit-activity/mouths/mouths-1.png"),
    require("../../images/laia/fruit-activity/mouths/mouths-2.png"),
    require("../../images/laia/fruit-activity/mouths/mouths-3.png"),
    require("../../images/laia/fruit-activity/mouths/mouths-4.png"),
    require("../../images/laia/fruit-activity/mouths/mouths-5.png"),
    require("../../images/laia/fruit-activity/mouths/mouths-6.png")
];

// create a component

export class TabContents extends React.Component<
    IFruitContentsProps,
    IFruitContentsState
> {
    constructor(props) {
        super(props);
    }

    _makeMouths = () => {
        console.log("Tab Contents from Parent: ", this.props);
        return this.props.contents.map((mouth, i) => {
            return (
                <InteractableItem
                    key={Math.random()}
                    onSnap={() => console.log("Mouth onSnap")}
                    snapPoints={[{ x: 0, y: 0 }]}
                    onReset={() => console.log("Mouth onReset")}
                    onDrag={() => console.log("Moth onDrag")}
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
                {this._makeMouths()}
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
