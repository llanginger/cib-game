//import liraries
import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { appStyles } from "../../styles/styles";
//Interface
interface IThumbsupButtonProps {
    source: number;
    onPress: any;
    color: string;
}

// create a component
export const ThumbsupButton: React.StatelessComponent<IThumbsupButtonProps> = (
    props: IThumbsupButtonProps
) => {
    const { color, onPress, source } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={source} resizeMode="contain" />
            <Text style={[styles.text, { color }]}>Helpful</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // ...appStyles.shadow
    },
    image: {
        height: 100,
        width: 100
    },
    text: {
        fontFamily: appStyles.handDrawnFont,
        fontSize: 30,
        textAlign: "center"
    }
});
