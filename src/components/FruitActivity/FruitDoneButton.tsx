//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appStyles } from "../../styles/styles"

//Interface
interface IFruitDoneButtonProps {
    onPress: any
}

// create a component
export const FruitDoneButton: React.StatelessComponent<IFruitDoneButtonProps> = (props: IFruitDoneButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
    );
};

const circleDim = 80
// define your styles
const styles = StyleSheet.create({
    container: {
        height: circleDim,
        width: circleDim,
        borderRadius: circleDim / 2,
        backgroundColor: "#60b8ff",
        position: "absolute",
        bottom: 250,
        right: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5
    },
    text: {
        fontFamily: appStyles.rockwellFont,
        fontSize: 20,
        color: "white",
        lineHeight: 24
    }
});
