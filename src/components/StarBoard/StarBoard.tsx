//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

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
                source={getImage()}
                resizeMode="contain"
                style={styles.image}
            />
        </View>
    );
};

const mapStateToProps = (state: IReducers) => {
    return {
        score: state.laiaScoreReducer.score
    };
};

export const StarBoard = connect(mapStateToProps)(_StarBoard);

// define your styles
const styles = StyleSheet.create({
    starContainer: {
        height: 500,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 6
    },
    image: {
        height: "100%",
        width: "100%"
    }
});
