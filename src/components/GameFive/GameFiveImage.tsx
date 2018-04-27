//import liraries
import * as React from "react";
import { View, Image, Text, StyleSheet, Animated, Easing } from "react-native";

//Interfaces
interface IGameFiveImageProps {
    image: {
        imageFrame1: number;
        imageFrame2: number;
    };
    startAnimation: boolean;
}

interface IGameFiveImageState {
    frame1: boolean;
    startAnimation: boolean;
    numberOfAnimatedFrames: number;
    currentAnimatedFrame: number;
    frameDuration: number;
}

const initState: IGameFiveImageState = {
    frame1: true,
    startAnimation: false,
    numberOfAnimatedFrames: 2,
    currentAnimatedFrame: 0,
    frameDuration: 200
};

export class GameFiveImage extends React.Component<
    IGameFiveImageProps,
    IGameFiveImageState
> {
    private animationValue: Animated.Value;

    constructor(props) {
        super(props);

        this.animationValue = new Animated.Value(0);

        this.state = {
            ...initState
        };

        this._animate = this._animate.bind(this);
        this._chooseFrame = this._chooseFrame.bind(this);
    }

    componentWillReceiveProps(nextProps: IGameFiveImageProps) {
        if (nextProps.startAnimation && !this.state.startAnimation) {
            this.setState({ startAnimation: true }, this._animate);
        } else if (!nextProps.startAnimation && this.state.startAnimation) {
            this.setState({ startAnimation: false });
        } else return;
    }

    _animate() {
        this.animationValue.setValue(0);
        Animated.timing(this.animationValue, {
            toValue: 1,
            duration: this.state.frameDuration,
            easing: Easing.linear
        }).start(() => {
            if (
                this.state.currentAnimatedFrame <
                this.state.numberOfAnimatedFrames
            ) {
                this.setState(
                    {
                        frame1: !this.state.frame1,
                        currentAnimatedFrame:
                            this.state.currentAnimatedFrame + 1
                    },
                    this._animate
                );
            } else {
                this.setState({
                    ...initState
                });
            }
        });
    }

    _chooseFrame() {
        const { imageFrame1, imageFrame2 } = this.props.image;
        if (this.state.frame1) {
            return (
                <Image
                    source={imageFrame1}
                    resizeMode="contain"
                    style={styles.image}
                />
            );
        } else {
            return (
                <Image
                    source={imageFrame2}
                    resizeMode="contain"
                    style={styles.image}
                />
            );
        }
    }

    render() {
        return this._chooseFrame();
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50"
    },
    image: {
        height: "70%",
        width: "100%"
    }
});
