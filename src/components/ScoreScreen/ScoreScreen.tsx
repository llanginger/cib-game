//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { StarBoard } from "../StarBoard/StarBoard";
import { StaticButton } from "../StaticButton/StaticButton";
import { ScoreScreenTitle } from "./ScoreScreenTitle";
import { getNextLevelType } from "../../redux/actions/index";
import Sound from "react-native-sound";

//Interfaces
interface ILaiaScoreScreenProps {
    navigator: any;
    currentLevelType: 0 | 1 | 2 | 3 | 4 | 5;
    getNextLevelType: any;
}

interface ILaiaScoreScreenState {}

// create a component

Sound.setCategory("Playback", false);

const ding = new Sound("bell.mp3", Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log("Failed to load the sound", err);
        return;
    }
});

export class _ScoreScreen extends React.Component<
    ILaiaScoreScreenProps,
    ILaiaScoreScreenState
> {
    static navigatorStyle = {
        navBarTextColor: "red",
        navBarBackgroundColor: "transparent",
        navBarHidden: true,
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
        this._onPress = this._onPress.bind(this);
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

    _onPress() {
        const { currentLevelType, getNextLevelType, navigator } = this.props;
        ding.play();
        const nextLevel = currentLevelType < 5 ? 1 + currentLevelType : 0;
        getNextLevelType({ nextLevel });
        setTimeout(() => navigator.dismissAllModals(), 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScoreScreenTitle text="Great Job!" />
                <StarBoard />
                <StaticButton text="Continue" onPress={this._onPress} />
            </View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        currentLevelType: state.gameLevelTypeReducer.gameLevelType
    };
};

const mapDispatchToProps = {
    getNextLevelType: getNextLevelType
};

export const ScoreScreen = connect(mapStateToProps, mapDispatchToProps)(
    _ScoreScreen
);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 60
    }
});
