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
import { CharacterSelect } from "./screens/characterSelect/CharacterSelect";
import { SkillRecap } from "./screens/skillRecap/SkillRecap";
import { Menu } from "./screens/menu/Menu";
import { Provider } from "react-redux";
import { store, IReducers } from "./redux/store";

// Duo Prototype section

import { HomeScreen } from "./screens/gameScreens/GameContainer"
import { AnimationTest } from "./screens/AnimationTest"

// Screen section

import { registerScreens } from "./router/registerScreens"


registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: "LoginScreen",

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
