//import liraries
import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

//Interface
interface IThumbsupBubbleProps {
    text: string;
}

// create a component
export const ThumbsupBubble: React.StatelessComponent<IThumbsupBubbleProps> = (
    props: IThumbsupBubbleProps
) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require("../../images/laia/hand-game/bubble.png")}
                resizeMode="contain"
            />
            <View style={styles.imageTextContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    image: {
        width: "85%",
        height: 260,
        alignSelf: "center"
    },
    imageContainer: {
        marginBottom: 40,
        marginTop: 20
    },
    imageTextContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "15%",
        paddingBottom: 10
    },
    text: {
        fontSize: 26,
        color: "#54546a",
        textAlign: "center"
        // fontFamily: "Annie-Use-Your-Telescope"
    }
});
