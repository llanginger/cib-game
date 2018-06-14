//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";
import { BigFruit } from "./BigFruit";
import { FruitTab } from "./FruitTab";

//Interfaces
interface IFruitActivityProps {
    navigator?: any;
    dispatch?: any;
}

export type IFruit = "faces" | "eyes" | "mouths";

interface IFruitActivityState {
    tabOnTop: IFruit;
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

        this.state = { tabOnTop: "eyes" };
    }

    _menuPress = () => {
        this.props.navigator.resetTo({
            screen: "MenuScreen"
        });
    };

    _onTabPress = (tabOnTop: IFruit) => {
        this.setState({ tabOnTop }, () =>
            console.log("New state: ", this.state)
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <ScoreContainer
                    hideScore
                    menuPress={this._menuPress}
                    containerProps={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>HELLO</Text>
                </View>
                <BigFruit />
                <FruitTab
                    onTabPress={this._onTabPress}
                    tabOnTop={this.state.tabOnTop}
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
        textAlign: "center",
        fontSize: 24
    }
});
