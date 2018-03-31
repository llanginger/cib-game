//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserAvatar } from "../../../sharedComponents/UserAvatar";

//Interface
interface IAccountScreenAvatarProps {}

const avatarDims: number = 120;
// create a component
export const AccountScreenAvatar: React.StatelessComponent<
    IAccountScreenAvatarProps
> = (props: IAccountScreenAvatarProps) => {
    return (
        <View style={styles.container}>
            <UserAvatar
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
