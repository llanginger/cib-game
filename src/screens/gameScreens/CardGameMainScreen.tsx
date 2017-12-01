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

// Text game section

import { WordGameContainer } from "./wordGame/WordGameContainer"

interface ICardGameMainScreenProps {
    navigator?: any;
    gameType: "word" | "card"
}

class _DuoMainScreen extends Component<ICardGameMainScreenProps, any> {

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
                <ScoreContainer containerProps={{ alignSelf: "flex-end" }} />
                {this._showGameType()}
            </View>
        )
    }
}

const mapStateToProps = (state: IReducers) => {
    return {
        gameType: state.gameTypeReducer.gameType
    }
}

export const DuoMainScreen = connect(mapStateToProps)(_DuoMainScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#daf6fa"
    },
    subContainer: {
        flexDirection: "row",
        marginVertical: 5
    }
})