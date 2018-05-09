//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameImage } from "../GameImage/GameImage";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { connect } from "react-redux";
import { gameSevenLevels, IGameSevenLevel } from "./gameSevenLevels";
import { getImage } from "../utility/getImage";
import { submitAnswer } from "../../redux/actions/index";
import { IReducers } from "../../redux/store";
import { screenObjects } from "../../navigation/screenObjects";
import { ImageFlipper } from "../ImageFlipper/ImageFlipper";

import { Ready } from "../Ready/Ready";
//Interfaces
interface IGameSevenContainerProps {
    navigator: any;
    submitAnswer: any;
}

interface IGameSevenContainerState {
    tutorialShown: boolean;
    revealAnswers: boolean;
    startButtonAnimation: boolean;
    startFlipperAnimation: boolean;
    levels: IGameSevenLevel[];
    currentLevel: number;
}

const initState: IGameSevenContainerState = {
    tutorialShown: false,
    revealAnswers: false,
    startButtonAnimation: false,
    startFlipperAnimation: true,
    levels: gameSevenLevels,
    currentLevel: 0
};
export class _GameSevenContainer extends React.Component<
    IGameSevenContainerProps,
    IGameSevenContainerState
> {
    private imageFlipper;
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
        this._buttonOnPress = this._buttonOnPress.bind(this);
        this._makeButtons = this._makeButtons.bind(this);
        this._endGame = this._endGame.bind(this);
        this._nextLevel = this._nextLevel.bind(this);
        this._animate = this._animate.bind(this);
    }

    _nextLevel(options: { reset?: boolean; correct: boolean }) {
        // Show answer and queue up out animation
        this.setState({ revealAnswers: true }, () => {
            setTimeout(
                () =>
                    this.setState({
                        startButtonAnimation: true,
                        startFlipperAnimation: false
                    }),
                2000
            );
        });
        this.props.submitAnswer(options.correct);

        // Bring in next level
        setTimeout(
            () =>
                this.setState({
                    revealAnswers: false,
                    startButtonAnimation: false,
                    currentLevel: options.reset
                        ? 0
                        : 1 + this.state.currentLevel
                }),
            4000
        );

        setTimeout(() => this.setState({ startFlipperAnimation: true }), 5000);
    }

    _endGame(correct: boolean) {
        this.setState({ revealAnswers: true }, () => {
            setTimeout(
                () => this.setState({ startButtonAnimation: true }),
                2000
            );
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
                        text={answer.text}
                        revealed={this.state.revealAnswers}
                        correct={answer.correct}
                        onPress={() => this._buttonOnPress(answer.correct)}
                        startAnimation={this.state.startButtonAnimation}
                        delay={i * 300}
                        key={
                            this.state.startButtonAnimation ? Math.random() : i
                        }
                        animationInType="fadeInUp"
                        animationOutType="fadeOutLeft"
                    />
                );
            }
        );
    }

    _animate() {
        this.imageFlipper._animate();
        // setTimeout(this._animate, 2000);
    }
    componentDidMount() {
        setTimeout(this._animate, 5000);
    }

    render() {
        const { revealAnswers, levels, currentLevel } = this.state;
        return (
            <View style={styles.container}>
                {/* <GameImage
                    color={this.state.revealAnswers}
                    source={getImage(revealAnswers, levels[currentLevel])}
                    reveal={this.state.revealAnswers}
                    reset={this.state.reset}
                /> */}
                <View style={styles.imageContainer}>
                    <ImageFlipper
                        frameDuration={500}
                        ref={ref => (this.imageFlipper = ref)}
                        source={gameSevenLevels[this.state.currentLevel].images}
                        loop={gameSevenLevels[this.state.currentLevel].loop}
                        startAnimation={this.state.startFlipperAnimation}
                        imageStyle={{
                            height: "100%",
                            width: "100%",
                            alignSelf: "center"
                        }}
                    />
                </View>
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

interface IGameSevenDispatchProps {
    submitAnswer: any;
}
const mapDispatchToProps = {
    submitAnswer: submitAnswer
};

export const GameSevenContainer: any = connect<
    {},
    IGameSevenDispatchProps,
    IGameSevenContainerProps
>(mapStateToProps, mapDispatchToProps)(_GameSevenContainer);

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
    },
    imageContainer: {
        height: 375,
        width: "100%"
    }
});
