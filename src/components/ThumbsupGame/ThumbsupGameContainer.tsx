//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameImage } from "../GameImage/GameImage";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { connect } from "react-redux";
import { thumbsupGameLevels, IThumbsupGameLevel } from "./logic/index";
import { getImage } from "../utility/getImage";
import { submitAnswer } from "../../redux/actions/index";
import { IReducers } from "../../redux/store";
import { screenObjects } from "../../navigation/screenObjects";
import { ThumbsupButton } from "./ThumbsupButton";
import { ThumbsupBubble } from "./ThumbsupBubble";
import { Ready } from "../Ready/Ready";
import { appStyles } from "../../styles/styles";
import { ThumbsupTitle } from "./ThumbsupTitle";
//Interfaces
interface IThumbsupGameContainerProps {
    navigator: any;
    submitAnswer: any;
}

interface IThumbsupGameContainerState {
    tutorialShown: boolean;
    revealAnswers: boolean;
    reset: boolean;
    levels: IThumbsupGameLevel[];
    currentLevel: number;
}

const initState: IThumbsupGameContainerState = {
    tutorialShown: false,
    revealAnswers: false,
    reset: false,
    levels: thumbsupGameLevels,
    currentLevel: 0
};

export class _ThumbsupGameContainer extends React.Component<
    IThumbsupGameContainerProps,
    IThumbsupGameContainerState
> {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
        this._buttonOnPress = this._buttonOnPress.bind(this);
        // this._makeButtons = this._makeButtons.bind(this);
        this._endGame = this._endGame.bind(this);
        this._nextLevel = this._nextLevel.bind(this);
        this._getCurrentLevel = this._getCurrentLevel.bind(this);
    }

    componentWillMount() {
        this.setState({ ...initState });
    }

    _nextLevel(options: { reset?: boolean; correct: boolean }) {
        // Show answer and queue up out animation
        this.setState({ revealAnswers: true }, () => {
            setTimeout(() => this.setState({ reset: true }), 2000);
        });
        this.props.submitAnswer(options.correct);

        // Bring in next level
        setTimeout(
            () =>
                this.setState({
                    revealAnswers: false,
                    reset: false,
                    currentLevel: options.reset
                        ? 0
                        : 1 + this.state.currentLevel
                }),
            400
        );
    }

    _endGame(correct: boolean) {
        this.setState({ revealAnswers: true }, () => {
            setTimeout(() => this.setState({ reset: true }), 2000);
        });

        this.props.submitAnswer(correct);

        setTimeout(() => {
            this.setState({ ...initState }, () => {
                this.props.navigator.resetTo({ screen: "GameMap" });
                this.props.navigator.showModal({
                    screen: screenObjects.SCORE_SCREEN.screen
                });
            });
        }, 3000);
    }

    _buttonOnPress(correct) {
        console.log("Button pressed with: ", correct);
        const { currentLevel, levels } = this.state;

        if (currentLevel < levels.length - 1) {
            this._nextLevel({ correct });
        } else {
            this._endGame(correct);
            // this._nextLevel(false);
        }
    }

    _getCurrentLevel() {
        return this.state.levels[this.state.currentLevel];
    }

    render() {
        const { revealAnswers } = this.state;
        const {
            titleText,
            emotion,
            thumbsup,
            bubbleText
        } = this._getCurrentLevel();
        console.log("Thumbsup Game state: ", this.state);
        return (
            <View style={styles.container}>
                <ThumbsupTitle titleText={titleText} emotionText={emotion} />
                <ThumbsupBubble text={bubbleText} />
                <View style={styles.buttonContainer}>
                    <ThumbsupButton
                        source={require("../../images/laia/hand-game/blue-button.png")}
                        onPress={() => this._buttonOnPress(true)}
                        color="#4097b0"
                    />
                    <ThumbsupButton
                        source={require("../../images/laia/hand-game/red-button.png")}
                        onPress={() => this._buttonOnPress(false)}
                        color="#b7535b"
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (store: IReducers) => {
    return {};
};

interface IThumbsupGameDispatchProps {
    submitAnswer: any;
}
const mapDispatchToProps = {
    submitAnswer: submitAnswer
};

export const ThumbsupGameContainer: any = connect<
    {},
    IThumbsupGameDispatchProps,
    IThumbsupGameContainerProps
>(mapStateToProps, mapDispatchToProps)(_ThumbsupGameContainer);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        // paddingVertical: 30,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9"
    },
    button: {
        height: 50,
        width: "100%",
        backgroundColor: "papayawhip",
        borderRadius: 10,
        borderColor: "#333",
        borderWidth: 3,
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8
    }
});
