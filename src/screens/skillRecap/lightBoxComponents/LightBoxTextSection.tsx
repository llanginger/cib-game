//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardSeparator } from "./CardSeparator"

//Interface
interface ILightBoxTextSectionProps {
    skillNumber: number;
    color: string;
    headerText: string;
    bodyText: { title: string; body: string[] }[];
}

// create a component
export const LightBoxTextSection: React.StatelessComponent<ILightBoxTextSectionProps> = (props: ILightBoxTextSectionProps) => {

    // Create a divider-separated list of text items to display

    const makeSection = () => {
        return props.bodyText.map((section, i, arr) => {
            return (
                <View key={i}>
                    <Text style={styles.headerText}>
                        {section.title}
                    </Text>
                    {makeItems(section.body)}
                    <CardSeparator color={props.color} />
                </View>
            )
        })
    }




    const makeItems = (body: string[]) => {
        return body.map((item, i, arr) => {
            return (
                <View key={i}>
                    <Text style={styles.bodyText}>
                        {item}
                    </Text>
                </View>
            )
        })
    }


    return (
        <View>
            <View style={[styles.skillNumberCircle, { borderColor: props.color }]}>
                <Text>{props.skillNumber}</Text>
            </View>
            <Text style={styles.headerText}>
                {props.headerText}
            </Text>
            <CardSeparator color={props.color} />
            {makeSection()}
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
        fontSize: 14
    }
})