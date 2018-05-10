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
import { Navigation } from "react-native-navigation";

//Interface
interface IUserAvatarProps {
    children?: any;
    character?: string;
    menuPress?: any;
    viewStyleProps?: ViewStyle;
    imageStyleProps?: ImageStyle;
}

const slopAmount = 20;

// create a component
const _MenuButton = (props: IUserAvatarProps) => {
    const chooseAvatar = () => {
        console.log("USer avatar image props: ", props.character);
        switch (props.character) {
            case "girlCurlyBrownHair":
                return require("../../images/avatars/GirlCurly.png");
            case "boyShortBrownHair":
                return require("../../images/avatars/BoyShortBrownHair.png");
            case "boyMessyBrownHair":
                return require("../../images/avatars/BoyMessyBrownHair.png");
            case "girlLongBlondeHair":
                return require("../../images/avatars/GirlBlonde.png");
            default:
                return require("../../images/avatars/GirlCurly.png");
        }
    };
    return (
        <TouchableOpacity
            style={[styles.container, props.viewStyleProps]}
            onPress={props.menuPress}
            hitSlop={{
                top: slopAmount,
                left: slopAmount,
                bottom: slopAmount,
                right: slopAmount
            }}
        >
            <Image
                source={chooseAvatar()}
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
