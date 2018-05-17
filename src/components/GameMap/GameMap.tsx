//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { screenObjects } from "../../navigation/screenObjects";

//Interfaces
interface IGameMapProps {
    navigator?: any;
}

interface IGameMapState {}

// create a component

export class GameMap extends React.Component<IGameMapProps, IGameMapState> {
    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

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

    _menuPress = () => {
        console.log("Something");
        // this.props.navigator.toggleDrawer({
        //     side: "left", // the side of the drawer since you can have two, 'left' / 'right'
        //     animated: true // does the toggle have transition animation or does it happen immediately (optional)
        // });
        setTimeout(
            () =>
                this.props.navigator.resetTo({
                    screen: "MenuScreen",
                    animated: true,
                    animationType: "fade"
                }),
            200
        );
    };

    _start = () => {
        setTimeout(
            () =>
                this.props.navigator.push({
                    screen: "GameContainerScreen",
                    animated: true
                }),
            300
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require("../../images/laia/game-map/map-no-star.png")}
                    resizeMode="cover"
                />
                <TouchableOpacity onPressOut={this._start}>
                    <Image
                        source={require("../../images/laia/game-map/star.png")}
                        resizeMode="contain"
                        style={styles.star}
                    />
                </TouchableOpacity>
                <ScoreContainer
                    menuPress={this._menuPress}
                    containerProps={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        marginTop: 10
                    }}
                />
            </View>
        );
    }
}

const starDims = 80;
// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        height: "100%",
        width: "102%",
        marginLeft: "-1%"
    },
    star: {
        position: "absolute",
        height: starDims,
        width: starDims,
        bottom: 30
    }
});
