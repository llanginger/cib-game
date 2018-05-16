//import liraries
import * as React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ViewStyle,
    ImageStyle
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";

//Interface
interface IUserAvatarProps {
    character?: string;
    onPress?: any;
    viewStyleProps?: ViewStyle;
    imageStyleProps?: ImageStyle;
}

const slopAmount = 20;

// create a component
const _MenuButton = (props: IUserAvatarProps) => {
    return (
        <TouchableOpacity
            style={[styles.container, props.viewStyleProps]}
            onPress={props.onPress}
            hitSlop={{
                top: slopAmount,
                left: slopAmount,
                bottom: slopAmount,
                right: slopAmount
            }}
        >
            <Image
                source={require("../../images/laia/icons/menu-icon.png")}
                resizeMode="contain"
                style={[styles.image, props.imageStyleProps]}
            />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 40
    },
    image: {
        width: 40,
        height: 40
    }
});

const mapStateToProps = (state: IReducers) => {
    return {
        character: state.userReducer.currentProfilePicture
    };
};

// TODO: Fix typing
export const MenuButton = connect<{ character?: string }, any, any>(
    mapStateToProps
)(_MenuButton);
