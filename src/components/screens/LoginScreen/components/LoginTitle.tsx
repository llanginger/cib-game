//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Interface
interface ILoginTitleProps {
    children: any
}

// create a component
export const LoginTitle: React.StatelessComponent = (props: ILoginTitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Bienvenidos a Cool Is Best</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    text: {
        color: "white",
        fontSize: 20
    }
});
