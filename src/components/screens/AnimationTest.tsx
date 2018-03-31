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
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

export class AnimationTest extends Component<any, any> {
    private springValue: Animated.Value;
    constructor(props) {
        super(props);

        this.springValue = new Animated.Value(0);
    }

    spring() {
        this.springValue.setValue(0);
        Animated.spring(this.springValue, {
            toValue: 1,
            friction: 5,
            velocity: 20
        }).start();
    }

    render() {
        const scaleBounce = this.springValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.95, 1]
        });

        return (
            <View style={styles.container}>
                <Text onPress={this.spring.bind(this)}>Click me</Text>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{ scale: scaleBounce }]
                    }}
                    source={{
                        uri:
                            "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 150
    }
});
