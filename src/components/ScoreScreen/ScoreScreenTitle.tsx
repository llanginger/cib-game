//import liraries
import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle
} from "react-native";
import { appStyles } from "../../styles/styles";

//Interface
interface IScoreScreenTitleProps {
    text: string;
    viewStyles?: ViewStyle;
}

// create a component
export const ScoreScreenTitle: React.StatelessComponent<
    IScoreScreenTitleProps
> = (props: IScoreScreenTitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        backgroundColor: appStyles.colors.blue,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: appStyles.rockwellFont,
        fontSize: 24,
        marginBottom: -10,
        padding: 10,
        fontWeight: "400",
        backgroundColor: "transparent"
    }
});
