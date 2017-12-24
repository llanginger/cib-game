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
import { ChatBotGame } from "./screens/gameScreens/chatBotGame/ChatBot";
import { CharacterSelect } from "./screens/characterSelect/CharacterSelect";
import { SkillRecap } from "./screens/skillRecap/SkillRecap";
import { Menu } from "./screens/menu/Menu";
import { Provider } from "react-redux";
import { store, IReducers } from "./redux/store";

// Duo Prototype section

import { HomeScreen } from "./screens/gameScreens/GameContainer"
import { AnimationTest } from "./screens/AnimationTest"

// Screen section

const registerScreens = () => {
    Navigation.registerComponent("ChatBotScreen", () => ChatBotGame, store, Provider);
    Navigation.registerComponent("HomeScreen", () => HomeScreen, store, Provider);
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
        screen: "HomeScreen",
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
