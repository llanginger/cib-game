//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";

//Interface
interface IGameImageProps {
    color: boolean;
    source: number;
    reveal: boolean;
    reset: boolean;
}

// create a component
export const GameOneImage: React.StatelessComponent<IGameImageProps> = (
    props: IGameImageProps
) => {
    return (
        <Animatable.View
            animation={props.reset ? "fadeOut" : "fadeIn"}
            duration={1000}
            style={styles.imageContainer}
        >
            <Image
                style={styles.image}
                source={props.source}
                resizeMode="contain"
            />
        </Animatable.View>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
        width: "100%",
        backgroundColor: "white",
        paddingVertical: 10
    },
    image: {
        height: "100%",
        width: "100%"
    }
});
