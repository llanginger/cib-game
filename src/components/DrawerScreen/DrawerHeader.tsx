//import liraries
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

//Interface
interface IDrawerHeaderProps {}

// create a component
export const DrawerHeader: React.StatelessComponent<IDrawerHeaderProps> = (
    props: IDrawerHeaderProps
) => {
    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require("../../images/cibLogo.png")}
                resizeMode="contain"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    logoContainer: {
        height: 100,
        marginBottom: 5,
        backgroundColor: "white",
        justifyContent: "center"
    },
    logo: {
        marginHorizontal: 20,
        height: 50,
        width: undefined
    }
});
