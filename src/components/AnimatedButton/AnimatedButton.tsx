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
import { gamOneSubmitAnswer } from "../../redux/actions/index";
import { appStyles } from "../../styles/styles";

import { connect } from "react-redux";
//Interface
interface IButtonProps {
    text: string;
    correct: boolean;
    reset: boolean;
    animationInType: any;
    animationOutType: any;
    delay?: number;
    revealed: boolean;
    onPress: any;
    preText?: string;
    viewProps?: ViewStyle;
}

// create a component
export const _Button: React.StatelessComponent<IButtonProps> = (
    props: IButtonProps
) => {
    const {
        viewProps = {},
        revealed,
        reset,
        correct,
        animationOutType,
        animationInType,
        text,
        delay = 0,
        onPress
    } = props;

    const buttonColor = () => {
        if (!revealed) {
            return appStyles.colors.blue;
        } else if (correct) {
            return appStyles.colors.green;
        } else {
            return appStyles.colors.grey;
        }
    };

    const getText = () => {
        if (props.preText && !props.revealed) {
            return props.preText;
        } else {
            return text;
        }
    };
    const viewStyles = [
        styles.button,
        { backgroundColor: buttonColor() },
        viewProps
    ];

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={revealed}
            style={styles.container}
        >
            <Animatable.View
                animation={reset ? animationOutType : animationInType}
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
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {};

export const AnimatedButton = connect(mapStateToProps, mapDispatchToProps)(
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
        shadowColor: "rgb(24, 23, 22)",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
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
