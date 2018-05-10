import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import * as _ from "lodash";

import { CharacterSelectAvatar } from "./CharacterSelectAvatar";

interface IUserAvatarProps {
    imageStyle: any;
    touchableStyle: any;
}

interface IAvatarImagePaths {
    name: string;
    url: number;
}
const imagePaths: IAvatarImagePaths[] = [
    {
        name: "girlCurlyBrownHair",
        url: require("../../images/avatars/GirlCurly.png")
    },
    {
        name: "boyShortBrownHair",
        url: require("../../images/avatars/BoyShortBrownHair.png")
    },
    {
        name: "boyMessyBrownHair",
        url: require("../../images/avatars/BoyMessyBrownHair.png")
    },
    {
        name: "girlLongBlondeHair",
        url: require("../../images/avatars/GirlBlonde.png")
    }
];

const AvatarRow = props => {
    return <View style={styles.avatarRow}>{props.children}</View>;
};

export const makeUserAvatars = (selectedCharacterIndex: number) => {
    const avatars = imagePaths.map((image, i) => {
        return (
            <CharacterSelectAvatar
                url={image.url}
                imageName={image.name}
                key={i}
                index={i}
                selectedCharacterIndex={selectedCharacterIndex}
            />
        );
    });

    console.log("Avatars: ", avatars);

    return _.chunk(avatars, 2).map((row, i) => {
        return <AvatarRow key={i}>{row}</AvatarRow>;
    });
};

const styles = StyleSheet.create({
    avatarRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15
    }
});
