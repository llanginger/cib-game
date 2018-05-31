//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { appStyles } from "../../styles/styles";
import { IEmojiLevel } from "./emojiLevels";
import { IReducers } from "../../redux/store";
import { connect } from "react-redux";
import { GameFiveImage } from "./GameFiveImage";
import { ImageFlipper } from "../ImageFlipper/ImageFlipper";
import { FadeInImage } from "../FadeInImage/FadeInImage";
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
            {currentLevel.fadeIn ? (
                <FadeInImage
                    source={currentLevel.imageFrame1}
                    startAnimation={props.startAnimation}
                    imageStyle={{
                        height: "50%",
                        width: "100%",
                        marginBottom: 80,
                        marginTop: 20
                    }}
                />
            ) : (
                <ImageFlipper
                    source={[
                        currentLevel.imageFrame1,
                        currentLevel.imageFrame2
                    ]}
                    startAnimation={props.startAnimation}
                    returnToStart={false}
                    loop={false}
                    imageStyle={{
                        height: "50%",
                        width: "100%",
                        marginBottom: 80,
                        marginTop: 20
                    }}
                />
            )}
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
    levelTitle: {
        textAlign: "center",
        padding: 10,
        fontFamily: appStyles.rockwellFont,
        color: "#60b8ff",
        fontSize: 30,
        borderRadius: 5,
        overflow: "hidden"
    }
});
