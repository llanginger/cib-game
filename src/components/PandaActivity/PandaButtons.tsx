import * as React from "react";
import { View, StyleSheet } from "react-native";

import { PandaButton } from "./PandaButton";

interface IPandaButtonsProps {
    currentPanda: number;
}

export const PandaButtons = (props: IPandaButtonsProps) => {
    return (
        <View style={styles.container}>
            <PandaButton buttonState="empty" onPress={() => {}} text="1" />
            <PandaButton buttonState="blue" onPress={() => {}} text="2" />
            <PandaButton buttonState="grey" onPress={() => {}} text="3" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
});
