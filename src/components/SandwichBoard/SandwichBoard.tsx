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
import { connect } from "react-redux";
import { IReducers, IColorsReducer } from "../../redux/store";

interface ISandwichBoardProps {
    colors?: IColorsReducer;
    dispatch?: any;
    correctAnswer?: boolean;
    popupText?: string;
    showPopup?: boolean;
}

interface ISandwichBoardStateProps {
    colors?: IColorsReducer;
    correctAnswer: boolean;
    showPopup: boolean;
}

interface ISandwichBoardState {
    animate: boolean;
    bounceDirection: "in" | "out";
}

class _SandwichBoard extends Component<ISandwichBoardProps, any> {
    private bounceInValue: Animated.Value;
    private bounceOutValue: Animated.Value;

    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            bounceDirection: "in"
        };
        this.bounceInValue = new Animated.Value(0);
        this.bounceOutValue = new Animated.Value(0);
        this._showSandwichBoard = this._showSandwichBoard.bind(this);
        this._hideSandwichBoard = this._hideSandwichBoard.bind(this);
    }

    _showSandwichBoard() {
        this.bounceInValue.setValue(0);
        Animated.spring(this.bounceInValue, {
            toValue: 1,
            friction: 5,
            damping: 0
        }).start(() => {
            this.setState(
                {
                    bounceDirection: "out"
                },
                () => this._hideSandwichBoard()
            );
        });
    }

    _hideSandwichBoard() {
        this.bounceOutValue.setValue(0);
        Animated.timing(this.bounceOutValue, {
            toValue: 1,
            duration: 400,
            delay: 1000,
            easing: Easing.linear
        }).start(() =>
            this.setState({ bounceDirection: "in" }, () => {
                this.bounceInValue.setValue(0);
                this.props.dispatch({ type: "RESET_POPUP" });
            })
        );
    }

    componentWillReceiveProps(nextProps: ISandwichBoardProps) {
        if (nextProps.showPopup) {
            console.log("Next props Popup: ", nextProps);
            this._showSandwichBoard();
        }
    }

    render() {
        const { colors, correctAnswer, popupText } = this.props;

        const bounceInScale = this.bounceInValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 0]
            // outputRange: [0, 0]
        });

        const bounceOutScale = this.bounceOutValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -500]
            // outputRange: [0, 0]
        });

        const getBounceDirection = () => {
            return this.state.bounceDirection === "in"
                ? bounceInScale
                : bounceOutScale;
        };

        const getContainerBorderStyles = () => {
            return {
                borderColor: correctAnswer ? colors.COOL : colors.HOT
            };
        };

        return (
            <Animated.View
                style={[
                    styles.container,
                    {
                        // ...getContainerBorderStyles(),
                        transform: [{ translateY: getBounceDirection() }]
                    }
                ]}
            >
                <Image
                    style={styles.image}
                    source={require("../../images/laia/board-long.png")}
                />
                <View style={styles.textContainer}>
                    <Text numberOfLines={3} style={styles.text}>
                        {popupText}
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        colors: state.colorsReducer,
        showPopup: state.sandiwchBoardReducer.showPopup,
        correctAnswer: state.sandiwchBoardReducer.correct,
        popupText: state.laiaScoreReducer.resultMessage
    };
};

export const SandwichBoard = connect<
    ISandwichBoardStateProps,
    {},
    ISandwichBoardProps
>(mapStateToProps)(_SandwichBoard);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: "absolute",
        left: 0,
        right: 0,
        // top: -200,
        top: -130,
        height: 539,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        shadowColor: "rgb(24, 23, 22)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 5,
        shadowOpacity: 0.8
        // borderColor: "red",
        // borderWidth: 1
    },
    textContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        right: 0,
        bottom: 65,
        height: 90,
        paddingHorizontal: 100
    },
    text: {
        fontSize: 24,
        fontFamily: "Rockwell",
        color: "white",
        // width: "60%",
        textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3
    },

    image: {}
});
