//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IReducers } from "../../../../../redux/store"
import { connect } from "react-redux"

//Interface
interface IRobotScoreCounterProps {
    image: any
    score: number
}

const ScoreTitle = (props) => {
    return <Text style={styles.scoreTitle}>SCORE</Text>
}

const Score = (props: { score: string }) => {
    return <Text style={styles.score}>{props.score}</Text>
}

const lolLeftPad = (number, targetLength: number) => {
    let output: string = number += ""
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output
}

// create a component
const _RobotScoreCounter: React.StatelessComponent<IRobotScoreCounterProps> = (props: IRobotScoreCounterProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} resizeMode="contain" />
            <View style={styles.textContainer}>
                <ScoreTitle />
                <Score score={`${lolLeftPad(props.score, 4)}`} />
            </View>
        </View>
    );
};

const mapStateToProps = (state: IReducers) => {
    return {
        score: state.laiaScoreReducer.score
    }
}

export const RobotScoreCounter = connect(mapStateToProps)(_RobotScoreCounter)
// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    scoreTitle: {
        fontFamily: "Rockwell",
        color: "#7cd7cf",
        fontWeight: "100",
        fontSize: 20,
        height: 30,
        lineHeight: 35,
        textAlignVertical: "center",
        textAlign: "justify",
        // marginBottom: -8,

    },
    score: {
        textAlignVertical: "center",
        fontFamily: "Rockwell",
        fontSize: 31,
        lineHeight: 40,

        textAlign: "justify",
        paddingBottom: -40,
        height: 35
    },
    image: {
        height: 55
    }
});
