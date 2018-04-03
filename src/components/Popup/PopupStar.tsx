//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

//Interfaces
interface IPopupStarProps {
    correct: boolean;
    beginAnimation: boolean;
}

interface IPopupStarState {
    progress: Animated.Value;
}

export class PopupStar extends React.Component<
    IPopupStarProps,
    IPopupStarState
> {
    private animationProgress;

    constructor(props) {
        super(props);

        this.animationProgress = new Animated.Value(0);
        this._startAnimation = this._startAnimation.bind(this);
    }

    componentWillReceiveProps() {}

    _startAnimation() {
        console.log("Popup Animation Started");
        this.animationProgress.setValue(0);
        Animated.timing(this.animationProgress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear
        }).start();
    }

    componentDidMount() {
        this._startAnimation();
    }

    render() {
        return (
            <Animated.View style={styles.container}>
                <LottieView
                    style={styles.animation}
                    source={require("../../images/lottie/star.json")}
                    progress={this.animationProgress}
                />
            </Animated.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    animation: {
        height: "100%",
        width: "100%"
    }
});
