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

const window = Dimensions.get("window")

interface ISkillCardLightboxScreen {
    navigator: any;
    color: string
}
interface ICardSeparatorProps {
    color?: string
}

const CardSeparator = (props: ICardSeparatorProps) => {
    return (
        <View style={{
            borderBottomColor: props.color,
            borderBottomWidth: 0.5,
            marginVertical: 15
        }} />
    )
}


// TODO: Add touchable and Animated elements to entire screen allowing for lightbox to be "pulled" away
export const SkillCardLightboxScreen = (props: ISkillCardLightboxScreen) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../images/dummyBackground.png")}
                resizeMode="cover"
            />
            <View style={[styles.infoContainer, { backgroundColor: props.color }]}>
                <View style={styles.textContainer} >
                    <Text style={styles.text}>
                        The above image is placeholder, we'll use a separate one per "habilidad".
                    </Text>
                    <CardSeparator color={props.color} />
                    <Text style={styles.text}>
                        Here are some words that will become whatever text you want to put in here as a more detailed summary of the particular skill this screen represents. There can be images, lists, even video or audio.
                    </Text>
                    <TouchableOpacity style={styles.dismissButton} onPress={() => props.navigator.dismissLightBox()}>
                        <Text style={[styles.dismissButtonText, { color: props.color }]}>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: window.height + 30,
        width: window.width,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    infoContainer: {
        alignItems: "center",
        width: "100%",
        flex: 1,
        padding: 20
    },
    textContainer: {
        backgroundColor: "white",
        padding: 20
    },
    text: {
        fontSize: 16
    },
    dismissButton: {
        paddingTop: 10,
    },
    dismissButtonText: {
        textAlign: "center",
        fontSize: 20
    },
    imageContainer: {
        justifyContent: "center",
        backgroundColor: "white",
    },
    image: {
        marginTop: 30,
        width: "100%",
        height: 200,
    }
})