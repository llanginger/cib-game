//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { appStyles } from "../../styles/styles";
import { IEmojiLevel } from "./emojiLevels";
import { IReducers } from "../../redux/store";
import { connect } from "react-redux";
import { GameFiveImage } from "./GameFiveImage";
//Interface

interface IGameFiveImageContainerProps {
    currentLevel: IEmojiLevel;
    startAnimation: boolean;
}

const _GameFiveImageContainer: React.StatelessComponent<
    IGameFiveImageContainerProps
> = (props: IGameFiveImageContainerProps) => {
    const { currentLevel } = props;
    return (
        <View style={styles.imageContainer}>
            <Text style={styles.levelTitle}>{currentLevel.title}</Text>
            <GameFiveImage
                image={{
                    imageFrame1: currentLevel.imageFrame1,
                    imageFrame2: currentLevel.imageFrame2
                }}
                startAnimation={props.startAnimation}
            />
        </View>
    );
};

const mapStateToProps = (store: IReducers) => {
    return {
        currentLevel:
            store.emojiGameReducer.emojiLevels[
                store.emojiGameReducer.currentLevel
            ],
        startAnimation: store.emojiGameReducer.startAnimation
    };
};

export const GameFiveImageContainer = connect(mapStateToProps)(
    _GameFiveImageContainer
);

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        // height: 420,
        flex: 3,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "flex-end"

        // paddingVertical: 20
    },
    image: {
        height: "70%",
        width: "100%"
    },
    levelTitle: {
        textAlign: "center",
        padding: 10,
        fontFamily: appStyles.font,
        color: "#60b8ff",
        fontSize: 30,
        borderRadius: 5,
        overflow: "hidden"
    }
});
