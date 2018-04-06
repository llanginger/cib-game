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
import { BlurView as Blur } from "react-native-blur";

//Interfaces
interface IBlurViewProps {
    fadeOut: boolean;
}

interface IBlurViewState {
    visible: boolean;
}

// create a component

export class BlurView extends React.Component<IBlurViewProps, IBlurViewState> {
    private opacityValue: Animated.Value;
    private duration: number;

    constructor(props) {
        super(props);

        this.state = { visible: true };

        this.opacityValue = new Animated.Value(0);
        this._opacity = this._opacity.bind(this);
        this.duration = 2000;
    }

    UNSAFE_componentWillReceiveProps(nextProps: IBlurViewProps) {
        if (nextProps.fadeOut && this.state.visible) {
            this._opacity();
        }
    }

    _opacity() {
        this.opacityValue.setValue(0);
        Animated.timing(this.opacityValue, {
            toValue: 1,
            duration: this.duration,
            easing: Easing.linear
        }).start(() => this.setState({ visible: false }));
    }

    render() {
        const opacityStyleValue = this.opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });

        return this.state.visible ? (
            <Animated.View
                style={[styles.container, { opacity: opacityStyleValue }]}
            >
                <Blur
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                />
                <TouchableOpacity
                    onPress={this._opacity}
                    style={{ padding: 20, backgroundColor: "red" }}
                >
                    <Text>Fade out</Text>
                </TouchableOpacity>
            </Animated.View>
        ) : null;
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});
