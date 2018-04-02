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
import { GameFourContainer } from "../GameFour/GameFourContainer";

import { SandwichBoard } from "../SandwichBoard/SandwichBoard";
import { Popup } from "../Popup/Popup";

interface ICardGameMainScreenProps {
    navigator?: any;
    gameType: "word" | "card";
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

    componentWillMount() {
        // this.props.dispatch({type: "SET_DEVICE_TYPE", payload: { deviceType: DeviceInfo.getModel() } })
        // TODO: Evaluate this for use in Laia game
        // this.props.dispatch(
        //     initAction({
        //         deviceType: DeviceInfo.getModel(),
        //     })
        // );
        // this.props.navigator.showModal({
        //     screen: "CharacterSelectScreen",
        //     animationType: "none"
        // })
    }

    _menuPress() {
        this.props.navigator.toggleDrawer({
            side: "left", // the side of the drawer since you can have two, 'left' / 'right'
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
    }

    render() {
        console.log("duo main screen props: ", this.props);
        return (
            <View style={styles.container}>
                <ScoreContainer
                    menuPress={this._menuPress}
                    containerProps={{ alignSelf: "flex-end" }}
                />
                {/* {this._showGameType()} */}
                <GameTwoContainer navigator={this.props.navigator} />
                {/* <SandwichBoard /> */}
                <Popup />
            </View>
        );
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        gameType: state.gameTypeReducer.gameType
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
