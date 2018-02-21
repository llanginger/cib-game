import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    Platform,
    PanResponder
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../redux/store";
import { CardSeparator } from "./lightBoxComponents/CardSeparator"
import { LightBoxTextSection } from "./lightBoxComponents/LightBoxTextSection"

const window = Dimensions.get("window")

interface ISkillCardLightboxScreenProps {
    navigator: any;
    bodyText: string;
    headerText: string;
    skillNumber: number;
    color: string
}

interface ISkillCardLightboxScreenState {
    dismissButtonDisabled: boolean
    scrolling: boolean
}



// TODO: Add touchable and Animated elements to entire screen allowing for lightbox to be "pulled" away
export class SkillCardLightboxScreen extends React.Component<ISkillCardLightboxScreenProps, ISkillCardLightboxScreenState> {

    private _panResponder

    constructor(props) {
        super(props)

        this.state = {
            dismissButtonDisabled: false,
            scrolling: false
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {

            }
        })
    }

    render() {
        const { props } = this
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../images/dummyBackground.png")}
                    resizeMode="cover"
                />
                <View style={[styles.infoContainer, { backgroundColor: props.color }]}>
                    <ScrollView contentContainerStyle={styles.textScrollContainer} >
                        <LightBoxTextSection
                            skillCircle
                            skillNumber={props.skillNumber}
                            color={props.color}
                            headerText={props.headerText}
                            bodyText={props.bodyText}
                        />
                    </ScrollView>
                    <TouchableOpacity
                        disabled={this.state.dismissButtonDisabled}
                        style={styles.dismissButton}
                        onPress={() => props.navigator.dismissLightBox()}
                    >
                        <Text style={[styles.dismissButtonText, { color: props.color }]}>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: window.height + 30,
        width: window.width,
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    infoContainer: {
        width: "100%",
        flex: 1,
    },
    skillNumberCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        position: "relative",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    textScrollContainer: {
        backgroundColor: "white",
        padding: 20,
        width: "100%"
    },
    headerText: {
        fontSize: 18,
        textAlign: "center"
    },
    bodyText: {
        fontSize: 16
    },
    dismissButton: {
        height: 50,
        marginBottom: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    dismissButtonText: {
        textAlign: "center",
        fontSize: 20
    },
    imageContainer: {
        justifyContent: "center",
        backgroundColor: "white",
    },
    image: {
        marginTop: 40,
        width: "100%",
        height: 150,
    }
})