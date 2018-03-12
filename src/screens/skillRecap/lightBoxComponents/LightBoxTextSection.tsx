//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
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
                <View style={styles.section} key={i}>
                    <Text style={styles.headerText}>
                        {section.title}
                    </Text>
                    {makeItems(section.body)}
                    {/* <CardSeparator color={props.color} /> */}
                </View>
            )
        })
    }




    const makeItems = (body: string[]) => {
        return body.map((item, i) => {
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
        <View >
            <View style={styles.titleContainer}>
                <View style={[styles.skillNumberCircle, { borderColor: props.color }]}>
                    <Text>{props.skillNumber}</Text>
                </View>
                <Text style={[styles.headerText, { textDecorationColor: props.color, textDecorationLine: "underline" }]}>
                    {props.headerText}
                </Text>
                {/* <CardSeparator color={props.color} /> */}
            </View>
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
    titleContainer: {
        backgroundColor: "white",
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    section: {
        marginBottom: 10,
        backgroundColor: "white",
        width: "100%",
        padding: 10
    },
    headerText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10
    },
    bodyText: {
        fontSize: 14,
        marginBottom: 15
    }
})