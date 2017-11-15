/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { ChatBot } from "./screens/ChatBot";
import { CharacterSelect } from "./screens/CharacterSelect";
import { SkillRecap } from "./screens/SkillRecap";
import { Menu } from "./screens/Menu";
import { Provider } from "react-redux";
import { store, IReducers } from "./redux/store";

// Duo Prototype section

import { DuoMainScreen } from "./screens/duoPrototype/DuoMainScreen"
import { AnimationTest } from "./screens/AnimationTest"

// Screen section

const registerScreens = () => {
    Navigation.registerComponent("AnimationTest", () => AnimationTest, store, Provider);
    Navigation.registerComponent("MainScreen", () => ChatBot, store, Provider);
    Navigation.registerComponent("DuoMainScreen", () => DuoMainScreen, store, Provider);
    Navigation.registerComponent("Menu", () => Menu, store, Provider);
    Navigation.registerComponent("SkillRecap", () => SkillRecap, store, Provider);
    Navigation.registerComponent(
        "CharacterSelect",
        () => CharacterSelect,
        store,
        Provider
    );
};

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: "DuoMainScreen",
        navigatorStyle: {
            navBarTextColor: "red",
            drawUnderNavBar: true,
            navBarTranslucent: true,
            navBarTransparent: true
        },
        navigatorButtons: {
            leftButtons: [
                {
                    title: "menu",
                    id: "menu",
                    buttonColor: "orangered"
                }
            ]
        }
    },
    drawer: {
        left: {
            screen: "Menu"
        },
        style: {
            drawerShadow: true,
            contentOverlayColor: "rgba(0,0,0,0.25)",
            leftDrawerWidth: 70
        }
    }
});
