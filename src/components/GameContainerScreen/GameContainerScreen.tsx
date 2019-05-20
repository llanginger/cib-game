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

import { WellDone } from "../Popups";
// import { ImageCard } from "../../sharedComponents/ImageCard/ImageCard";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import DeviceInfo from "react-native-device-info";
// Text game section

import { GameContainerTutorial } from "../GameOne/GameOneContainer";
import { GameContainerBasicEmotions } from "../GameTwo/GameTwoContainer";
import { GameContainerComplexEmotions } from "../GameThree/GameThreeContainer";
import { GameContainerRobotGame } from "../GameFour/GameFourContainer";
import { GameContainerEmojiGame } from "../GameFive/GameFiveContainer";
import { GameContainerAdvancedEmotions } from "../GameSeven/GameSevenContainer";
import { ThumbsupGameContainer } from "../ThumbsupGame/ThumbsupGameContainer";
import { FruitActivity } from "../FruitActivity/FruitActivity";

import { screenObjects } from "../../navigation/screenObjects";
import { Ready } from "../Ready/Ready";

import { SandwichBoard } from "../SandwichBoard/SandwichBoard";
import { SandwichBoardPopup } from "../Popup/Popup";

import { BlurView } from "../BlurView/BlurView";

import { BirdAnimation } from "../BirdAnimation/BirdAnimation";

interface ICardGameMainScreenProps {
    navigator?: any;
    gameType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    dispatch?: any;
}

class _GameContainerScreen extends Component<ICardGameMainScreenProps, any> {
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
        this.props.navigator.resetTo({
            screen: screenObjects.MENU_SCREEN.screen
        });
    }

    _getGameContainer() {
        console.log("Get game container, ", this.props.gameType);
        const { gameType } = this.props;

        if (gameType === 0) {
            return <GameContainerTutorial navigator={this.props.navigator} />;
        } else if (gameType === 1) {
            return (
                <GameContainerBasicEmotions navigator={this.props.navigator} />
            );
        } else if (gameType === 2) {
            return <FruitActivity navigator={this.props.navigator} />;
        } else if (gameType === 3) {
            return (
                <GameContainerComplexEmotions
                    navigator={this.props.navigator}
                />
            );
        } else if (gameType === 4) {
            return <GameContainerRobotGame navigator={this.props.navigator} />;
        } else if (gameType === 5) {
            return <GameContainerEmojiGame navigator={this.props.navigator} />;
        } else if (gameType === 6) {
            return <ThumbsupGameContainer navigator={this.props.navigator} />;
        } else if (gameType === 7) {
            return (
                <GameContainerAdvancedEmotions
                    navigator={this.props.navigator}
                />
            );
        } else {
            return <GameContainerTutorial navigator={this.props.navigator} />;
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
                {this._getGameContainer()}
                {/* <WellDone onPress={() => { }} /> */}
            </View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        gameType: state.gameLevelReducer.gameLevelType
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
