//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { appStyles } from "../../styles/styles";
//Interface
interface IRobotGameWordProps {
    word: string;
    correct: boolean;
}

// create a component
export const RobotGameWord: React.StatelessComponent<IRobotGameWordProps> = (
    props: IRobotGameWordProps
) => {
    return (
        <View style={styles.container}>
            <Text style={styles.levelTitle}>{props.word.toUpperCase()}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    levelTitle: {
        textAlign: "center",
        justifyContent: "center",
        lineHeight: 33,
        color: "#60b8ff",
        fontFamily: appStyles.font,
        fontSize: 24,
        height: 24
    }
});
