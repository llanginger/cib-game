//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";

//Interfaces
interface ISampleAnimationProps {}

interface ISampleAnimationState {
    progress: Animated.Value;
}

// create a component

export class SampleAnimation extends React.Component<
    ISampleAnimationProps,
    ISampleAnimationState
> {
    private animationProgress;

    constructor(props) {
        super(props);
        this.animationProgress = new Animated.Value(0);
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation() {
        console.log("Launching animation");
        this.animationProgress.setValue(0);
        Animated.timing(this.animationProgress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear
        }).start(() => this.animationProgress.setValue(0));
    }

    render() {
        return (
            <View style={{ height: 400, width: "100%" }}>
                <TouchableOpacity
                    style={{ padding: 20, backgroundColor: "palevioletred" }}
                    onPress={this.startAnimation}
                >
                    <Text>Start Animation</Text>
                </TouchableOpacity>
                <LottieView
                    loop={true}
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../../../images/lottie/newAnimation.json")}
                    progress={this.animationProgress}
                />
                {/* <LottieView
                    loop={true}
                    style={{ height: "100%", width: "100%" }}
                    source={require("../../../../images/lottie/balloonwhale.json")}
                    progress={this.animationProgress}
                /> */}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 400,
        width: "100%",
        backgroundColor: "papayawhip",
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center"
    }
});
