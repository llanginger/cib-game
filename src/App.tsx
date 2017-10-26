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
import { Menu } from "./screens/Menu";
import { Provider } from "react-redux";
import { store, IReducers } from "./redux/store";

// Screen section

const registerScreens = () => {
    Navigation.registerComponent("MainScreen", () => ChatBot, store, Provider);
    Navigation.registerComponent("Menu", () => Menu, store, Provider);
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
        screen: "CharacterSelect",
        navigatorStyle: {
            navBarTextColor: "red",
            drawUnderNavBar: true,
            navBarTranslucent: true,
            navBarTransparent: true
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
