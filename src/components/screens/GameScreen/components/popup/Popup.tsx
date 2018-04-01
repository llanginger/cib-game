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
import { IReducers, IColorsReducer } from "../../../../../redux/store";

interface IPopupProps {
    colors?: IColorsReducer;
    dispatch?: any;
    correctAnswer?: boolean;
    popupText?: string;
    showPopup?: boolean;
}

interface IPopupStateProps {
    colors?: IColorsReducer;
    correctAnswer: boolean;
    showPopup: boolean;
}

interface IPopupState {
    animate: boolean;
    bounceDirection: "in" | "out";
}

class _Popup extends Component<IPopupProps, any> {
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
        this._bounce = this._bounce.bind(this);
        this._fadeOut = this._fadeOut.bind(this);
    }

    _bounce() {
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
                () => this._fadeOut()
            );
        });
    }

    _fadeOut() {
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

    componentWillReceiveProps(nextProps: IPopupProps) {
        if (nextProps.showPopup) {
            console.log("Next props popup: ", nextProps);
            this._bounce();
        }
    }

    render() {
        const { colors, correctAnswer, popupText } = this.props;

        const bounceInScale = this.bounceInValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-630, -130]
            // outputRange: [-130, 0]
        });

        const bounceOutScale = this.bounceOutValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-130, -630]
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
                    source={require("../../../../../images/laia/board-long.png")}
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
        showPopup: state.popupReducer.showPopup,
        correctAnswer: state.popupReducer.correct,
        popupText: state.laiaScoreReducer.resultMessage
    };
};

export const Popup = connect<IPopupStateProps, {}, IPopupProps>(
    mapStateToProps
)(_Popup);

const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: "absolute",
        left: 0,
        right: 0,
        // top: -200,
        top: 0,
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
