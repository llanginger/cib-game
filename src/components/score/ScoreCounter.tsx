import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";

export const ScoreCounter = (props: any) => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
});
