//import liraries
import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { appStyles } from '../../styles/styles';
var Color = require('color');
import * as Animatable from "react-native-animatable"
//Interface
interface IRocketButtonProps {
    text: string
    color: string
    onPress: any
    containerStyle?: ViewStyle
    empty?: boolean
    selected?: boolean
}

// create a component
export const RocketButton: React.StatelessComponent<IRocketButtonProps> = (props: IRocketButtonProps) => {

    const containerStyle = props.empty ? styles.emptyButton : styles.container

    const textStyle = [props.empty ? styles.emptyButtonText : styles.text, { color: props.selected ? "white" : "black" }]
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.empty}
            style={[containerStyle, {
                backgroundColor: props.color,
                borderColor: Color(props.color).darken(0.1)
            }, props.containerStyle]}
        >
            <Animatable.View
                animation={props.empty && props.selected ? "pulse" : ""} iterationCount="infinite"
                duration={600}
                easing="ease-in-out"
            >
                <Text style={textStyle}>{props.empty ? "?" : props.text}</Text>
            </Animatable.View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 65,
        marginVertical: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,

    },
    emptyButton: {
        height: 65,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 3,
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center"

    },
    emptyButtonText: {
        fontSize: 30,
        lineHeight: 35,
        marginBottom: -14,
        fontFamily: appStyles.rockwellFont,
    },
    text: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: -10,
        fontFamily: appStyles.rockwellFont
    }
});
