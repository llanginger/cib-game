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

import { ImageCard } from "./components/imageCard/ImageCard"
import { CardGameContainer } from "./cardGame/CardGameContainer"
import { PressBounce } from "../../components/PressBounce"
import { ScoreContainer } from "../../components/score/ScoreContainer"
import DeviceInfo from 'react-native-device-info'
import { initAction } from "../../redux/actions/index"
import { getCardGameLevel } from "../gameScreens/cardGame/components/cardLevels"
import { getTextGameLevel } from "../gameScreens/wordGame/components/wordLevels"
// Text game section

import { WordGameContainer } from "./wordGame/WordGameContainer"

import { Popup } from "./components/popup/Popup"

import { UserAvatar } from "../../components/UserAvatar"

interface ICardGameMainScreenProps {
    navigator?: any;
    gameType: "word" | "card"
    dispatch?: any
}

class _HomeScreen extends Component<ICardGameMainScreenProps, any> {

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
        this._showGameType = this._showGameType.bind(this)
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
        this.props.dispatch(initAction({
            deviceType: DeviceInfo.getModel(),
            textGameLevel: getTextGameLevel([]),
            cardGameLevel: getCardGameLevel([])
        }))
        // this.props.navigator.showModal({
        //     screen: "CharacterSelect",
        //     animationType: "none"
        // })
    }

    _showGameType() {
        switch (this.props.gameType) {
            case "word":
                return <WordGameContainer />
            case "card":
                return <CardGameContainer />
            default: return <CardGameContainer />
        }
    }

    render() {
        console.log("duo main screen props: ", this.props)
        return (
            <View style={styles.container}>
                <UserAvatar />
                <ScoreContainer containerProps={{ alignSelf: "flex-end" }} />
                {this._showGameType()}
                <Popup />
            </View>
        )
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        gameType: state.gameTypeReducer.gameType
    }
}

export const HomeScreen = connect(mapStateToProps)(_HomeScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#daf6fa"
    },
})