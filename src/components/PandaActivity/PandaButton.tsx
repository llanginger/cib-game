import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

interface IPandaButtonProps {
    text: string;
    onPress: any;
    buttonState: "blue" | "empty" | "grey";
}

export const PandaButton = (props: IPandaButtonProps) => {
    const chooseImage = () => {
        switch (props.buttonState) {
            case "blue":
                return require("../../images/laia/panda/pandaButtons/bubble-blue.png");
            case "empty":
                return require("../../images/laia/panda/pandaButtons/bubble-empty.png");
            case "grey":
                return require("../../images/laia/panda/pandaButtons/bubble-grey.png");
        }
    };
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
            disabled={props.buttonState !== "blue"}
        >
            <Image
                source={chooseImage()}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 60
    },
    textContainer: {
        position: "absolute"
    },
    text: {}
});
