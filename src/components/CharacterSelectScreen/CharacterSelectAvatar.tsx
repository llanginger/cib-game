import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import {
    setProfilePicture,
    ISetProfilePicturePayload
} from "../../redux/actions/index";

// TODO: Get most of this from connect:
interface IUserAvatarProps {
    index: number;
    selectedCharacterIndex: number;
    imageStyle?: any;
    touchableStyle?: any;
    url: number;
    imageName: string;
    setProfilePicture: (payload: ISetProfilePicturePayload) => null;
}

const dimWidth = Dimensions.get("window").width;
const imageWidth = dimWidth * 0.4;
const imageRadius = imageWidth * 0.5;

const _CharacterSelectAvatar = (props: IUserAvatarProps) => {
    const {
        imageName,
        selectedCharacterIndex,
        index,
        url,
        setProfilePicture
    } = props;

    const selected = index === selectedCharacterIndex ? true : false;

    const profileUpdateObject: ISetProfilePicturePayload = {
        profilePicture: imageName,
        selectedCharacterIndex: index,
        profilePictureUrl: url
    };

    return (
        <TouchableOpacity
            style={
                selected
                    ? [styles.characterContainer, styles.selectedStyles]
                    : styles.characterContainer
            }
            onPress={() => {
                setProfilePicture(profileUpdateObject);
            }}
        >
            <Image
                source={url}
                style={styles.characterImage}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = {
    setProfilePicture
};

export const CharacterSelectAvatar = connect(
    mapStateToProps,
    mapDispatchToProps
)(_CharacterSelectAvatar);

const styles = StyleSheet.create({
    characterContainer: {
        backgroundColor: "white",
        borderRadius: imageRadius,
        width: imageWidth,
        height: imageWidth,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowColor: "#555"
    },
    selectedStyles: {
        borderWidth: 5,
        borderColor: "white"
    },
    characterImage: {
        flex: 1,
        borderRadius: imageRadius,
        width: undefined,
        height: undefined
    }
});
