import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { makeUserAvatars } from "./components/makeUserAvatars"
import { CharacterSelectTitle } from "./components/CharacterSelectTitle"

export interface ICharacterSelectProps {
    navigator?: any;
    dispatch?: any
}
const dimWidth = Dimensions.get("window").width;
const imageWidth = dimWidth * 0.4;
const imageRadius = imageWidth * 0.5;

const NameInput = (props: any) => {
    return {

    }
}


class _CharacterSelect extends React.Component<ICharacterSelectProps, any> {

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


        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <CharacterSelectTitle />
                    {makeUserAvatars()}
                </View>
                <KeyboardAvoidingView contentContainerStyle={styles.avoidingView} behavior="position">
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={{ color: "white", textAlign: "center" }}
                            selectionColor="white"
                            placeholder="Nombre"
                            placeholderTextColor="white"
                        />
                    </View>
                    <TouchableOpacity style={styles.confirmButtonContainer}
                        onPress={() => this.props.navigator.dismissModal()}
                    >
                        <Text style={styles.confirmButtonText}>Lista?</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
        );
    }
};

export const CharacterSelect = connect()(_CharacterSelect)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: "#daf6fa",
        justifyContent: "space-between",
    },
    avoidingView: {
        backgroundColor: "#daf6fa",

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
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
    },
    confirmButtonContainer: {
        height: 50,
        marginVertical: 15,
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#339900",
        borderRadius: 10,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.6
    },
    confirmButtonText: {
        color: "white",
        fontSize: 20
    }
});
