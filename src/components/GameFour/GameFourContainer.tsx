//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { Robot } from "../Robot/Robot";
import { RobotFaces } from "../Robot/RobotFaces";
import { SampleAnimation } from "./SampleAnimation";

//Interfaces
interface IRobotGameContainerProps {
    dispatch?: any;
    navigator: any;
}

interface IRobotGameContainerState {}

const initState: IRobotGameContainerState = {};
export class GameFourContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <SampleAnimation /> */}
                <Robot />
                <RobotFaces />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
