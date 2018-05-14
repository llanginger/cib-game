import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { DrawerItem } from "./DrawerItem";
import { DrawerHeader } from "./DrawerHeader";
import { ResetButton } from "../ResetButton";
import { screenObjects } from "../../navigation/screenObjects";
import { appStyles } from "../../styles/styles";

const menuColors = ["#ff9933", "#663366"];

export class DrawerScreen extends React.Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <DrawerHeader />
                <DrawerItem
                    navigator={this.props.navigator}
                    text="Protagonistas"
                    navTo={screenObjects.CHARACTER_SELECT_SCREEN.screen}
                    backgroundColor="#cc0066"
                />
                <DrawerItem
                    navigator={this.props.navigator}
                    text="Las 6 Habilidades"
                    navTo="SkillRecapScreen"
                    backgroundColor="#3333cc"
                />
                <DrawerItem
                    navigator={this.props.navigator}
                    text="Mi Cuenta"
                    navTo="AccountScreen"
                    backgroundColor="#339900"
                />
                <DrawerItem
                    navigator={this.props.navigator}
                    text="Change Level"
                    navTo={screenObjects.SET_LEVEL_SCREEN.screen}
                    backgroundColor={appStyles.colors.blue}
                />
                <ResetButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#daf6fa"
    },
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
