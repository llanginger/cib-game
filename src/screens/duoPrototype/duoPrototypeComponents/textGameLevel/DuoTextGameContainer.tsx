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
import { IReducers } from "../../../../redux/store";

import { WordContainer } from "./WordContainer"
import { WordPuzzleContainer } from "./WordPuzzleContainer"

import { DuoCard } from "../DuoCard"

export const DuoTextGameContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
            <DuoCard
                image={require("../../../../images/girlHot.png")}
                id={1}
                correctAnswer={true}
                onPress={() => console.log("Pressed")}
                selected={false}
                containerProps={{ width: "60%", marginVertical: 30 }}
            />
            <WordPuzzleContainer />
            <WordContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#daf6fa"
    },
    text: {
        fontSize: 16,
    }

})