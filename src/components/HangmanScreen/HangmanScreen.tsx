//import liraries
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { LetterButton } from "./Letter"
import { appStyles } from '../../styles/styles';
import { HangmanWord, IHangmanWord } from "./HangmanWord"

//Interfaces
interface IHangmanScreenProps {
    navigator?: any;
    dispatch?: any;
}

interface IHangmanScreenState {
    gameWord: IHangmanWord[]
}



// create a component

export class HangmanScreen extends React.Component<IHangmanScreenProps, IHangmanScreenState> {

    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    constructor(props) {
        super(props);

        this.state = {
            gameWord: [
                {
                    selected: false,
                    letter: "F"
                },
                {
                    selected: true,
                    letter: "?"
                },
                {
                    selected: false,
                    letter: "?"
                },
                {
                    selected: false,
                    letter: "r"
                },
            ]
        }
        this.props.navigator.setOnNavigatorEvent(
            this.onNavigatorEvent.bind(this)
        );

    }

    onNavigatorEvent(event) {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "menu") {
                this.props.navigator.toggleDrawer({
                    side: "left", // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true // does the toggle have transition animation or does it happen immediately (optional)
                });
            }
        }
    }

    _letterButtonOnPress = (newLetter: string) => {
        const indexToUpdate: number = this.state.gameWord.findIndex(letter => letter.selected)

        console.log("indexToUpdate: ", indexToUpdate)
        const updateWord = this.state.gameWord.map(letter => {
            return letter.selected ? { letter: newLetter, selected: false } : { ...letter, selected: false }
        })

        const updateSelected = updateWord.map((letter, i) => {
            return { ...letter, selected: i === indexToUpdate + 1 }
        })

        this.setState({ gameWord: updateSelected })
    }

    _hangmanWordLetterOnPress = (index: number) => {
        this.setState({
            gameWord: this.state.gameWord.map((letter, i) => {
                return { ...letter, selected: i === index }
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.gameArea}>
                    <HangmanWord onPress={this._hangmanWordLetterOnPress} word={this.state.gameWord} />
                </View>
                <View style={styles.blueArea}>
                    <View style={styles.buttonContainer} >
                        <LetterButton onPress={() => this._letterButtonOnPress("a")} backgroundColor="#f3b7fc" letter="a" />
                        <LetterButton onPress={() => this._letterButtonOnPress("e")} backgroundColor="#fffaba" letter="e" />
                        <LetterButton onPress={() => this._letterButtonOnPress("i")} backgroundColor="#88efc6" letter="i" />
                        <LetterButton onPress={() => this._letterButtonOnPress("o")} backgroundColor="#b58ee8" letter="o" />
                        <LetterButton onPress={() => this._letterButtonOnPress("u")} backgroundColor="#f2bf8b" letter="u" />
                        <LetterButton onPress={() => this._letterButtonOnPress("y")} marginTop={20} backgroundColor="#f386a6" letter="Y" />
                    </View>
                    <TouchableOpacity style={styles.hintButton}>
                        <Text style={[styles.buttonText, { color: appStyles.colors.blue }]}>Hint</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { right: 20 }]}>
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    blueArea: {
        flex: 1,
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: "#e4f5f9"
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    button: {
        position: "absolute",
        bottom: 20,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appStyles.colors.blue
    },
    hintButton: {
        position: "absolute",
        bottom: 20,
        height: 80,
        width: 80,
        left: 20,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: appStyles.colors.blue
    },
    buttonText: {
        color: "white",
        fontSize: 24,
    },
    gameArea: {
        height: 435,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});
