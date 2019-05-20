// * "TUTORIAL"
//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameImage } from "../GameImage/GameImage";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { connect } from "react-redux";
import { gameOneLevels, ILaiaGameLevel, getImage } from "./logic/index";
import { screenObjects } from "../../navigation/screenObjects";
import { IReducers } from "../../redux/store";
import { submitAnswer } from "../../redux/actions/index";

//Interfaces
interface IGameOneContainerProps {
    dispatch?: any;
    navigator: any;
    submitAnswer: any;
}

interface IGameOneContainerState {
    revealAnswers: boolean;
    startAnimation: boolean;
    levels: ILaiaGameLevel[];
    currentLevel: number;
}

const initState: IGameOneContainerState = {
    revealAnswers: false,
    startAnimation: false,
    levels: gameOneLevels,
    currentLevel: 0
};
export class _GameOneContainer extends React.Component<
    IGameOneContainerProps,
    IGameOneContainerState
    > {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
        this._buttonOnPress = this._buttonOnPress.bind(this);
        this._makeButtons = this._makeButtons.bind(this);
        this._endGame = this._endGame.bind(this);
        this._nextLevel = this._nextLevel.bind(this);
    }

    _nextLevel(options: { reset?: boolean; correct: boolean }) {
        this.setState({ revealAnswers: true }, () => {
            setTimeout(() => this.setState({ startAnimation: true }), 2000);
        });

        this.props.submitAnswer(options.correct);
        setTimeout(
            () =>
                this.setState({
                    revealAnswers: false,
                    startAnimation: false,
                    currentLevel: options.reset
                        ? 0
                        : 1 + this.state.currentLevel
                }),
            4000
        );
    }

    _endGame(correct: boolean) {
        this.setState({ revealAnswers: true }, () => {
            setTimeout(() => this.setState({ startAnimation: true }), 2000);
        });

        this.props.submitAnswer(correct);

        setTimeout(() => {
            this.setState({ ...initState }, () => {
                this.props.navigator.showModal({
                    screen: screenObjects.SCORE_SCREEN.screen
                });
            });
        }, 3000);
    }

    _buttonOnPress(correct) {
        const { currentLevel, levels } = this.state;

        if (currentLevel < levels.length - 1) {
            this._nextLevel({ correct });
        } else {
            this._endGame(correct);
            // this._nextLevel(false);
        }
    }

    _makeButtons() {
        return this.state.levels[this.state.currentLevel].answers.map(
            (answer, i) => {
                return (
                    <AnimatedButton
                        preText="?"
                        text={answer.text}
                        revealed={this.state.revealAnswers}
                        correct={answer.correct}
                        onPress={() => this._buttonOnPress(answer.correct)}
                        startAnimation={this.state.startAnimation}
                        delay={i * 300}
                        key={this.state.startAnimation ? Math.random() : i}
                        animationInType="fadeInUp"
                        animationOutType="fadeOutLeft"
                        index={i}
                    />
                );
            }
        );
    }

    render() {
        const { revealAnswers, levels, currentLevel } = this.state;

        return (
            <View style={styles.container}>
                <GameImage
                    source={getImage(revealAnswers, levels[currentLevel])}
                    reset={this.state.startAnimation}
                    circlePortrait
                    imageStyle={{ width: "70%" }}
                />
                <View style={styles.buttonContainer}>
                    {this._makeButtons()}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (store: IReducers) => {
    return {};
};

interface IGameOneDispatchProps {
    submitAnswer: any;
}
const mapDispatchToProps = {
    submitAnswer: submitAnswer
};

export const GameContainerTutorial: any = connect<
    {},
    IGameOneDispatchProps,
    IGameOneContainerProps
>(mapStateToProps, mapDispatchToProps)(_GameOneContainer);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
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
