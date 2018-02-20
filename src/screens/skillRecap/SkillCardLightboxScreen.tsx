import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

const window = Dimensions.get("window")

interface ISkillCardLightboxScreen {
    navigator: any;
    bodyText: string;
    headerText: string;
    skillNumber: number;
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
                <ScrollView contentContainerStyle={styles.textContainer} >
                    <View style={[styles.skillNumberCircle, { borderColor: props.color }]}>
                        <Text>{props.skillNumber}</Text>
                    </View>
                    <Text style={styles.headerText}>
                        {props.headerText}
                    </Text>
                    <CardSeparator color={props.color} />
                    <Text style={styles.bodyText}>
                        {props.bodyText}
                    </Text>
                </ScrollView>
                <TouchableOpacity style={styles.dismissButton} onPress={() => props.navigator.dismissLightBox()}>
                    <Text style={[styles.dismissButtonText, { color: props.color }]}>Dismiss</Text>
                </TouchableOpacity>
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
        width: "100%",
        flex: 1,
        padding: 20
    },
    skillNumberCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        position: "relative",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    textContainer: {
        backgroundColor: "white",
        padding: 20,
        width: "100%"
    },
    headerText: {
        fontSize: 18,
        textAlign: "center"
    },
    bodyText: {
        fontSize: 16
    },
    dismissButton: {
        height: 50,
        marginBottom: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
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
        marginTop: 40,
        width: "100%",
        height: 150,
    }
})