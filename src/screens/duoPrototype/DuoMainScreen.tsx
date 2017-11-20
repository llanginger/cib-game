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

import { DuoCard } from "./duoPrototypeComponents/DuoCard"
import { DuoCardContainer } from "./duoPrototypeComponents/DuoCardContainer"
import { PressBounce } from "../../components/PressBounce"

// Text game section

import { DuoTextGameContainer } from "./duoPrototypeComponents/textGameLevel/DuoTextGameContainer"

export class DuoMainScreen extends Component<any, any> {

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


    render() {
        return (
            // <DuoCardContainer />
            <DuoTextGameContainer />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    subContainer: {
        flexDirection: "row",
        marginVertical: 5
    }
})