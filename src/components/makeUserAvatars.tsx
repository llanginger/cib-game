import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../redux/store";

import { UserAvatar } from "./UserAvatar"

interface IUserAvatarProps {
    imageStyle: any;
    touchableStyle: any;
    profilePictures?: string[]
}

const imagePaths = [
    {
        name: "boy",
        url: require("../images/gameAvatar.png")
    },
    {
        name: "girl",
        url: require("../images/girlCool.png")
    }
]

export const makeUserAvatars = () => {
    return imagePaths.map((image, i) => {
        return <UserAvatar url={image.url} imageName={image.name} key={i} />
    })
}
