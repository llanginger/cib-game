//import liraries
import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { appStyles } from "../../styles/styles";
//Interface
interface IThumbsupButtonProps {
    source: number;
    onPress: any;
}

// create a component
export const ThumbsupButton: React.StatelessComponent<IThumbsupButtonProps> = (
    props: IThumbsupButtonProps
) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image
                style={styles.image}
                source={props.source}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        ...appStyles.shadow
    },
    image: {
        height: 100,
        width: 100
    }
});
