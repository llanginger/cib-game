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
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers, IColorsReducer } from "../../../../redux/store";

interface IPopupProps {
    colors?: IColorsReducer
    dispatch?: any
    correctAnswer?: boolean;
    showPopup?: boolean;
}

interface IPopupStateProps {
    colors?: IColorsReducer
    correctAnswer: boolean
    showPopup: boolean
}

interface IPopupState {
    animate: boolean
    bounceDirection: "in" | "out"
}

class _Popup extends Component<IPopupProps, any> {

    private bounceInValue: Animated.Value
    private bounceOutValue: Animated.Value

    constructor(props) {
        super(props)
        this.state = {
            animate: false,
            bounceDirection: "in"
        }
        this.bounceInValue = new Animated.Value(0)
        this.bounceOutValue = new Animated.Value(0)
        this._bounce = this._bounce.bind(this)
        this._fadeOut = this._fadeOut.bind(this)
    }

    _bounce() {
        this.bounceInValue.setValue(0)
        Animated.spring(
            this.bounceInValue,
            {
                toValue: 1,
                friction: 5,
                velocity: 6
            }
        ).start(() => {
            this.setState({
                bounceDirection: "out"
            }, () => this._fadeOut())
        })
    }

    _fadeOut() {
        this.bounceOutValue.setValue(0)
        Animated.timing(
            this.bounceOutValue,
            {
                toValue: 1,
                duration: 400,
                delay: 1000,
                easing: Easing.linear
            }
        ).start(() => this.setState({ bounceDirection: "in" }, () => {
            this.bounceInValue.setValue(0)
            this.props.dispatch({ type: "RESET_POPUP" })
        }))
    }

    componentWillReceiveProps(nextProps: IPopupProps) {
        if (nextProps.showPopup) {

            console.log("Next props popup: ", nextProps)
            this._bounce()
        }
    }

    render() {
        const { colors, correctAnswer } = this.props

        const bounceInScale = this.bounceInValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 520]
        })

        const bounceOutScale = this.bounceOutValue.interpolate({
            inputRange: [0, 1],
            outputRange: [520, -100]
        })

        const getBounceDirection = () => {
            return this.state.bounceDirection === "in" ? bounceInScale : bounceOutScale
        }


        const getContainerStyles = () => {
            return {
                borderColor: correctAnswer ? colors.COOL : colors.HOT
            }
        }

        return (
            <Animated.View style={[styles.container, { ...getContainerStyles(), transform: [{ translateY: getBounceDirection() }] }]}>
                <Text style={styles.text}>{correctAnswer ? "Great Job!!" : "You'll get it next time!"}</Text>
            </Animated.View>
        )
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        colors: state.colorsReducer,
        showPopup: state.popupReducer.showPopup,
        correctAnswer: state.popupReducer.correct
    }
}

export const Popup = connect<IPopupStateProps, {}, IPopupProps>(mapStateToProps)(_Popup)

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        overflow: "hidden",
        height: 100,
        width: 300,
        backgroundColor: "white",
        borderWidth: 5,
        borderColor: "black",
        display: "flex",
        position: "absolute",
        left: 20,
        top: -200,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24
    }
})