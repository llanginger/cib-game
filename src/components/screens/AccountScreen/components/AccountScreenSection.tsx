//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AccountScreenItem } from "./AccountScreenItem"

//Interface
interface IAccountScreenSectionProps {

}

// create a component
export const AccountScreenSection: React.StatelessComponent<IAccountScreenSectionProps> = (props: IAccountScreenSectionProps) => {
    return (
        <View style={styles.container}>
            <AccountScreenItem
                leftText="Nombre"
                rightText="Pablo"
            />
            <AccountScreenItem
                leftText="Apellido"
                rightText="Gonzales"
            />
            <AccountScreenItem
                leftText="Escuela"
                rightText="School Name"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});
