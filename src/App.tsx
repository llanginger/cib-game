/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { CharacterSelectScreen } from "./components/CharacterSelectScreen/CharacterSelectScreen";
// import { SkillRecapScreen } from "./components/SkillRecapScreen/SkillRecapScreen";
// import { DrawerScreen } from "./components/DrawerScreen/DrawerScreen";
import { Provider } from "react-redux";
import { store, IReducers } from "./redux/store";

import { screenObjects } from "./navigation/screenObjects";

// Duo Prototype section

// import { GameContainerScreen } from "./components/GameContainerScreen/GameContainerScreen";
// import { AnimationTest } from "./components/AnimationTest";

// Screen section

import { registerScreens } from "./navigation/registerScreens";

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: "FruitActivity"
    },
    drawer: {
        disableOpenGesture: true,
        left: {
            screen: screenObjects.DRAWER_SCREEN.screen
        },
        style: {
            drawerShadow: true,
            contentOverlayColor: "rgba(0,0,0,0.25)",
            leftDrawerWidth: 70
        }
    }
});
