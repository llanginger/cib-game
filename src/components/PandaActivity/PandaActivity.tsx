import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GameImage } from "../GameImage/GameImage";
import { connect } from "react-redux";
import { screenObjects } from "../../navigation/screenObjects";
import { IReducers } from "../../redux/store";
import { appStyles } from "../../styles/styles";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { Panda } from "./Panda";

import { PandaButtons } from "./PandaButtons";
//Interfaces
interface IPandaActivityProps {
    navigator?: any;
    dispatch?: any;
}

interface IPandaActivityState {
    pandaImages: number[];
    currentPanda: number;
}

// create a component

const pandaImages = [
    require("../../images/laia/panda/panda-1.png"),
    require("../../images/laia/panda/panda-2.png"),
    require("../../images/laia/panda/panda-3.png"),
    require("../../images/laia/panda/panda-4.png"),
    require("../../images/laia/panda/panda-neutral.png"),
    require("../../images/laia/panda/panda-smile_no-bubble.png")
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
            currentPanda: 0
        };

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
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

    _getPanda: () => number = () => {
        return this.state.pandaImages[this.state.currentPanda];
    };

    _nextPanda: () => void = () => {
        this.setState({
            currentPanda:
                this.state.currentPanda < this.state.pandaImages.length - 1
                    ? this.state.currentPanda + 1
                    : 0
        });
    };

    _menuPress = () => {
        this.props.navigator.resetTo({
            screen: screenObjects.MENU_SCREEN.screen
        });
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
                    source={this._getPanda()}
                    imageStyle={{ width: "100%", height: "100%" }}
                />
                <View style={styles.blueArea}>
                    {/* <TouchableOpacity
                        onPress={() => this.pandaRef._getNextFrame()}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>Breathe</Text>
                    </TouchableOpacity> */}
                    <PandaButtons />
                </View>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>
                        Place your hand on your tummy...
                    </Text>
                </View>
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
