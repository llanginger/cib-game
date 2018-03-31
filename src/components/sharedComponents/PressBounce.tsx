import React, { Component } from "react";
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";

export class PressBounce extends Component<any, any> {

    private springValue: Animated.Value

    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(0)
    }

    bounce() {
        this.springValue.setValue(0)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 5,
                velocity: 20
            }
        ).start()
    }

    render() {
        const bounceScale = this.springValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.9, 1]
        })

        return (
            <Animated.View
                onPress={this.bounce.bind(this)}
                style={{
                    width: undefined,
                    height: undefined,
                    backgroundColor: "red",
                    transform: [{ scale: bounceScale }]
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}