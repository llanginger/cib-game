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
import { IReducers } from "../../../redux/store";
import { makeUserAvatars } from "../CharacterSelect/components/makeUserAvatars"
import { SkillCard } from "./components/SkillCard"

import { skills } from "./logic/skills"


const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height




const SkillRecapList = (props: { navigator: any }) => {
    return (
        <FlatList
            data={skills}
            keyExtractor={(item, index) => item.skillNumber}
            renderItem={({ item }) => {
                return (
                    <SkillCard
                        skill={item}
                        navigator={props.navigator}
                    />
                )
            }}
        />
    )
}


export class SkillRecapScreen extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                console.log("Dismiss modal")
                this.props.navigator.dismissModal();
            }
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <SkillRecapList navigator={this.props.navigator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#daf6fa",
    }
})