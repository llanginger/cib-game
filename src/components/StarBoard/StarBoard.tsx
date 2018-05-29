//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { appStyles } from "../../styles/styles";
import { lolLeftPad } from "../lolLeftPad";

interface IStars {
    noStars: number;
    oneStar: number;
    twoStars: number;
    threeStars: number;
}

const stars: IStars = {
    noStars: require("../../images/laia/0-stars.png"),
    oneStar: require("../../images/laia/1-star.png"),
    twoStars: require("../../images/laia/2-stars.png"),
    threeStars: require("../../images/laia/3-stars.png")
};

//Interface
interface IStarBoardProps {
    score: number;
    onPress: any;
}

// create a component
const _StarBoard: React.StatelessComponent<IStarBoardProps> = (
    props: IStarBoardProps
) => {
    const { score } = props;
    const getImage: () => number = () => {
        if (score === 0) {
            return stars.noStars;
        } else if (score < 20) {
            return stars.oneStar;
        } else if (score < 40) {
            return stars.twoStars;
        } else {
            return stars.threeStars;
        }
    };
    return (
        <View style={styles.starContainer}>
            <Image
                source={require("../../images/laia/score-board/scoreboard-with-star.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.goodJob}>Good job!</Text>
            <Text style={styles.title}>SCORE</Text>
            <Text style={styles.score}>{lolLeftPad(props.score, 4)}</Text>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <View style={styles.buttonContainer}>
                    <Image
                        source={require("../../images/laia/score-board/scoreboard-button-with-arrow.png")}
                        resizeMode="contain"
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = (state: IReducers) => {
    return {
        score: state.scoreReducer.score
    };
};

export const StarBoard = connect(mapStateToProps)(_StarBoard);

// define your styles
const styles = StyleSheet.create({
    starContainer: {
        height: 350,
        width: "100%",
        // justifyContent: "center",
        // alignItems: "center",
        paddingLeft: 6
    },
    image: {
        height: "100%",
        width: "100%"
    },
    title: {
        fontFamily: appStyles.rockwellFont,
        position: "absolute",
        color: "#545569",
        fontSize: 32,
        lineHeight: 36,
        letterSpacing: 5,
        top: 133,
        right: 65
    },
    goodJob: {
        fontFamily: appStyles.rockwellFont,
        position: "absolute",
        color: "#414244",
        fontSize: 40,
        lineHeight: 45,
        letterSpacing: 3,
        top: 66,
        left: 70
    },
    score: {
        fontFamily: appStyles.rockwellFont,
        position: "absolute",
        color: "#545569",
        fontSize: 55,
        lineHeight: 65,
        letterSpacing: 5,
        top: 170,
        right: 60
    },
    button: {
        position: "absolute",
        bottom: 50,
        // width: "80%",
        alignSelf: "center"
        // height: 20
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttonImage: {
        // width: "100%",
        height: 52
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontFamily: appStyles.rockwellFont,
        fontSize: 24,
        lineHeight: 30,
        position: "absolute",
        alignSelf: "center",
        left: 90,
        top: 14
    }
});
