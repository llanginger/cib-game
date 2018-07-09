//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { IFruitType } from "./IFruitType"

//Interface
interface IBigFruitProps {
    currentFruit: IFruitType
}

interface IBigFruitState {
    fadeAnimation: Animated.Value;
    currentFruit: IFruitType
}

const apple = require("../../images/laia/fruit-activity/fruit/apple.png");
const banana = require("../../images/laia/fruit-activity/fruit/banana.png");
const pear = require("../../images/laia/fruit-activity/fruit/pear.png");

// create a component
export class BigFruit extends React.Component<IBigFruitProps, IBigFruitState> {
    constructor(props) {
        super(props);

        this.state = {
            fadeAnimation: new Animated.Value(0),
            currentFruit: this.props.currentFruit
        };
    }

    _getNewFruit = () => {
        const { fadeAnimation } = this.state;
        fadeAnimation.setValue(0);
        Animated.timing(fadeAnimation, {
            toValue: 0.5,
            duration: 500
        }).start(() => {
            this.setState({ currentFruit: this.props.currentFruit }, () => {
                fadeAnimation.setValue(0.5);
                Animated.timing(fadeAnimation, {
                    toValue: 1,
                    duration: 500
                }).start();
            });
        });
    };

    componentWillReceiveProps(nextProps: IBigFruitProps) {
        if (nextProps.currentFruit !== this.state.currentFruit) {
            this._getNewFruit();
        }
    }

    render() {
        const animatedOpacity = this.state.fadeAnimation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        const whichFruit = () => {
            switch (this.state.currentFruit) {
                case "apple":
                    return apple;
                case "banana":
                    return banana;
                case "pear":
                    return pear;
                case "empty":
                    return null
            }
        };
        return (
            <Animated.View
                style={[styles.container, { opacity: animatedOpacity }]}
            >
                <Image
                    source={whichFruit()}
                    resizeMode="contain"
                    style={styles.fruit}
                />
            </Animated.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20
    },
    fruit: {
        width: "85%",
        height: "85%"
    }
});
