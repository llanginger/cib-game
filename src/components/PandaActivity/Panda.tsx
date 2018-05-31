//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageStyle,
    Animated,
    Easing,
    ViewStyle
} from "react-native";

//Interfaces
interface IPandaProps {
    imageStyle?: ImageStyle;
    source: number;
}

interface IPandaState {
    fadeAnimation: Animated.Value;
    pandaImages: number[];
    currentPanda: number;
    frameCount: number;
    currentFrame: number;
}

const pandaImages = [
    require("../../images/laia/panda/panda-1.png"),
    require("../../images/laia/panda/panda-2.png"),
    require("../../images/laia/panda/panda-3.png"),
    require("../../images/laia/panda/panda-4.png"),
    require("../../images/laia/panda/panda-neutral.png"),
    require("../../images/laia/panda/panda-smile_no-bubble.png")
];

// create a component

export class Panda extends React.Component<IPandaProps, IPandaState> {
    constructor(props) {
        super(props);

        this.state = {
            fadeAnimation: new Animated.Value(0),
            pandaImages,
            currentPanda: 2,
            frameCount: 1,
            currentFrame: 0
        };
    }

    public _animate = () => {
        const {
            fadeAnimation,
            frameCount,
            currentFrame,
            currentPanda
        } = this.state;
        fadeAnimation.setValue(0);
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 2000
        }).start(() => {
            if (currentFrame <= frameCount - 1) {
                this.setState({ currentFrame: currentFrame + 1 }, () =>
                    this._animate()
                );
            } else {
                this._getNextFrame();
            }
        });
    };

    public _getNextFrame = () => {
        const {
            fadeAnimation,
            frameCount,
            currentFrame,
            currentPanda
        } = this.state;

        Animated.timing(fadeAnimation, {
            toValue: 0.5,
            duration: 1000
        }).start(() => {
            this.setState(
                {
                    currentPanda: this.state.currentPanda === 2 ? 3 : 2
                },
                () => {
                    fadeAnimation.setValue(0.5);
                    Animated.timing(fadeAnimation, {
                        toValue: 1,
                        duration: 1000
                    }).start(() =>
                        this.setState({
                            currentPanda: this.state.currentPanda === 3 ? 2 : 3
                        })
                    );
                }
            );
        });
    };
    render() {
        const { imageStyle = {}, source } = this.props;
        const { pandaImages, currentPanda } = this.state;

        const animatedOpacity = this.state.fadeAnimation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });
        return (
            <Animated.View
                style={[styles.imageContainer, { opacity: animatedOpacity }]}
            >
                <Image
                    style={[styles.image, imageStyle]}
                    source={pandaImages[currentPanda]}
                    resizeMode="contain"
                />
            </Animated.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        height: 375,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        position: "absolute",
        bottom: 120
        // paddingVertical: 10
    },
    image: {
        // flex: 1,
        height: "80%",
        width: "80%",
        alignSelf: "center"
    }
});
