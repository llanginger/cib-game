//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { appStyles } from "../../styles/styles"
import * as Animatable from "react-native-animatable"

//Interfaces

export interface IHangmanWord {
    letter: string;
    selected: boolean
}
interface IHangmanWordProps {
    word: IHangmanWord[]
    onPress: (index: number) => void
}

interface IHangmanWordState {

}

// create a component

export class HangmanWord extends React.Component<IHangmanWordProps, IHangmanWordState> {

    constructor(props) {
        super(props)
    }

    _makeWord = () => {
        return this.props.word.map((letter, i) => {
            return (
                <TouchableOpacity
                    disabled={letter.letter !== "?"}
                    key={i}
                    onPress={() => this.props.onPress(i)}
                >
                    <Animatable.View
                        animation={letter.selected ? "pulse" : ""} iterationCount="infinite"
                        duration={600}
                        easing="ease-in-out"
                        style={[styles.letterContainer, { borderBottomWidth: letter.letter === "?" ? 2 : 0 }]}
                    >
                        <Text style={[styles.letter, { color: letter.letter === "?" ? appStyles.colors.blue : "black" }]}>{letter.letter}</Text>
                    </Animatable.View>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this._makeWord()}
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    letter: {
        fontSize: 30,
        lineHeight: 38,
        fontFamily: appStyles.rockwellFont
    },
    letterContainer: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
        borderBottomWidth: 2,
        borderBottomColor: appStyles.colors.blue
    }
});
