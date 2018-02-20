//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

//Interface
interface IAccountScreenItemProps {
    leftText: string;
    rightText: string
}

// create a component
export const AccountScreenItem: React.StatelessComponent<IAccountScreenItemProps> = (props: IAccountScreenItemProps) => {

    const { leftText, rightText } = props
    return (
        <View style={styles.container}>
            <Text style={styles.leftText}>{leftText}</Text>
            <Text style={styles.rightText}>{rightText}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftText: {
        fontSize: 16,
    },
    rightText: {
        fontSize: 16,
        opacity: 0.7
    }
});
