//import liraries
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
//Interface

export const RobotFace = ({ image }) => {
    console.log("components face image: ", image);
    if (image) {
        return (
            <View style={styles.faceContainer}>
                <Image
                    source={image}
                    style={styles.robotFace}
                    resizeMode="contain"
                />
            </View>
        );
    }
    return null;
};

const styles = StyleSheet.create({
    robotFace: {
        height: 50,
        width: 100
    },
    faceContainer: {
        position: "absolute",
        left: 15,
        right: 0,
        top: 70,
        justifyContent: "center",
        alignItems: "center"
    }
});
