//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

//Interfaces
interface ILoginButtonProps {
    children?: any;
    show: boolean;
    onPress: any
}

interface ILoginButtonState {
    show: boolean
}

// create a component

export class LoginButton extends React.PureComponent<ILoginButtonProps, ILoginButtonState> {

    private bounceValue = new Animated.Value(0)

    constructor(props) {
        super(props)
        this.state = { show: false }
        this._bounceIn = this._bounceIn.bind(this)

    }

    _bounceIn() {
        this.bounceValue.setValue(0)
        Animated.timing(
            this.bounceValue,
            {
                toValue: 1,
                duration: 150,
                easing: Easing.ease
            }
        ).start()
    }


    componentWillReceiveProps(nextProps: ILoginButtonProps) {
        if (nextProps.show && !this.state.show) {
            this.setState({ show: true }, () => this._bounceIn())
        }
    }





    render() {

        const bounce = this.bounceValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
        return (
            <Animated.View
                style={[styles.container, { transform: [{ scale: bounce }] }]}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.onPress}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "80%",
    },
    button: {
        flex: 1,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        borderRadius: 10,
        backgroundColor: "#339900",
        shadowColor: "#333",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.6
    },
    buttonText: {
        color: "white",
        fontSize: 16
    }
});
