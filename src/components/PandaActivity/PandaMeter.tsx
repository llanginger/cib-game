//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

//Interface
interface IPandaMeterProps {
    intensity: 0 | 1 | 2 | 3;
}

const meters: number[] = [
    require("../../images/laia/panda/intensity-meter/intensity-0.png"),
    require("../../images/laia/panda/intensity-meter/intensity-1.png"),
    require("../../images/laia/panda/intensity-meter/intensity-2.png"),
    require("../../images/laia/panda/intensity-meter/intensity-3.png")
];

// create a component
export const PandaMeter: React.StatelessComponent<IPandaMeterProps> = (
    props: IPandaMeterProps
) => {
    const getMeter: () => number = () => {
        return meters[props.intensity];
    };
    return (
        <Animatable.View
            style={styles.container}
            animation="fadeInLeft"
            delay={300}
            duration={300}
        >
            <Animatable.Image
                style={styles.image}
                resizeMode="contain"
                source={getMeter()}
            />
        </Animatable.View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 10,
        bottom: Dimensions.get("window").height / 2 - 50
    },
    image: {
        transform: [{ scale: 0.7 }]
    }
});
