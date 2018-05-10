//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { appStyles } from "../../styles/styles";

//Interface
interface IThumbsupTitleProps {
    titleText: string;
    emotionText: string;
}

// create a component
export const ThumbsupTitle: React.StatelessComponent<IThumbsupTitleProps> = (
    props: IThumbsupTitleProps
) => {
    const { titleText, emotionText } = props;
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
            <Text style={styles.emotionText}>{emotionText} </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    titleContainer: {
        // height: 150,
        flexDirection: "column"
    },
    titleText: {
        color: "#b6b7b7",
        fontSize: 26,
        lineHeight: 35,
        height: 25,
        fontFamily: appStyles.rockwellFont,
        marginBottom: 20,
        marginLeft: 40,
        marginTop: 20
    },
    emotionText: {
        textAlign: "center",
        fontFamily: appStyles.rockwellFont,
        color: appStyles.colors.blue,
        fontSize: 40,
        lineHeight: 45,
        height: 40,
        marginBottom: 20
    }
});
