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
interface IFadeInImageProps {
    source: number;
    startAnimation: boolean;
    imageStyle: ImageStyle;
}

interface IFadeInImageState {
    animationValue: Animated.Value;
    startAnimation: boolean;
}

// create a component

export class FadeInImage extends React.Component<
    IFadeInImageProps,
    IFadeInImageState
> {
    constructor(props) {
        super(props);

        this.state = {
            animationValue: new Animated.Value(0),
            startAnimation: false
        };
    }

    componentWillReceiveProps(nextProps: IFadeInImageProps) {
        if (nextProps.startAnimation && !this.state.startAnimation) {
            this.setState(
                {
                    startAnimation: true
                },
                this._animate
            );
        } else return;
    }

    _animate = () => {
        console.log("Started fade in");
        const { animationValue } = this.state;
        animationValue.setValue(0);
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 1500
        }).start();
    };

    render() {
        const animatedOpacity = this.state.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        return (
            <Animated.Image
                source={this.props.source}
                resizeMode="contain"
                style={[this.props.imageStyle, { opacity: animatedOpacity }]}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {}
});
