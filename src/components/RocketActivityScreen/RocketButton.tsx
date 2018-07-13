//import liraries
import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { appStyles } from '../../styles/styles';
var Color = require('color');
//Interface
interface IRocketButtonProps {
    text: string
    color: string
    onPress: any
}

// create a component
export const RocketButton: React.StatelessComponent<IRocketButtonProps> = (props: IRocketButtonProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.container, {
                backgroundColor: props.color,
                borderColor: Color(props.color).darken(0.1)
            }]}
        >
            <Text style={[styles.text, { fontFamily: appStyles.rockwellFont }]}>{props.text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 80,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3
    },
    text: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: -10
    }
});
