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

const ScoreCounter = (props: IScoreCounterProps) => {
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

interface IScoreCountersProps {
    hotImage: any;
    coolImage: any;
    score: { hotScore: number; coolScore: number }
}

export const ScoreCounters = (props: IScoreCountersProps) => {
    return (
        <View style={[styles.scoreContainer, { zIndex: 1 }]}>
            <ScoreCounter imagePath={props.hotImage} score={props.score.hotScore} />
            <ScoreCounter imagePath={props.coolImage} score={props.score.coolScore} />
        </View>
    )
}

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
    },
    scoreContainer: {
        flexDirection: "row"
    }
});
