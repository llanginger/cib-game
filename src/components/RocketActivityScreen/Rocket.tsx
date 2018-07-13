//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image, Animated } from "react-native";

//Interfaces
interface IRocketProps {

}

interface IRocketState {

}

// create a component

export class Rocket extends React.Component<IRocketProps, IRocketState> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../images/laia/rocket/rocket-neutral.png")}
                    resizeMode="contain"
                    style={styles.rocket}
                />
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingBottom: 20
    },
    rocket: {
        width: "100%",
        height: "55%"
    }
});
