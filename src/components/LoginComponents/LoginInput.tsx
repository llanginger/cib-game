//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProperties } from 'react-native';

//Interfaces
interface ILoginInputProps {
    children?: any;
    placeholder: string;
    inputProps?: TextInputProperties;
    viewProps?: {}
    onSubmit: any
}

interface ILoginInputState {
    text: string
}

// create a component

export class LoginInput extends React.Component<ILoginInputProps, ILoginInputState> {

    constructor(props) {
        super(props)
        this.state = { text: "" }
    }

    render() {
        return (
            <View style={[styles.container, this.props.viewProps]}>
                <TextInput
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onSubmitEditing={this.props.onSubmit}
                    placeholderTextColor="#757575"
                    onChangeText={text => this.setState({ text })}
                    {...this.props.inputProps}
                />
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "80%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 20
    },
});
