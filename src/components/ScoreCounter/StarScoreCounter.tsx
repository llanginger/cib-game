//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { IReducers } from "../../redux/store";
import { connect } from "react-redux";
import { lolLeftPad } from "../lolLeftPad";

//Interface
interface IStarScoreCounterProps {
    score: number;
}

const Score = (props: { score: string }) => {
    return <Text style={styles.score}>{props.score}</Text>;
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
                source={require("../../images/laia/icons/score-star.png")}
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
