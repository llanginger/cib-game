//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Interface
interface ICardSeparatorProps {
    color: string
}

// create a component
export const CardSeparator: React.StatelessComponent<ICardSeparatorProps> = (props: ICardSeparatorProps) => {
    return (
        <View style={{
            borderBottomColor: props.color,
            borderBottomWidth: 0.5,
            marginVertical: 15
        }} />
    );
};
