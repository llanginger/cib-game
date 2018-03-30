//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameContainerView } from "../../shared/GameContainerView";
import { connect } from "react-redux";
import { Robot } from "./components/Robot";
import { RobotFaces } from "./components/RobotFaces";

//Interfaces
interface IRobotGameContainerProps {
    dispatch?: any;
    navigator: any;
}

interface IRobotGameContainerState {}

const initState: IRobotGameContainerState = {};
export class RobotGameContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            ...initState
        };
    }

    render() {
        return (
            <View style={styles.container}>
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
