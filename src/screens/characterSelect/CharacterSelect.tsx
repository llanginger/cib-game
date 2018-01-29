import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { makeUserAvatars } from "./components/makeUserAvatars"

export interface ICharacterSelectProps {
    navigator?: any
}
const dimWidth = Dimensions.get("window").width;
const imageWidth = dimWidth * 0.4;
const imageRadius = imageWidth * 0.5;

export class CharacterSelect extends React.Component<ICharacterSelectProps, any> {

    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );
    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                console.log("Dismiss modal")
                this.props.navigator.dismissModal();
            }
        }
    }

    render() {

        const makeCharacterImage = (url: any) => {
            return (
                <Image
                    source={url}
                    style={styles.characterImage}
                    resizeMode="cover"
                />
            )
        }

        const makeCharacterImageRow = (url: [any, any]) => {
            return (
                <View style={styles.characterRow}>
                    <TouchableOpacity style={styles.characterContainer}>
                        <Image
                            source={url[0]}
                            style={styles.characterImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.characterContainer}>
                        <Image
                            source={url[1]}
                            style={styles.characterImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            );
        };

        return (
            <View style={styles.container}>
                <View style={styles.characterRow}>
                    {makeUserAvatars()}
                </View>
                {makeCharacterImageRow([
                    require("../../images/gameAvatar.png"),
                    require("../../images/girlCool.png")
                ])}
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="Character Name"
                        placeholderTextColor="white"
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="Character Age"
                        placeholderTextColor="white"
                    />
                </View>
                <TouchableOpacity style={styles.confirmButtonContainer}
                    onPress={() => this.props.navigator.dismissModal()}
                >
                    <Text style={styles.confirmButtonText}>Confirm Selection</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#daf6fa"
    },
    characterRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15
    },
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
    },
    textInputContainer: {
        height: 50,
        marginVertical: 15,
        width: dimWidth - 40,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.25)"
    },
    confirmButtonContainer: {
        height: 50,
        marginVertical: 15,
        width: dimWidth - 40,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "mediumvioletred"
    },
    confirmButtonText: {
        color: "white"
    }
});
