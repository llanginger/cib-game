//import liraries
import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//Interface
interface IBigFruitProps {}

// create a component
export const BigFruit: React.StatelessComponent<IBigFruitProps> = (
    props: IBigFruitProps
) => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../images/laia/fruit-activity/fruit/banana.png")}
                resizeMode="contain"
                style={styles.fruit}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20
    },
    fruit: {
        width: "85%",
        height: "85%"
    }
});
