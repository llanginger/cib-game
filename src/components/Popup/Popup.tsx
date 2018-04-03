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
import { styles_colors } from "../../styles/styles";
import { connect } from "react-redux";
import { IReducers, IColorsReducer } from "../../redux/store";
import { PopupStar } from "./PopupStar";

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
    showSandwichBoard: boolean;
}

interface ISandwichBoardState {
    animate: boolean;
    bounceDirection: "in" | "out";
    beginAnimation: boolean;
}

class _SandwichBoard extends Component<ISandwichBoardProps, any> {
    private bounceInValue: Animated.Value;
    private bounceOutValue: Animated.Value;

    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            bounceDirection: "in",
            beginAnimation: false
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
                    bounceDirection: "out",
                    beginAnimation: true
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
            this.setState(
                {
                    bounceDirection: "in",
                    beginAnimation: false
                },
                () => {
                    this.bounceInValue.setValue(0);
                    this.props.dispatch({ type: "RESET_POPUP" });
                }
            )
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
            outputRange: [0, 1]
        });

        const bounceOutScale = this.bounceOutValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });

        const getBounceDirection = () => {
            return this.state.bounceDirection === "in"
                ? bounceInScale
                : bounceOutScale;
        };

        const getBackgroundColor = () => {
            return {
                backgroundColor: correctAnswer
                    ? styles_colors.green
                    : styles_colors.red
            };
        };

        const animatedStyle = [
            styles.container,
            // { opacity: getBounceDirection() }, // <-- Comment out this line for development
            getBackgroundColor()
        ];
        return (
            <Animated.View style={animatedStyle}>
                <View style={styles.textContainer}>
                    {/* <Text numberOfLines={3} style={styles.text}>
                        {popupText}
                    </Text> */}
                    <PopupStar
                        correct={true}
                        beginAnimation={this.state.beginAnimation}
                    />
                </View>
            </Animated.View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        colors: state.colorsReducer,
        showSandwichBoard: state.popupReducer.showPopup,
        correctAnswer: state.popupReducer.correct,
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
        right: 0,
        top: 300,
        height: circleDiameter,
        width: circleDiameter,
        borderRadius: circleDiameter / 2,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        shadowColor: "rgb(24, 23, 22)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 5,
        shadowOpacity: 0.8
        // borderColor: "red",
        // borderWidth: 1
    },
    textContainer: {},
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
