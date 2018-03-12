//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GameContainerView } from "../../shared/GameContainerView"
import { ParrotImage } from "./parrotGameComponents/ParrotImage"

//Interfaces
interface ILaiaGameContainerProps {

}

interface ILaiaGameContainerState {

}

// create a component

export class LaiaGameContainer extends React.Component<ILaiaGameContainerProps, ILaiaGameContainerState> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ParrotImage color={false} />
                <View style={styles.buttonContainer} >
                    <View style={styles.button} />
                    <View style={styles.button} />
                    <View style={styles.button} />
                    <View style={styles.button} />
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: "palevioletred",
        flex: 1,
        padding: 20,
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        height: 40,
        width: "100%",
        backgroundColor: "papayawhip"
    }
});
