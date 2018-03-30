//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameContainerView } from "../shared/GameContainerView";
import { ParrotImage } from "./parrotGameComponents/ParrotImage";
import { ParrotButton } from "./parrotGameComponents/ParrotButton";
import { connect } from "react-redux";
import { levels, ILaiaGameLevel } from "./parrotGameComponents/levels";

//Interfaces
interface ILaiaGameContainerProps {
    dispatch?: any;
    navigator: any;
}

interface ILaiaGameContainerState {
    revealAnswers: boolean;
    reset: boolean;
    levels: ILaiaGameLevel[];
    currentLevel: number;
}

const initState: ILaiaGameContainerState = {
    revealAnswers: false,
    reset: false,
    levels: levels,
    currentLevel: 0
};
export class LaiaGameContainer extends React.Component<
    ILaiaGameContainerProps,
    ILaiaGameContainerState
> {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
        this._buttonOnPress = this._buttonOnPress.bind(this);
        this._makeButtons = this._makeButtons.bind(this);
        this._getImage = this._getImage.bind(this);
    }

    _buttonOnPress(callBack) {
        if (this.state.currentLevel < this.state.levels.length - 1) {
            this.setState({ revealAnswers: true }, () => {
                setTimeout(() => this.setState({ reset: true }), 2000);
            });
            setTimeout(
                () =>
                    this.setState({
                        revealAnswers: false,
                        reset: false,
                        currentLevel: 1 + this.state.currentLevel
                    }),
                4000
            );
        } else {
            this.setState({ ...initState }, () => {
                this.props.navigator.showModal({ screen: "LaiaScoreScreen" });
            });
        }
    }

    _makeButtons() {
        return this.state.levels[this.state.currentLevel].answers.map(
            (answer, i) => {
                return (
                    <ParrotButton
                        text={answer.text}
                        revealed={this.state.revealAnswers}
                        correct={answer.correct}
                        onPress={this._buttonOnPress}
                        reset={this.state.reset}
                        animated={true}
                        delay={i * 300}
                        key={this.state.reset ? Math.random() : i}
                        animationInType="fadeInUp"
                        animationOutType="fadeOutLeft"
                    />
                );
            }
        );
    }

    _getImage() {
        if (!this.state.revealAnswers) {
            return this.state.levels[this.state.currentLevel].image_before;
        } else {
            return this.state.levels[this.state.currentLevel].image_after;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ParrotImage
                    color={this.state.revealAnswers}
                    source={this._getImage()}
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
