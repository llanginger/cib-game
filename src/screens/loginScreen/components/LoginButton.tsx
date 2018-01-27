//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

//Interfaces
interface ILoginButtonProps {
    children?: any;
    show: boolean;
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
        this._renderButton = this._renderButton.bind(this)
        this._bounceIn = this._bounceIn.bind(this)

    }

    _bounceIn() {
        this.bounceValue.setValue(0)
        Animated.timing(
            this.bounceValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.ease
            }
        ).start()
    }

    _renderButton() {

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
            <Animated.View style={[styles.container, { transform: [{ scale: bounce }] }]}>
                <Text>LoginButton</Text>
            </Animated.View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "80%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 20
    },
});
