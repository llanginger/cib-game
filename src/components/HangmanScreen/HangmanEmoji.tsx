//import liraries
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Interface
interface IHangmanEmojiProps {

}

// create a component
export const HangmanEmoji: React.StatelessComponent<IHangmanEmojiProps> = (props: IHangmanEmojiProps) => {
    return (
        <View style={styles.container}>
            <Text>HangmanEmoji</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
