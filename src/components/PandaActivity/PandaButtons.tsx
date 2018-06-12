import * as React from "react";
import { View, StyleSheet } from "react-native";

import { PandaButton } from "./PandaButton";

interface IPandaButtonsProps {
    activeButton: number;
    onPress: any;
}

export const PandaButtons = (props: IPandaButtonsProps) => {
    const { activeButton } = props;
    console.log("Active button: ", activeButton);
    const isActive: (index: number) => "blue" | "empty" | "grey" = (
        index: number
    ) => {
        if (index < activeButton) {
            return "empty";
        } else if (index === activeButton) {
            return "blue";
        } else {
            return "grey";
        }
    };

    return (
        <View style={styles.container}>
            <PandaButton
                buttonState={isActive(0)}
                onPress={props.onPress}
                text="1"
            />
            <PandaButton
                buttonState={isActive(1)}
                onPress={props.onPress}
                text="2"
            />
            <PandaButton
                buttonState={isActive(2)}
                onPress={props.onPress}
                text="3"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
});
