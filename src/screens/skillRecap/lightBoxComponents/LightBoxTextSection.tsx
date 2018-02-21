//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardSeparator } from "./CardSeparator"

//Interface
interface ILightBoxTextSectionProps {
    skillNumber: number;
    color: string;
    headerText: string;
    bodyText: string;
    skillCircle?: boolean
}

// create a component
export const LightBoxTextSection: React.StatelessComponent<ILightBoxTextSectionProps> = (props: ILightBoxTextSectionProps) => {

    const {
        skillCircle = false
    } = props
    return (
        <View>
            {skillCircle ?
                <View style={[styles.skillNumberCircle, { borderColor: props.color }]}>
                    <Text>{props.skillNumber}</Text>
                </View> :
                null
            }
            <Text style={styles.headerText}>
                {props.headerText}
            </Text>
            <CardSeparator color={props.color} />
            <Text style={styles.bodyText}>
                {props.bodyText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    skillNumberCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        position: "relative",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },

    headerText: {
        fontSize: 18,
        textAlign: "center"
    },
    bodyText: {
        fontSize: 16
    }
})