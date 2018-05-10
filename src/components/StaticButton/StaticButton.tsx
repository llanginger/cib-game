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
interface IStaticButtonProps {
    text: string;
    viewStyles?: ViewStyle;
    onPress: any;
}

// create a component
export const StaticButton: React.StatelessComponent<IStaticButtonProps> = (
    props: IStaticButtonProps
) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 50,
        backgroundColor: appStyles.colors.green,
        ...appStyles.shadow,
        ...appStyles.buttonBorder,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: appStyles.rockwellFont,
        fontSize: 24,
        lineHeight: 29,
        height: 24,
        fontWeight: "400",
        backgroundColor: "transparent"
    }
});
