//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
// import LottieView from "lottie-react-native";

//Interfaces
interface IPopupStarProps {
    correct: boolean;
    beginAnimation: boolean;
}

interface IPopupStarState {
    beginAnimation: boolean;
}

export class PopupAnimation extends React.Component<
    IPopupStarProps,
    IPopupStarState
    > {
    private animationProgress;

    constructor(props) {
        super(props);
        this.state = { beginAnimation: false };
        this.animationProgress = new Animated.Value(0);
        this._startAnimation = this._startAnimation.bind(this);
    }

    _startAnimation() {
        if (this.state.beginAnimation) {
            console.log("Popup Animation Started");
            this.animationProgress.setValue(0);
            Animated.timing(this.animationProgress, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }).start();
        }
    }

    componentDidMount() {
        this._startAnimation();
    }

    componentWillReceiveProps(nextProps: IPopupStarProps) {
        if (this.state.beginAnimation && nextProps.beginAnimation) {
            return null;
        }

        if (!this.state.beginAnimation && !nextProps.beginAnimation) {
            return null;
        }

        if (!this.state.beginAnimation && nextProps.beginAnimation) {
            return this.setState({ beginAnimation: true }, () =>
                this._startAnimation()
            );
        }

        if (this.state.beginAnimation && !nextProps.beginAnimation) {
            return this.setState({ beginAnimation: false }, () =>
                this.animationProgress.setValue(0)
            );
        }
    }

    render() {
        console.log("PopupStar state: ", this.state);
        return (
            <Animated.View style={styles.container}>
                {/* <LottieView
                    style={[
                        styles.animation,
                        {
                            transform: [
                                {
                                    rotate: this.props.correct
                                        ? "0deg"
                                        : "180deg"
                                }
                            ]
                        }
                    ]}
                    source={require("../../images/lottie/like.json")}
                    progress={this.animationProgress}
                /> */}
            </Animated.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 140,
        justifyContent: "center",
        alignItems: "center"
    },
    animation: {
        height: "100%",
        width: "100%"
    }
});
