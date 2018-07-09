//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux"
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { BigFruit } from "./BigFruit";
import { FruitTab } from "./FruitTab";
import { appStyles } from "../../styles/styles";
import { FruitDoneButton } from "./FruitDoneButton"
import { IFruitType } from "./IFruitType"
import { submitAnswer } from "../../redux/actions/index"
//Interfaces
interface IFruitActivityProps {
    navigator?: any;
    dispatch?: any;
    submitAnswer: any
}

export type IFruitTabName = "faces" | "eyes" | "mouths";

interface IFruitActivityState {
    tabOnTop: IFruitTabName;
    currentFruit: IFruitType
    currentLevel: number
}

// create a component

const initState: IFruitActivityState = {
    tabOnTop: "faces", currentFruit: "empty", currentLevel: 0
}
class _FruitActivity extends React.Component<
    IFruitActivityProps,
    IFruitActivityState
    > {
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

        this.state = { ...initState };
        this._onChooseFruit = this._onChooseFruit.bind(this);
    }

    _endGame = (correct: boolean) => {

        this.props.submitAnswer(correct);

        setTimeout(() => {
            this.setState({ tabOnTop: "faces", currentFruit: "empty" }, () => {
                this.props.navigator.showModal({
                    screen: "ScoreScreen"
                });
            });
        }, 3000);
    }

    _nextLevel = (correct: boolean) => {
        this.setState({ currentFruit: "empty", currentLevel: 1 + this.state.currentLevel }, () => this.props.submitAnswer(true))
    }


    _menuPress = () => {
        this.props.navigator.resetTo({
            screen: "MenuScreen"
        });
    };

    _onTabPress = (tabOnTop: IFruitTabName) => {
        this.setState({ tabOnTop });
    };

    _onChooseFruit(fruit: IFruitType) {
        this.setState({ currentFruit: fruit });
    }

    _onButtonPress = () => {
        console.log("Fruit activity state: ", this.state)
        const { currentLevel } = this.state;

        if (currentLevel < 2) {
            this._nextLevel(true);
        } else {
            this._endGame(true);
            // this._nextLevel(false);
        }


    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        A <Text style={styles.titleHighlight}>Angry</Text>{" "}
                        Face...
                    </Text>
                </View>
                <BigFruit currentFruit={this.state.currentFruit} />
                <FruitTab
                    onTabPress={this._onTabPress}
                    tabOnTop={this.state.tabOnTop}
                    onChooseFruit={this._onChooseFruit}
                    currentFruit={this.state.currentFruit}
                />
                <FruitDoneButton onPress={this._onButtonPress} />
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    submitAnswer
}
export const FruitActivity: any = connect(mapStateToProps, mapDispatchToProps)(_FruitActivity)

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: "space-between"
    },
    blueArea: {
        height: "30%",
        paddingHorizontal: 60,
        paddingVertical: 20,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#e4f5f9"
    },
    titleContainer: {
        width: "100%",
        marginTop: 40
    },
    title: {
        fontFamily: appStyles.rockwellFont,
        textAlign: "center",
        fontSize: 24,
        lineHeight: 30
    },
    titleHighlight: {
        fontFamily: appStyles.rockwellFont,
        textAlign: "center",
        fontSize: 24,
        lineHeight: 30,
        color: "#60b8ff"
    }
});
