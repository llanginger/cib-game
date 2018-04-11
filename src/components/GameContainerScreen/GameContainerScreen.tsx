import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

// import { ImageCard } from "../../sharedComponents/ImageCard/ImageCard";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import DeviceInfo from "react-native-device-info";
import { initAction } from "../../redux/actions/index";
// Text game section

import { GameOneContainer } from "../GameOne/GameOneContainer";

import { GameTwoContainer } from "../GameTwo/GameTwoContainer";
import { GameThreeContainer } from "../GameThree/GameThreeContainer";
import { GameFourContainer } from "../GameFour/GameFourContainer";
import { screenObjects } from "../../navigation/screenObjects";
import { Ready } from "../Ready/Ready";

import { SandwichBoard } from "../SandwichBoard/SandwichBoard";
import { Popup } from "../Popup/Popup";

import { BlurView } from "../BlurView/BlurView";

import { BirdAnimation } from "../BirdAnimation/BirdAnimation";

interface ICardGameMainScreenProps {
    navigator?: any;
    gameType: 0 | 1 | 2 | 3 | 4 | 5;
    dispatch?: any;
}

class _GameContainerScreen extends Component<ICardGameMainScreenProps, any> {
    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
        this._menuPress = this._menuPress.bind(this);
        this._getGameContainer = this._getGameContainer.bind(this);
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

    // componentWillMount() {
    //     this.props.dispatch({
    //         type: "SET_DEVICE_TYPE",
    //         payload: { deviceType: DeviceInfo.getModel() }
    //     });
    //     // TODO: Evaluate this for use in Laia game
    //     // this.props.dispatch(
    //     //     initAction({
    //     //         deviceType: DeviceInfo.getModel(),
    //     //     })
    //     // );
    //     this.props.navigator.showModal({
    //         screen: screenObjects.CHARACTER_SELECT_SCREEN.screen,
    //         animationType: "none"
    //     });
    // }

    _menuPress() {
        console.log("Something");
        this.props.navigator.toggleDrawer({
            side: "left", // the side of the drawer since you can have two, 'left' / 'right'
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
    }

    _getGameContainer() {
        console.log("Get game container, ", this.props.gameType);
        const { gameType } = this.props;

        if (gameType === 0) {
            console.log("Game type 0 inside if statement");
            return <GameOneContainer navigator={this.props.navigator} />;
        } else if (gameType === 1) {
            console.log("Game type 1 inside if statement");
            return <GameTwoContainer navigator={this.props.navigator} />;
        } else {
            return <GameOneContainer navigator={this.props.navigator} />;
        }
    }

    render() {
        console.log("duo main screen props: ", this.props);
        return (
            <View style={styles.container}>
                <Ready />
                <ScoreContainer
                    menuPress={this._menuPress}
                    containerProps={{ alignSelf: "flex-start" }}
                />
                {/* {this._getGameContainer()} */}
                <GameThreeContainer navigator={this.props.navigator} />
                {/* <Popup /> */}
                {/* <BirdAnimation /> */}
            </View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        gameType: state.gameLevelTypeReducer.gameLevelType
    };
};

export const GameContainerScreen = connect(mapStateToProps)(
    _GameContainerScreen
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});
