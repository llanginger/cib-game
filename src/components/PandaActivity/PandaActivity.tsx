import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { appStyles } from "../../styles/styles";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { Panda } from "./Panda";
import * as Animatable from "react-native-animatable";

import { PandaButtons } from "./PandaButtons";
import { PandaTitle } from "./PandaTitle";

import { PandaMeter } from "./PandaMeter";
//Interfaces
interface IPandaActivityProps {
    navigator?: any;
    dispatch?: any;
}

interface IPandaLevel {
    source: number;
    text: string;
    activeButton: number;
    intensity: 0 | 1 | 2 | 3;
}
interface IPandaActivityState {
    pandaLevels: IPandaLevel[];
    pandaImages: number[];
    currentPanda: number;
    showStartButton: boolean;
    showBubbleButtons: boolean;
    showEndButtons: boolean;
}

// create a component

const pandaLevels: IPandaLevel[] = [
    {
        source: require("../../images/laia/panda/pandas/panda-1.png"),
        text: "Learn to calm down",
        activeButton: 0,
        intensity: 3
    },
    {
        source: require("../../images/laia/panda/pandas/panda-2.png"),
        text: "Place your hand on your tummy...",
        activeButton: 0,
        intensity: 3
    },
    {
        source: require("../../images/laia/panda/pandas/panda-3.png"),
        text: "Slowly breath in...",
        activeButton: 1,
        intensity: 3
    },
    {
        source: require("../../images/laia/panda/pandas/panda-4.png"),
        text: "Slowly breath out...",
        activeButton: 1,
        intensity: 2
    },
    {
        source: require("../../images/laia/panda/pandas/panda-neutral.png"),
        text: "One more time!",
        activeButton: 1,
        intensity: 2
    },
    {
        source: require("../../images/laia/panda/pandas/panda-3.png"),
        text: "Slowly breath in...",
        activeButton: 1,
        intensity: 2
    },
    {
        source: require("../../images/laia/panda/pandas/panda-4.png"),
        text: "Slowly breath out...",
        activeButton: 1,
        intensity: 1
    },
    {
        source: require("../../images/laia/panda/pandas/panda-neutral.png"),
        text: "Much better!!",
        activeButton: 2,
        intensity: 1
    },
    {
        source: require("../../images/laia/panda/pandas/panda-smile_no-bubble.png"),
        text: "I feel better now!",
        activeButton: 3,
        intensity: 0
    }
];
const pandaImages = [
    require("../../images/laia/panda/pandas/panda-1.png"),
    require("../../images/laia/panda/pandas/panda-2.png"),
    require("../../images/laia/panda/pandas/panda-3.png"),
    require("../../images/laia/panda/pandas/panda-4.png"),
    require("../../images/laia/panda/pandas/panda-neutral.png"),
    require("../../images/laia/panda/pandas/panda-smile_no-bubble.png")
];

const pandaThoughts: string[] = [
    "Calm Down with Panda",
    "Place your hand on your tummy",
    "Slowly breathe in"
];

export class PandaActivity extends React.Component<
    IPandaActivityProps,
    IPandaActivityState
> {
    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    public pandaRef;

    constructor(props) {
        super(props);

        this.state = {
            pandaImages,
            pandaLevels,
            currentPanda: 0,
            showStartButton: true,
            showBubbleButtons: false,
            showEndButtons: false
        };

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
        this._onBubbleButtonPress = this._onBubbleButtonPress.bind(this);
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

    _getPandaImage: () => number = () => {
        return this.state.pandaLevels[this.state.currentPanda].source;
    };

    _getPandaText: () => string = () => {
        return this.state.pandaLevels[this.state.currentPanda].text;
    };

    _getPandaIntensity: () => 0 | 1 | 2 | 3 = () => {
        return this.state.pandaLevels[this.state.currentPanda].intensity;
    };

    _nextPanda: () => void = () => {
        const { currentPanda, pandaLevels } = this.state;

        if (currentPanda < pandaLevels.length - 2) {
            console.log("Next panda");
            this.setState({
                currentPanda: currentPanda + 1
            });
        } else {
            console.log("Show end buttons");
            this.setState({
                currentPanda: currentPanda + 1,
                showEndButtons: true
            });
        }
    };

    _menuPress = () => {
        this.props.navigator.resetTo({
            screen: "MenuScreen"
        });
    };

    _swapButtons = () => {
        this.setState({ showStartButton: false }, () => {
            console.log("state after first swapButtons setState: ", this.state);
            setTimeout(
                () =>
                    this.setState({
                        showBubbleButtons: true
                    }),
                1000
            );
        });
    };

    _onBubbleButtonPress() {
        this.pandaRef._getNextFrame(this._nextPanda);
    }

    _chooseButtons = () => {
        const {
            showStartButton,
            showBubbleButtons,
            showEndButtons
        } = this.state;

        if (!showBubbleButtons && !showEndButtons) {
            return (
                <Animatable.View
                    animation={showStartButton ? "" : "fadeOutLeft"}
                    duration={250}
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity onPress={this._swapButtons} style={{}}>
                        <Text style={styles.buttonText}>Begin</Text>
                    </TouchableOpacity>
                </Animatable.View>
            );
        } else if (showBubbleButtons && !showEndButtons) {
            return (
                <Animatable.View animation="fadeInUpBig" duration={250}>
                    <PandaButtons
                        onPress={this._onBubbleButtonPress}
                        activeButton={
                            this.state.pandaLevels[this.state.currentPanda]
                                .activeButton
                        }
                    />
                </Animatable.View>
            );
        } else {
            return (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}
                >
                    <Animatable.View
                        animation="fadeInUpBig"
                        duration={250}
                        style={[styles.buttonContainer, { width: "45%" }]}
                    >
                        <TouchableOpacity
                            onPress={this._swapButtons}
                            style={{}}
                        >
                            <Text style={styles.buttonText}>Again</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        duration={250}
                        style={[styles.buttonContainer, { width: "45%" }]}
                    >
                        <TouchableOpacity
                            onPress={this._swapButtons}
                            style={{}}
                        >
                            <Text style={styles.buttonText}>End</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            );
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScoreContainer
                    hideScore
                    menuPress={this._menuPress}
                    containerProps={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                />
                <Panda
                    ref={e => (this.pandaRef = e)}
                    source={this._getPandaImage()}
                />
                <View style={styles.blueArea}>{this._chooseButtons()}</View>
                <PandaTitle title={this._getPandaText()} />
                {this.state.showBubbleButtons ? (
                    <PandaMeter intensity={this._getPandaIntensity()} />
                ) : null}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "space-between"
    },
    blueArea: {
        height: "30%",
        paddingHorizontal: 60,
        paddingVertical: 20,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9"
    },
    buttonContainer: {
        height: 50,
        width: "100%",
        marginHorizontal: 10,
        backgroundColor: "#60b8ff",
        borderRadius: 10,
        borderColor: "#333",
        borderWidth: 3,
        ...appStyles.shadow
    },
    buttonText: {
        color: "white",
        fontFamily: appStyles.rockwellFont,
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 30,
        textAlign: "center",
        textAlignVertical: "center",
        marginTop: 10,
        backgroundColor: "transparent"
    },
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
