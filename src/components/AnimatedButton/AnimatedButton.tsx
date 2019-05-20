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
import Sound from "react-native-sound";

import { connect } from "react-redux";
import { gameSounds } from "../../Audio"
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
    index: number // * This currently determines if button has color.
    incorrectAnswersGiven: number[]
}

interface IButtonState {
    color: string;
}

Sound.setCategory("Playback", false)

// const correctSound = new Sound("correct_1.m4a", Sound.MAIN_BUNDLE, err => {
//     if (err) {
//         console.error("Failed to load the sound: ", err)
//         return
//     }
// })

const correctSound = gameSounds.cerebrin

const incorrectSound = new Sound("incorrect_1.m4a", Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.error("Failed to load the sound: ", err)
        return
    }
})

const buttonColor: string[] = [
    "#58bafb",
    "#58bafb",
    "#58bafb",
    "#D32F2F"
]


// create a component
export class _Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props) {
        super(props);

        this.state = { color: appStyles.colors.blue };
    }

    // TODO: This does way too much. All this should be provided by the game container
    _onPress = () => {
        if (this.props.correct) {
            this.setState(
                {
                    color: appStyles.colors.green
                },
                () => this.props.onPress()
            );
            correctSound.play()
        } else {
            this.setState(
                {
                    color: appStyles.colors.red
                },
                () =>
                    setTimeout(
                        () => this.setState({ color: appStyles.colors.blue }, () => this.props.onPress()),
                        1000
                    )
            );
            incorrectSound.play()
        }
    };

    // TODO: This needs to be cleaned up
    // * Make this draw from state again so that the _onPress function ^ can do most of the heavy lifting
    _buttonColor = () => {
        const {
            revealed,
            index,
            correct,
            incorrectAnswersGiven = [-1] } = this.props
        console.log("Incorrect answers from button: ", incorrectAnswersGiven)
        if (!revealed) {
            if (incorrectAnswersGiven.indexOf(index) !== -1) {
                return buttonColor[3]
            } else {

                return buttonColor[0]; // TODO: This needs to be stripped out
            }
        } else if (correct) {
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
            { backgroundColor: this._buttonColor() },
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
        height: 55,
        // ...appStyles.shadow,
        // borderColor: "#776c79",
        // borderStyle: "solid",
        // borderWidth: 2,
        borderRadius: 25,
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
