//import liraries
import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ViewStyle, ImageStyle } from 'react-native';
import { connect } from "react-redux"
import { IReducers } from "../redux/store"
import { Navigation } from "react-native-navigation";

//Interface
interface IUserAvatarProps {
    children?: any;
    character?: string
    menuPress?: any
    viewStyleProps?: ViewStyle
    imageStyleProps?: ImageStyle
}

const slopAmount = 20

// create a component
const _UserAvatar = (props: IUserAvatarProps) => {

    const chooseAvatar = () => {
        console.log("USer avatar image props: ", props.character)
        switch (props.character) {
            case "girlCurlyBrownHair":
                return require("../images/GirlCurly.png")
            case "boyShortBrownHair":
                return require("../images/BoyShortBrownHair.png")
            case "boyMessyBrownHair":
                return require("../images/BoyMessyBrownHair.png")
            case "girlLongBlondeHair":
                return require("../images/GirlBlonde.png")
            default:
                return require("../images/GirlCurly.png")
        }
    }
    return (
        <TouchableOpacity
            style={[styles.container, props.viewStyleProps]}
            onPress={props.menuPress}
            hitSlop={{ top: slopAmount, left: slopAmount, bottom: slopAmount, right: slopAmount }}
        >
            <Image source={chooseAvatar()} style={[styles.image, props.imageStyleProps]} />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    image: {
        width: 40,
        height: 40,
    }
});

const mapStateToProps = (state: IReducers) => {
    return {
        character: state.userReducer.currentProfilePicture
    }
}

// TODO: Fix typing
export const UserAvatar = connect<{ character?: string }, any, any>(mapStateToProps)(_UserAvatar)