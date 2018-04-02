//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuButton } from "../MenuButton/MenuButton";

//Interface
interface IAccountScreenAvatarProps {}

const avatarDims: number = 120;
// create a component
export const AccountScreenAvatar: React.StatelessComponent<
    IAccountScreenAvatarProps
> = (props: IAccountScreenAvatarProps) => {
    return (
        <View style={styles.container}>
            <MenuButton
                viewStyleProps={{ height: avatarDims, width: avatarDims }}
                imageStyleProps={{ height: avatarDims, width: avatarDims }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: 40
    }
});
