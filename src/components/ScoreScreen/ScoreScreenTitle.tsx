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
        width: "80%",
        height: 50,
        backgroundColor: appStyles.colors.blue,
        ...appStyles.shadow,
        ...appStyles.buttonBorder,
        borderRadius: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: appStyles.font,
        fontSize: 24,
        fontWeight: "400",
        lineHeight: 30,
        marginTop: 10,
        backgroundColor: "transparent"
    }
});
