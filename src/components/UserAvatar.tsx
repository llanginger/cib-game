//import liraries
import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from "react-redux"
import { IReducers } from "../redux/store"

//Interface
interface IUserAvatarProps {
    children: any;
    character: "boy" | "girl"
}


// create a component
const _UserAvatar: React.StatelessComponent = (props: IUserAvatarProps) => {

    const chooseAvatar = () => {
        switch (props.character) {
            case "boy":
                return require("../images/gameAvatar.png")
            case "girl":
                return require("../images/girlCool.png")
            default:
                return require("../images/girlCool.png")
        }
    }
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={chooseAvatar()} style={styles.image} />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 40,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center',
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

export const UserAvatar = connect(mapStateToProps)(_UserAvatar)