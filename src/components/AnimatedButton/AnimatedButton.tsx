//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle
} from "react-native";
import * as Animatable from "react-native-animatable";
import { appStyles } from "../../styles/styles";

import { connect } from "react-redux";
//Interface
interface IButtonProps {
    text: string;
    correct: boolean;
    startAnimation: boolean;
    animationInType: any;
    animationOutType: any;
    delay?: number;
    revealed: boolean;
    onPress: any;
    preText?: string;
    viewProps?: ViewStyle;
}

interface IButtonState {
    color: string;
}

// create a component
export class _Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props) {
        super(props);

        this.state = { color: appStyles.colors.blue };
    }
    _onPress = () => {
        if (this.props.correct) {
            this.setState(
                {
                    color: appStyles.colors.green
                },
                () => this.props.onPress()
            );
        } else {
            this.setState(
                {
                    color: appStyles.colors.red
                },
                () =>
                    setTimeout(
                        () => this.setState({ color: appStyles.colors.blue }),
                        1000
                    )
            );
        }
    };

    _buttonColor = () => {
        if (!this.props.revealed) {
            return appStyles.colors.blue;
        } else if (this.props.correct) {
            return appStyles.colors.green;
        } else {
            return appStyles.colors.grey;
        }
    };

    render() {
        const {
            viewProps = {},
            revealed,
            startAnimation,
            correct,
            animationOutType,
            animationInType,
            preText,
            text,
            delay = 0
        } = this.props;

        const getText = () => {
            if (preText && !revealed) {
                return preText;
            } else {
                return text;
            }
        };

        const viewStyles = [
            styles.button,
            { backgroundColor: this.state.color },
            viewProps
        ];

        return (
            <TouchableOpacity
                onPress={this._onPress}
                disabled={revealed}
                style={styles.container}
            >
                <Animatable.View
                    animation={
                        startAnimation ? animationOutType : animationInType
                    }
                    duration={250}
                    delay={delay}
                    style={{ width: "80%" }}
                >
                    <View style={viewStyles}>
                        <Text style={styles.text}>{getText()}</Text>
                    </View>
                </Animatable.View>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {};

export const AnimatedButton: any = connect(mapStateToProps, mapDispatchToProps)(
    _Button
);

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "100%",
        height: 45,
        ...appStyles.shadow,
        borderColor: "#776c79",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3a86dc",
        padding: 0
    },
    text: {
        color: "white",
        fontFamily: "Rockwell",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 30,
        textAlignVertical: "center",
        marginTop: 10,
        backgroundColor: "transparent"
    }
});
