//import liraries
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { gamOneSubmitAnswer } from "../../../../../../redux/actions/index";

import { connect } from "react-redux";
//Interface
interface IButtonProps {
    text: string;
    correct: boolean;
    reset: boolean;
    animationInType: any;
    animationOutType: any;
    delay: number;
    revealed: boolean;
    onPress: any;
    animated: boolean;
    submitAnswer: any;
}

// create a component
export const _Button: React.StatelessComponent<IButtonProps> = (
    props: IButtonProps
) => {
    const buttonColor = () => {
        if (!props.revealed) {
            return "#3a86dc";
        } else if (props.correct) {
            return "#7fba1a";
        } else {
            return "#8f9091";
        }
    };
    const buttonOnPress = () => {
        props.onPress();

        if (!props.revealed) {
            props.submitAnswer(props.correct);
        }
    };

    return (
        <TouchableOpacity
            onPress={buttonOnPress}
            disabled={props.revealed}
            style={styles.container}
        >
            <Animatable.View
                animation={
                    props.reset ? props.animationOutType : props.animationInType
                }
                duration={250}
                delay={props.delay}
                style={{ width: "80%" }}
            >
                <View
                    style={[styles.button, { backgroundColor: buttonColor() }]}
                >
                    <Text style={styles.text}>{props.text}</Text>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    submitAnswer: gamOneSubmitAnswer
};

export const Button = connect(mapStateToProps, mapDispatchToProps)(_Button);

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "100%",
        height: 45,
        shadowColor: "rgb(24, 23, 22)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 5,
        shadowOpacity: 0.8,
        borderColor: "#776c79",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3a86dc",
        padding: 0
    },
    text: {
        color: "white",
        fontFamily: "Rockwell",
        fontSize: 24,
        fontWeight: "400",
        lineHeight: 30,
        marginTop: 10,
        backgroundColor: "transparent"
    }
});

// Correct
// #36b93d

// Incorrect
// #8f9091
