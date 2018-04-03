//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { StarBoard } from "../StarBoard/StarBoard";
import { StaticButton } from "../StaticButton/StaticButton";
import { ScoreScreenTitle } from "./ScoreScreenTitle";

//Interfaces
interface ILaiaScoreScreenProps {
    navigator: any;
}

interface ILaiaScoreScreenState {}

// create a component

export class ScoreScreen extends React.Component<
    ILaiaScoreScreenProps,
    ILaiaScoreScreenState
> {
    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                this.props.navigator.toggleDrawer({
                    side: "left", // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true // does the toggle have transition animation or does it happen immediately (optional)
                });
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScoreScreenTitle text="Great Job!" />
                <StarBoard />
                <StaticButton text="Continue" />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 60
    }
});