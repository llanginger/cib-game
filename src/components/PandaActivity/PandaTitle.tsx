//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { appStyles } from "../../styles/styles";

//Interfaces
interface IPandaTitleProps {
    title: string;
}

interface IPandaTitleState {
    title: string;
    opacityValue: Animated.Value;
}

// create a component

export class PandaTitle extends React.Component<
    IPandaTitleProps,
    IPandaTitleState
> {
    constructor(props) {
        super(props);

        this.state = {
            opacityValue: new Animated.Value(0),
            title: ""
        };
    }

    componentWillMount() {
        this.setState({ title: this.props.title });
    }

    componentWillReceiveProps(nextProps: IPandaTitleProps) {
        if (nextProps.title !== this.state.title) {
            setTimeout(() => {
                this._fadeSwapTitle();
            }, 0);
        }
    }

    _fadeSwapTitle = () => {
        const { opacityValue } = this.state;
        const { title } = this.props;
        opacityValue.setValue(0);
        Animated.timing(opacityValue, {
            toValue: 0.5,
            duration: 200
        }).start(() => {
            this.setState({ title }, () => {
                opacityValue.setValue(0.5);
                Animated.timing(opacityValue, {
                    toValue: 1,
                    duration: 200
                }).start();
            });
        });
    };

    render() {
        const { title } = this.state;
        const opacity = this.state.opacityValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        return (
            <View style={styles.titleTextContainer}>
                <Animated.Text style={[styles.titleText, { opacity }]}>
                    {title}
                </Animated.Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    titleTextContainer: {
        marginTop: 85
    },
    titleText: {
        textAlign: "center",
        color: "#60b8ff",
        fontSize: 24,
        lineHeight: 30,
        fontFamily: appStyles.rockwellFont
    }
});
