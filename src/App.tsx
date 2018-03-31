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
import { CharacterSelect } from "./components/screens/CharacterSelect/CharacterSelect";
import { SkillRecapScreen } from "./components/screens/SkillRecapScreen/SkillRecapScreen";
import { DrawerScreen } from "./components/screens/DrawerScreen/DrawerScreen";
import { Provider } from "react-redux";
import { store, IReducers } from "./redux/store";

// Duo Prototype section

import { HomeScreen } from "./components/screens/GameScreen/GameContainerScreen";
import { AnimationTest } from "./components/screens/AnimationTest";

// Screen section

import { registerScreens } from "./navigation/registerScreens";

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: "HomeScreen"
    },
    drawer: {
        left: {
            screen: "DrawerScreen"
        },
        style: {
            drawerShadow: true,
            contentOverlayColor: "rgba(0,0,0,0.25)",
            leftDrawerWidth: 70
        }
    }
});
