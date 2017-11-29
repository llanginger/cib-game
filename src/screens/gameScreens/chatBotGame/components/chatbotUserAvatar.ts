import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { connect } from "react-redux"
import { IReducers } from "../../../../redux/store";

const imagePaths = [
    {
        name: "boy",
        url: require("../../../../images/gameAvatar.png")
    },
    {
        name: "girl",
        url: require("../../../../images/girlCool.png")
    }
]


export const chatBotUserAvatarObject = (userAvatar: string) => {


    const imagePath = imagePaths.filter(path => {
        return path.url === userAvatar
    })

    return {
        _id: 1,
        avatar: imagePath.length > 0 ? imagePath : require("../../../../images/girlCool.png")
    }


}


