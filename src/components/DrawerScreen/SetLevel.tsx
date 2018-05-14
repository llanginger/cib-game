//import liraries
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { screenObjects } from "../../navigation/screenObjects";
import { appStyles } from "../../styles/styles";

//Interfaces
interface ISetLevelProps {
    navigator?: any;
    dispatch: any;
}

interface ISetLevelState {}

// create a component

export class _SetLevel extends React.Component<ISetLevelProps, ISetLevelState> {
    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
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
                console.log("Dismiss modal");
                this.props.navigator.dismissModal();
            }
        }
    }

    createButtons: () => any = () => {
        const levels = [
            "Tutorial",
            "6 Emotions Basic",
            "6 Emotions Advanced",
            "Robot Game",
            "Emoji Game",
            "Thumbs Up Game",
            "Common Emotions"
        ];

        return levels.map((level, i) => {
            return (
                <TouchableOpacity
                    key={i}
                    onPress={() => {
                        this.props.dispatch({
                            type: "SET_LEVEL_TO",
                            payload: { nextLevel: i }
                        });
                        this.props.navigator.dismissAllModals();
                    }}
                    style={styles.button}
                >
                    <Text style={styles.text}>{level}</Text>
                </TouchableOpacity>
            );
        });
    };

    render() {
        return <View style={styles.container}>{this.createButtons()}</View>;
    }
}

export const SetLevel = connect()(_SetLevel);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 20,
        width: "80%",
        marginVertical: 10,
        backgroundColor: appStyles.colors.blue
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
});
