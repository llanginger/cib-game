import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Menu = props => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../images/cibLogo.png")}
                    resizeMode="contain"
                />
            </View>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#daf6fa"
    },
    logoContainer: {
        height: 100,
        backgroundColor: "white",
        justifyContent: "center"
    },
    logo: {
        marginHorizontal: 20,
        height: 50,
        width: undefined
    }
});
