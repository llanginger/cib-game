import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar,
    Animated,
    Easing,
    Platform,
    ImageBackground
} from "react-native";
import { appStyles } from "../../styles/styles";
import { connect } from "react-redux";
import { IReducers, IColorsReducer } from "../../redux/store";
import { PopupAnimation } from "./PopupAnimation";

interface ISandwichBoardProps {
    colors?: IColorsReducer;
    dispatch?: any;
    correctAnswer?: boolean;
    popupText?: string;
    showSandwichBoard?: boolean;
}

interface ISandwichBoardStateProps {
    colors?: IColorsReducer;
    correctAnswer: boolean;
    showSandwichBoard: boolean;
}

interface ISandwichBoardState {
    animate: boolean;
    bounceDirection: "in" | "out";
    beginAnimation: boolean;
}

class _SandwichBoard extends Component<ISandwichBoardProps, any> {
    private fadeInValue: Animated.Value;
    private fadeOutValue: Animated.Value;

    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            fadeDirection: "in",
            beginAnimation: false
        };
        this.fadeInValue = new Animated.Value(0);
        this.fadeOutValue = new Animated.Value(0);
        this._showSandwichBoard = this._showSandwichBoard.bind(this);
        this._hideSandwichBoard = this._hideSandwichBoard.bind(this);
    }

    _showSandwichBoard() {
        this.fadeInValue.setValue(0);
        Animated.timing(this.fadeInValue, {
            toValue: 1,
            duration: 400
        }).start(() => {
            this.setState(
                {
                    bounceDirection: "out",
                    beginAnimation: true
                },
                () => {
                    this._hideSandwichBoard();
                }
            );
        });
    }

    _hideSandwichBoard() {
        this.fadeOutValue.setValue(0);
        Animated.timing(this.fadeOutValue, {
            toValue: 1,
            duration: 400,
            delay: 2000,
            easing: Easing.linear
        }).start(() =>
            this.setState(
                {
                    bounceDirection: "in",
                    beginAnimation: false
                },
                () => {
                    this.fadeInValue.setValue(0);
                    this.props.dispatch({ type: "RESET_POPUP" });
                }
            )
        );
    }

    componentWillReceiveProps(nextProps: ISandwichBoardProps) {
        if (nextProps.showSandwichBoard) {
            this._showSandwichBoard();
        }
    }

    render() {
        const { colors, correctAnswer, popupText } = this.props;

        const fadeInAmount = this.fadeInValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        const fadeOutAmount = this.fadeOutValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });

        const getFadeDirection = () => {
            return this.state.bounceDirection === "in"
                ? fadeInAmount
                : fadeOutAmount;
        };

        const getBorderColor = () => {
            return {
                borderColor: correctAnswer
                    ? appStyles.colors.green
                    : appStyles.colors.red
            };
        };

        const animatedStyle = [
            styles.container,
            { opacity: getFadeDirection() }, // <-- Comment out this line for development
            getBorderColor()
        ];
        return (
            <Animated.View style={animatedStyle}>
                <PopupAnimation
                    correct={this.props.correctAnswer}
                    beginAnimation={this.state.beginAnimation}
                />
            </Animated.View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        colors: state.colorsReducer,
        showSandwichBoard: state.sandiwchBoardReducer.showPopup,
        correctAnswer: state.sandiwchBoardReducer.correct,
        popupText: state.laiaScoreReducer.resultMessage
    };
};

export const Popup = connect<ISandwichBoardStateProps, {}, ISandwichBoardProps>(
    mapStateToProps
)(_SandwichBoard);

const circleDiameter = 100;
const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: "absolute",
        right: 5,
        top: 280,
        height: circleDiameter,
        width: circleDiameter,
        borderRadius: circleDiameter / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        overflow: "hidden",
        borderWidth: 3
    }
});
