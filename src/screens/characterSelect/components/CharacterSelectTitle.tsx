//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Interface
interface ICharacterSelectTitleProps {
    children?: any
    fontSize: number
}

// create a component
export const CharacterSelectTitle: React.StatelessComponent<ICharacterSelectTitleProps> = (props: ICharacterSelectTitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontSize: props.fontSize }]}>Elige un protagonista!</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        justifyContent: 'center',
        width: "80%",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowColor: "#666"
    },
    title: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        padding: 10,
    }
});
