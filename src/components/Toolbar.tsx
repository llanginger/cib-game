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

export const Toolbar = (props: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                /* disabled={!enabled} */
                onPress={() => console.log("Pressed")}
                activeOpacity={0.8}
                style={styles.singleActiveButton}
            >
                <View>
                    <Text style={styles.singleActiveButtonText}>Click</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                /* disabled={!enabled} */
                onPress={() => console.log("Pressed")}
                activeOpacity={0.8}
                style={styles.singleActiveButton}
            >
                <View>
                    <Text style={styles.singleActiveButtonText}>Click</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 0,
        height: 44
    },
    leftButton: {
        backgroundColor: "white",
        flexGrow: 1,
        flex: 1,
        borderRightWidth: 1,
        borderColor: "white",
        justifyContent: "center"
    },
    rightButton: {
        backgroundColor: "white",
        flexGrow: 1,
        flex: 1,
        borderColor: "white",
        borderLeftWidth: 1,
        justifyContent: "center"
    },
    singleActiveButton: {
        backgroundColor: "#fff1cc",
        flexGrow: 1,
        flex: 1,
        justifyContent: "center"
    },
    singleDisabledButton: {
        backgroundColor: "white",
        flexGrow: 1,
        flex: 1,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center",
        color: "black"
    },
    singleActiveButtonText: {
        fontSize: 20,
        textAlign: "center",
        color: "black"
    },
    singleDisabledButtonText: {
        fontSize: 20,
        textAlign: "center",
        color: "black"
    }
});
