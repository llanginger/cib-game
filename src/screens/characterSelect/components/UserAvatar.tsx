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
import { IReducers } from "../../../redux/store";

interface IUserAvatarProps {
    imageStyle?: any;
    touchableStyle?: any;
    url: any;
    imageName: string;
    dispatch?: any
}

const dimWidth = Dimensions.get("window").width;
const imageWidth = dimWidth * 0.4;
const imageRadius = imageWidth * 0.5;


const _UserAvatar = (props: IUserAvatarProps) => {

    return (
        <TouchableOpacity
            style={styles.characterContainer}
            onPress={() => {
                props.dispatch({
                    type: "SET_PROFILE_PICTURE", payload: {
                        profilePicture: props.imageName,
                        profilePictureUrl: props.url,
                    }
                })

            }}
        >
            <Image
                source={props.url}
                style={styles.characterImage}
                resizeMode="cover"
            />
            <Text>{props.imageName}</Text>
        </TouchableOpacity>
    )
}


export const UserAvatar = connect()(_UserAvatar)



const styles = StyleSheet.create({
    characterContainer: {
        backgroundColor: "white",
        borderRadius: imageRadius,
        width: imageWidth,
        height: imageWidth
    },
    characterImage: {
        flex: 1,
        borderRadius: imageRadius,
        width: undefined,
        height: undefined
    }
});
