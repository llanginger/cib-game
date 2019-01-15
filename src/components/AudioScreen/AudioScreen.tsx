import React from "react"
import { View, TouchableOpacity, ScrollView } from "react-native"
import { gameSoundsArray } from "../../Audio"
import _ from "lodash"
import { Text } from "react-native-animatable";
import { ScoreContainer } from "../ScoreCounter/ScoreContainer";

export class AudioScreen extends React.Component<any, any> {

    static navigatorStyle = {
        navBarTextColor: "red",
        drawUnderNavBar: true,
        navBarBackgroundColor: "red",
        navBarHidden: true,
        navBarTranslucent: true,
        navBarTransparent: true
    };

    _menuPress = () => {
        setTimeout(
            () =>
                this.props.navigator.resetTo({
                    screen: "MenuScreen",
                    animated: true,
                    animationType: "fade"
                }),
            200
        );
    };

    _makeButtons = () => {
        return gameSoundsArray.map((sound, i) => {
            return (
                <TouchableOpacity
                    key={i}
                    onPress={() => {

                        sound.sound.play()
                    }}
                    style={{
                        paddingVertical: 10,
                        marginVertical: 5,
                        width: "90%",

                        backgroundColor: "palevioletred"
                    }}
                >
                    <Text style={{ color: "white", textAlign: "center" }}>{sound.name}</Text>
                </TouchableOpacity>
            )
        })
    }


    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: "white", paddingTop: 40 }}
            >
                <ScrollView
                    contentContainerStyle={{ alignItems: "center" }}
                >
                    <Text>Audio screen</Text>
                    {this._makeButtons()}
                </ScrollView>
                <ScoreContainer
                    menuPress={this._menuPress}
                    containerProps={{
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                />
            </View>
        )
    }
}