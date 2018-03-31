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
    Platform,
    PanResponder
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../../../redux/store";
import { CardSeparator } from "./lightBoxComponents/CardSeparator";
import { LightBoxTextSection } from "./lightBoxComponents/LightBoxTextSection";
import { ISkill } from "../logic/skills";

const window = Dimensions.get("window");

interface ISkillCardLightboxScreenProps {
    skill: ISkill;
    navigator: any;
}

interface ISkillCardLightboxScreenState {}

// TODO: Add touchable and Animated elements to entire screen allowing for lightbox to be "pulled" away
export class SkillCardLightboxScreen extends React.Component<
    ISkillCardLightboxScreenProps,
    ISkillCardLightboxScreenState
> {
    render() {
        const { props } = this;
        const { skillNumber, headerText, bodyText, color } = props.skill;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../../../images/dummyBackground.png")}
                    resizeMode="cover"
                />
                <View
                    style={[styles.infoContainer, { backgroundColor: color }]}
                >
                    <ScrollView
                        contentContainerStyle={styles.textScrollContainer}
                    >
                        <LightBoxTextSection
                            skillNumber={skillNumber}
                            color={color}
                            headerText={headerText}
                            bodyText={bodyText}
                        />
                    </ScrollView>
                    <TouchableOpacity
                        style={[
                            styles.dismissButton,
                            { borderTopColor: color, borderTopWidth: 2 }
                        ]}
                        onPress={() => props.navigator.dismissLightBox()}
                    >
                        <Text
                            style={[styles.dismissButtonText, { color: color }]}
                        >
                            Dismiss
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        height: window.height + 30,
        width: window.width,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    infoContainer: {
        width: "100%",
        flex: 1
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
    textScrollContainer: {
        // backgroundColor: "white",
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
        backgroundColor: "white"
    },
    image: {
        marginTop: 40,
        width: "100%",
        height: 150
    }
});
