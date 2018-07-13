//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { appStyles } from '../../styles/styles';
import { Rocket } from "./Rocket"
import { RocketButton } from "./RocketButton"
import { ImageFlipper } from "../ImageFlipper/ImageFlipper"
//Interfaces
interface IRocketActivityScreenProps {
    navigator?: any;
    dispatch?: any;
}

interface IRocketActivityScreenState {
    startAnimation: boolean
}

// create a component

const rocketAnimationFrames: number[] = [
    require("../../images/laia/rocket/rocket-neutral.png"),
    require("../../images/laia/rocket/rocket-frame-1.png"),
    require("../../images/laia/rocket/rocket-frame-2.png"),
    require("../../images/laia/rocket/smoke.png"),
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

        this.state = { startAnimation: false }
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
                        <RocketButton onPress={() => this.setState({ startAnimation: !this.state.startAnimation })} text="Start Animation" color="#a05cb6" />
                        <RocketButton onPress={() => { }} text="Button text" color="#b3ea87" />
                        <RocketButton onPress={() => { }} text="Button text" color="#f5a3bc" />
                    </View>
                </View>
                <View style={styles.blueArea}>
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blueArea: {
        flex: 1,
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: "#e4f5f9"
    },
    buttonContainer: {
        flex: 1,
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: "column",
        paddingHorizontal: 15
    },
    rocketArea: {
        flex: 1,
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
