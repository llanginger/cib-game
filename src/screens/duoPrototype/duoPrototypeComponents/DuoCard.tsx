import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar,
    Animated,
    Easing,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../../redux/store";

interface IDuoCardProps {
    selected: boolean;
    id: any;
    correctAnswer: boolean;
    image: any;
    onPress: any
}

const circleDiameter: number = 25

export class DuoCard extends Component<any, any> {

    private springValue: Animated.Value

    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(0)
        this.bounce = this.bounce.bind(this)
    }

    bounce() {
        this.springValue.setValue(0)
        console.log("Bounce called")
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 5,
                velocity: 20
            }
        ).start()
        this.props.onPress()
    }

    render() {
        const bounceScale = this.springValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.99, 1]
        })

        return (
            <TouchableWithoutFeedback onPress={this.bounce}>
                <Animated.View
                    onPress={this.bounce}
                    style={[styles.card, { transform: [{ scale: bounceScale }] }]}
                >
                    <View style={styles.radioContainer}>
                        <View style={styles.radioOuter}>
                            <View style={[styles.radioInner, { backgroundColor: this.props.selected ? "blue" : "white" }]}>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}


const styles = StyleSheet.create({
    card: {
        width: "40%",
        marginHorizontal: "2.5%",
        height: 200,
        padding: 10,
        backgroundColor: "palevioletred",
        borderRadius: 15,
        shadowColor: "#888",
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 5 }
    },
    radioContainer: {

    },
    radioOuter: {
        height: circleDiameter,
        width: circleDiameter,
        borderRadius: circleDiameter / 2,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    radioInner: {
        height: circleDiameter - 5,
        width: circleDiameter - 5,
        borderRadius: (circleDiameter - 5) / 2,
        borderWidth: 2,
        borderColor: "white"
    }
})