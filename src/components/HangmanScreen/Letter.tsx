//import liraries
import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { appStyles } from "../../styles/styles"

//Interface
interface ILetterProps {
    letter: string
    backgroundColor: string,
    marginTop?: number
    onPress: any
}

// create a component
export const LetterButton: React.StatelessComponent<ILetterProps> = (props: ILetterProps) => {
    const { letter, backgroundColor, marginTop = 0, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor, marginTop }]}>
            <Text style={styles.text}>{letter.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexShrink: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        paddingBottom: 12,
        width: 55,
        paddingTop: 22,
        borderRadius: 10,
        marginHorizontal: 7,
    },
    text: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: appStyles.rockwellFont,

    }
});
