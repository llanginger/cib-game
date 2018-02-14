import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";
import { connect } from "react-redux";
import { IReducers } from "../../../redux/store";
import { makeUserAvatars } from "../../characterSelect/components/makeUserAvatars"

import { showLightBox } from "../showLightBox"

interface ICardSeparatorProps {
    color?: string
}

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height


const CardSeparator = (props: ICardSeparatorProps) => {
    return (
        <View style={{
            borderBottomColor: "white",
            borderBottomWidth: 0.5,
            width: "90%",
            marginVertical: 15
        }}>
        </View>
    )
}

interface ISkillCardProps {
    headerText: string;
    bodyText: string;
    color: string
    navigator: any
}
export const SkillCard = (props: ISkillCardProps) => {

    const { headerText, bodyText, color } = props

    const onSkillPress = () => {
        return showLightBox(props.navigator, { color, headerText, bodyText })
    }
    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            <TouchableOpacity onPress={onSkillPress} style={styles.cardHeader}>
                <Text style={styles.cardHeaderText}>{headerText}</Text>
            </TouchableOpacity>
            <CardSeparator color={color} />
            <View style={styles.cardBody}>
                <Text style={styles.cardBodyText}>{bodyText}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#daf6fa",
    },
    card: {
        backgroundColor: "white",
        justifyContent: "center",
        padding: 15,
        margin: 15,
        alignItems: "center",
        borderRadius: 5,
        shadowColor: "#888",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    cardHeader: {

    },
    cardBody: {

    },
    cardHeaderText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    cardBodyText: {
        color: "white",
        fontWeight: "600",
        fontSize: 14
    }
})