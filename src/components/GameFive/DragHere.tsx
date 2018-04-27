//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//Interface
interface IDragHereProps {}

const circleDim: number = 95;
// create a component
export const DragHere: React.StatelessComponent<IDragHereProps> = (
    props: IDragHereProps
) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../../images/laia/emoji-game/drag-circle.png")}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: circleDim,
        height: circleDim,
        bottom: 220,
        right: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: circleDim,
        alignSelf: "center"
    }
});
