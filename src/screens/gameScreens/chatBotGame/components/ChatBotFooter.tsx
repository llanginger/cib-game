import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    Platform
} from "react-native";

interface IChatbotFooterProps {
    botTyping: boolean;
}

export const ChatbotFooter = (props: IChatbotFooterProps) => {
    if (props.botTyping) {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Chatbot is typing</Text>
            </View>
        );
    } else {
        return <View style={styles.emptyFooterContainer} />;
    }
};

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    emptyFooterContainer: {
        marginBottom: 10
    },
    footerText: {
        fontSize: 14,
        color: "#aaa"
    }
});
