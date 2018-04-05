//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { connect } from "react-redux";
import { screenObjects } from "../../navigation/screenObjects";
import { SandwichBoard } from "../SandwichBoard/SandwichBoard";
import { gamOneSubmitAnswer } from "../../redux/actions/index";

//Interface
interface IReadyProps {
    dispatch?: any;
}

// create a component
const _Ready: React.StatelessComponent<IReadyProps> = (props: IReadyProps) => {
    const ReadyButton = () => (
        <AnimatedButton
            text="Ready?"
            correct={false}
            reset={false}
            revealed={false}
            animationInType="fadeInUp"
            animationOutType="fadeOutLeft"
            delay={0}
            onPress={() => console.log("Something")}
        />
    );
    return (
        <View style={styles.container}>
            <SandwichBoard />
            <ReadyButton />
        </View>
    );
};

export const Ready = connect()(_Ready);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 30
    }
});
