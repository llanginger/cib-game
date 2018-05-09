//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { IReducers } from "../../redux/store";
import { connect } from "react-redux";

//Interface
interface IStarScoreCounterProps {
    image: any;
    score: number;
}

const Score = (props: { score: string }) => {
    return <Text style={styles.score}>{props.score}</Text>;
};

const lolLeftPad = (number, targetLength: number) => {
    let output: string = (number += "");
    while (output.length < targetLength) {
        output = "0" + output;
    }
    return output;
};

// create a component
const _StarScoreCounter: React.StatelessComponent<IStarScoreCounterProps> = (
    props: IStarScoreCounterProps
) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Score score={`${lolLeftPad(props.score, 4)}`} />
            </View>
            <Image
                style={styles.image}
                source={props.image}
                resizeMode="contain"
            />
        </View>
    );
};

const mapStateToProps = (state: IReducers) => {
    return {
        score: state.scoreReducer.score
    };
};

export const StarScoreCounter = connect(mapStateToProps)(_StarScoreCounter);
// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10
    },
    textContainer: {},
    score: {
        // textAlignVertical: "center",
        fontFamily: "Rockwell",
        fontWeight: "100",
        color: "#54546a",
        fontSize: 30,
        lineHeight: 42,
        textAlign: "justify",
        height: 30
    },
    image: {
        height: 27,
        width: 29
    }
});
