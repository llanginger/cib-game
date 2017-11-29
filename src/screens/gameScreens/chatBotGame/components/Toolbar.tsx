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

import { IButtonObject } from "../../../../interfaces/index";

interface IToolbarProps {
    buttons: IButtonObject[];
}

export const Toolbar = (props: IToolbarProps) => {
    const { buttons = [] } = props;
    const makeButtons = () => {
        return buttons.map((button, i) => {
            return (
                <TouchableOpacity
                    /* disabled={!enabled} */
                    onPress={button.onClick}
                    key={i}
                    activeOpacity={0.8}
                    style={[styles.singleActiveButton]}
                >
                    <View>
                        <Text style={styles.singleActiveButtonText}>
                            {button.text}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        });
    };
    return <View style={styles.container}>{makeButtons()}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 0,
        height: 44
    },
    singleActiveButton: {
        backgroundColor: "#009ee0",
        flexGrow: 1,
        flex: 1,
        justifyContent: "center"
    },
    singleActiveButtonText: {
        fontSize: 20,
        textAlign: "center",
        color: "white"
    }
});
