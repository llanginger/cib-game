//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from "react-native-animatable"

import { connect } from "react-redux"
//Interface
interface IParrotButtonProps {
    text: string;
    correct: boolean;
    revealed: boolean;
    onPress: any
    dispatch?: any
    animated: boolean
}

// create a component
export const _ParrotButton: React.StatelessComponent<IParrotButtonProps> = (props: IParrotButtonProps) => {

    const buttonColor = () => {
        if (!props.revealed) {
            return "#3a86dc"
        } else if (props.correct) {
            return "#7fba1a"
        } else {
            return "#8f9091"
        }
    }
    const buttonOnPress = () => {
        props.onPress()

        if (!props.revealed) {

            props.dispatch({ type: "PARROT_GAME_SUBMIT_ANSWER", payload: { correct: props.correct } })
        }
    }

    return (
        <TouchableOpacity
            onPress={buttonOnPress}
            style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
        >
            <Animatable.View
                animation={props.animated ? "" : ""}
                style={[styles.button, { backgroundColor: buttonColor() }]}
            >
                <Text style={styles.text} >{props.text}</Text>
            </Animatable.View>
        </TouchableOpacity>
    );
};

export const ParrotButton = connect()(_ParrotButton)

// define your styles
const styles = StyleSheet.create({
    button: {
        width: "80%",
        height: 45,
        shadowColor: 'rgb(24, 23, 22)',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 5,
        shadowOpacity: 0.8,
        borderColor: '#776c79',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3a86dc',
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