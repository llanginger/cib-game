//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GameContainerView } from "../../shared/GameContainerView"
import { ParrotImage } from "./parrotGameComponents/ParrotImage"
import { ParrotButton } from "./parrotGameComponents/ParrotButton"
import { connect } from "react-redux"

//Interfaces
interface ILaiaGameContainerProps {
    dispatch?: any
}

interface ILaiaGameContainerState {
    revealAnswers: boolean
}

// create a component

export class
    LaiaGameContainer extends React.Component<ILaiaGameContainerProps, ILaiaGameContainerState> {

    constructor(props) {
        super(props)

        this.state = { revealAnswers: false }
        this._buttonOnPress = this._buttonOnPress.bind(this)

    }

    _buttonOnPress(callBack) {
        this.setState({ revealAnswers: true }, () => {
            setTimeout(() => this.setState({ revealAnswers: false }), 2000)
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <ParrotImage color={this.state.revealAnswers} />
                <View style={styles.buttonContainer} >
                    <ParrotButton
                        text="Joyful"
                        revealed={this.state.revealAnswers}
                        correct={false}
                        onPress={this._buttonOnPress}
                        animated={true}
                    />
                    <ParrotButton
                        text="Frustrated"
                        revealed={this.state.revealAnswers}
                        correct={false}
                        onPress={this._buttonOnPress}
                        animated={true}
                    />
                    <ParrotButton
                        text="Serene"
                        revealed={this.state.revealAnswers}
                        correct={false}
                        onPress={this._buttonOnPress}
                        animated={true}
                    />
                    <ParrotButton
                        text="Terrified"
                        revealed={this.state.revealAnswers}
                        correct={true}
                        onPress={this._buttonOnPress}
                        animated={true}
                    />
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
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9"
    },
    button: {
        height: 50,
        width: "100%",
        backgroundColor: "papayawhip",
        borderRadius: 10,
        borderColor: "#333",
        borderWidth: 3,
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8

    }
});
