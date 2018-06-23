//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { BigFruit } from "./BigFruit";
import { FruitTab } from "./FruitTab";
import { appStyles } from "../../styles/styles";

//Interfaces
interface IFruitActivityProps {
    navigator?: any;
    dispatch?: any;
}

export type IFruitTabName = "faces" | "eyes" | "mouths";

interface IFruitActivityState {
    tabOnTop: IFruitTabName;
    currentFruit: "apple" | "banana" | "pear";
}

// create a component

export class FruitActivity extends React.Component<
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

        this.state = { tabOnTop: "eyes", currentFruit: "banana" };
        this._onChooseFruit = this._onChooseFruit.bind(this);
    }

    _menuPress = () => {
        this.props.navigator.resetTo({
            screen: "MenuScreen"
        });
    };

    _onTabPress = (tabOnTop: IFruitTabName) => {
        this.setState({ tabOnTop });
    };

    _onChooseFruit(fruit: "apple" | "banana" | "pear") {
        this.setState({ currentFruit: fruit });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScoreContainer
                    // hideScore
                    menuPress={this._menuPress}
                    containerProps={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                />
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
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
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
        marginTop: 75
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
