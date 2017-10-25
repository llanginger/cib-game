import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";

interface IScoreCounterProps {
    imagePath: any;
    score: number;
}

export const ScoreCounter = (props: IScoreCounterProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={props.imagePath}
                resizeMode="contain"
            />
            <Text>{props.score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        marginRight: 5,
        width: 50,
        height: 50
    }
});
