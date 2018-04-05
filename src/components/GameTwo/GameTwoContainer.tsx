//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameOneImage } from "../GameOneImage/GameOneImage";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { connect } from "react-redux";
import { gameTowLevels, IGameTwoLevel, getImage } from "./logic/index";
import { gamOneSubmitAnswer } from "../../redux/actions/index";
import { IReducers } from "../../redux/store";
import { screenObjects } from "../../navigation/screenObjects";

//Interfaces
interface IGameTwoContainerProps {
    navigator: any;
    submitAnswer: any;
}

interface IGameTwoContainerState {
    revealAnswers: boolean;
    reset: boolean;
    levels: IGameTwoLevel[];
    currentLevel: number;
}

const initState: IGameTwoContainerState = {
    revealAnswers: false,
    reset: false,
    levels: gameTowLevels,
    currentLevel: 0
};
export class _GameTwoContainer extends React.Component<
    IGameTwoContainerProps,
    IGameTwoContainerState
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
            4000
        );
    }

    _endGame() {
        this.setState({ revealAnswers: true }, () => {
            setTimeout(() => this.setState({ reset: true }), 2000);
        });

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
            this._endGame();
            // this._nextLevel(false);
        }
    }

    _makeButtons() {
        return this.state.levels[this.state.currentLevel].answers.map(
            (answer, i) => {
                return (
                    <AnimatedButton
                        text={answer.text}
                        revealed={this.state.revealAnswers}
                        correct={answer.correct}
                        onPress={() => this._buttonOnPress(answer.correct)}
                        reset={this.state.reset}
                        delay={i * 300}
                        key={this.state.reset ? Math.random() : i}
                        animationInType="fadeInUp"
                        animationOutType="fadeOutLeft"
                    />
                );
            }
        );
    }

    render() {
        const { revealAnswers, levels, currentLevel } = this.state;
        return (
            <View style={styles.container}>
                <GameOneImage
                    color={this.state.revealAnswers}
                    source={getImage(revealAnswers, levels[currentLevel])}
                    reveal={this.state.revealAnswers}
                    reset={this.state.reset}
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

interface IGameTwoDispatchProps {
    submitAnswer: any;
}
const mapDispatchToProps = {
    submitAnswer: gamOneSubmitAnswer
};

export const GameTwoContainer: any = connect<
    {},
    IGameTwoDispatchProps,
    IGameTwoContainerProps
>(mapStateToProps, mapDispatchToProps)(_GameTwoContainer);

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
