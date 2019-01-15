//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, ViewStyle } from 'react-native';
import { appStyles } from '../../styles/styles';
import { RocketButton } from "./RocketButton"
import { ImageFlipper } from "../ImageFlipper/ImageFlipper"
//Interfaces
interface IRocketActivityScreenProps {
    navigator?: any;
    dispatch?: any;
}

interface IBlueAreaButton {
    text: string, color: string
}

interface IGameAreaButton {
    selected: boolean
    empty: boolean
    containerStyle: ViewStyle
    onPress: any
    text: string
    color: string
}
interface IRocketActivityScreenState {
    startAnimation: boolean;
    blueAreaButtons: IBlueAreaButton[]
    gameAreaButtons: IGameAreaButton[]
    currentSelectedButton: number
}
// create a component

const rocketAnimationFrames: number[] = [
    require("../../images/laia/rocket/rocket-neutral.png"),
    require("../../images/laia/rocket/rocket-frame-1.png"),
    require("../../images/laia/rocket/rocket-frame-2.png"),
    require("../../images/laia/rocket/rocket-frame-1.png"),
    require("../../images/laia/rocket/rocket-frame-2.png"),
    require("../../images/laia/rocket/rocket-frame-1.png"),
    require("../../images/laia/rocket/rocket-frame-2.png"),
    require("../../images/laia/rocket/rocket-frame-1.png"),
    require("../../images/laia/rocket/rocket-frame-2.png"),
    require("../../images/laia/rocket/smoke.png"),
]

const blueAreaButtons: IBlueAreaButton[] = [
    {
        text: "Sad",
        color: "#deafed"
    },
    {
        text: "Cheerful",
        color: "#b3ea87"
    },
    {
        text: "Worried",
        color: "#f5a3bc"
    },
    {
        text: "Joy",
        color: "#f5ec89"
    },
    {
        text: "Scared",
        color: "#fdac76"
    },
]

export class RocketActivityScreen extends React.Component<IRocketActivityScreenProps, IRocketActivityScreenState> {

    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props)

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );

        this.state = {
            startAnimation: false,
            blueAreaButtons,
            currentSelectedButton: 0,
            gameAreaButtons: [
                {
                    containerStyle: styles.gameAreaButton,
                    selected: false,
                    empty: true,
                    onPress: () => { },
                    text: "?",
                    color: "#aad5f7"
                },
                {
                    containerStyle: styles.gameAreaButton,
                    selected: false,
                    empty: true,
                    onPress: () => { },
                    text: "?",
                    color: "#aad5f7"
                },
                {
                    containerStyle: styles.gameAreaButton,
                    selected: false,
                    empty: true,
                    onPress: () => { },
                    text: "?",
                    color: "#aad5f7"
                },
            ]
        }
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

    _makeBlueAreaButtons = () => {
        return this.state.blueAreaButtons.map((button, i) => {
            return <RocketButton
                key={i}
                containerStyle={i === 2 ? styles.blueAreaButtonFull : styles.blueAreaButton}
                onPress={() => this._onBlueAreaButtonPress(button)}
                text={button.text}
                color={button.color}
            />
        })
    }

    _onBlueAreaButtonPress = (pressedButton: IBlueAreaButton) => {
        const { currentSelectedButton, gameAreaButtons } = this.state
        this.setState({
            gameAreaButtons: gameAreaButtons.map((button, i) => {
                return i === currentSelectedButton ? {
                    ...button,
                    selected: false,
                    empty: false,
                    text: pressedButton.text,
                } : button
            }),
            currentSelectedButton: this.state.currentSelectedButton + 1
        }, () => {
            if (this.state.currentSelectedButton === 3) {
                this.setState({ startAnimation: true })
            }
        })
    }

    _blueArea = () => {
        return (
            <View style={styles.blueArea}>
                {this._makeBlueAreaButtons()}
            </View>
        )
    }

    _makeRocketButtons = () => {
        return this.state.gameAreaButtons.map((button, i) => {
            return (
                <RocketButton
                    key={i}
                    selected={button.selected}
                    empty={button.empty}
                    containerStyle={button.containerStyle}
                    onPress={button.onPress}
                    text={button.text}
                    color={button.color}
                />
            )
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gameArea}>
                    <View style={styles.rocketArea}>
                        <ImageFlipper
                            source={rocketAnimationFrames}
                            imageStyle={styles.rocket}
                            startAnimation={this.state.startAnimation}
                            loop={false}
                            returnToStart={false}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        {this._makeRocketButtons()}
                    </View>
                </View>
                {this._blueArea()}

            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    gameAreaButton: {
        width: "80%",
        marginVertical: 10

    },
    blueAreaButton: {
        width: "33%"
    },
    blueAreaButtonFull: {
        width: "33%",
        marginHorizontal: "25%"
    },
    container: {
        flex: 1
    },
    blueArea: {
        flex: 1,
        backgroundColor: "#e4f5f9",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 10,
        paddingTop: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingBottom: 40
    },
    rocketArea: {
        flex: 1,
        paddingBottom: 40
        // borderColor: "red",
        // borderWidth: 1
    },
    rocket: {
        width: "100%",
        height: "55%"
    },
    button: {
        position: "absolute",
        bottom: 20,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appStyles.colors.blue
    },
    hintButton: {
        position: "absolute",
        bottom: 20,
        height: 80,
        width: 80,
        left: 20,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: appStyles.colors.blue
    },
    buttonText: {
        color: "white",
        fontSize: 24,
    },
    gameArea: {
        height: 435,
        width: "100%",
        // justifyContent: "center",
        flexDirection: "row",
        alignItems: "flex-end"
    },
});
