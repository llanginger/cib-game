//import liraries
import * as React from "react";
import {
    View,
    ImageStyle,
    Image,
    Text,
    StyleSheet,
    Animated,
    Easing
} from "react-native";

//Interfaces
interface IImageFlipperProps {
    source: number[];
    startAnimation: boolean;
    imageStyle: ImageStyle;
}

interface IImageFlipperState {
    startAnimation: boolean;
    numberOfAnimatedFrames: number;
    currentAnimatedFrame: number;
    frameDuration: number;
}

const initState: IImageFlipperState = {
    startAnimation: false,
    numberOfAnimatedFrames: 1,
    currentAnimatedFrame: 0,
    frameDuration: 200
};

export class ImageFlipper extends React.Component<
    IImageFlipperProps,
    IImageFlipperState
> {
    private animationValue: Animated.Value;

    constructor(props) {
        super(props);

        this.animationValue = new Animated.Value(0);
        this.state = {
            ...initState,
            numberOfAnimatedFrames: this.props.source.length
        };

        this._animate = this._animate.bind(this);
        this._chooseFrame = this._chooseFrame.bind(this);
    }

    componentWillReceiveProps(nextProps: IImageFlipperProps) {
        if (nextProps.startAnimation && !this.state.startAnimation) {
            this.setState({ startAnimation: true }, this._animate);
        } else return;
    }

    public _animate() {
        this.animationValue.setValue(0);
        Animated.timing(this.animationValue, {
            toValue: 1,
            duration: this.state.frameDuration,
            easing: Easing.linear
        }).start(() => {
            console.log("Frame " + this.state.currentAnimatedFrame);
            if (
                this.state.currentAnimatedFrame <
                this.state.numberOfAnimatedFrames
            ) {
                this.setState(
                    {
                        currentAnimatedFrame:
                            this.state.currentAnimatedFrame + 1
                    },
                    this._animate
                );
            } else {
                console.log("Last frame");
                this.setState(
                    {
                        startAnimation: false,
                        currentAnimatedFrame: 0
                    },
                    () => this.animationValue.setValue(0)
                );
            }
        });
    }

    _chooseFrame() {
        console.log("Image flipper props: ", this.props);
        console.log("Image flipper state: ", this.state);
        return (
            <Image
                source={this.props.source[this.state.currentAnimatedFrame]}
                resizeMode="contain"
                style={this.props.imageStyle}
            />
        );
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
    }
});
